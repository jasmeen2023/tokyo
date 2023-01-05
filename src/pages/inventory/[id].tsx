import LoadingButton from '@mui/lab/LoadingButton';
import { Card, Container, Grid, Typography } from '@mui/material';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect, useState } from 'react';

import {
  useGetAttributes,
  useUpdateAttributeMany,
} from '@/hooks/product/useProduct';

import AttributeList from '@/content/Inventory/Attribute/AttributeList';
import CreateSubAttribute from '@/content/Inventory/SubAttribute/CreateSubAttribute';
import SubAttributeRow from '@/content/Inventory/SubAttribute/SubAttributeRow';
import SidebarLayout from '@/layouts/SidebarLayout';

export interface SubAttribute {
  _id: string;
  name?: string;
  status?: string;
  avatar?: string;
  product?: string;
  parentAttribute?: string;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}

export interface Attribute {
  _id: string;
  name: string;
  status: string;
  avatar: string;
  product: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  subAttributes: SubAttribute[];
}

const InventoryProduct = () => {
  const [edit, setEdit] = useState<SubAttribute[]>([]);
  const [currentAttribute, setCurrentAttribute] = useState<string>('');
  const [attributes, setAttributes] = useState<Attribute[]>([]);

  const updateAttributeManyHook = useUpdateAttributeMany();

  const router = useRouter();
  const { id } = router.query;
  const getAttributesHook = useGetAttributes();

  const getAttributes = async () => {
    const res: any = await getAttributesHook.mutateAsync({
      query: {
        product: id,
      },
    });

    if (res?.status === 'success') {
      setAttributes(res?.attributes);
      if (res?.attributes?.length) {
        setCurrentAttribute(res?.attributes[0]?._id);
      }
    }
  };

  const updateSubAttributes = async () => {
    const res: any = await updateAttributeManyHook.mutateAsync({
      body: edit,
    });
    if (res?.status === 'success') {
      setEdit([]);

      // const updatedSubAttributeIds = res?.updatedAttributes?.map(
      //   (subAttribute) => subAttribute?._id
      // );

      // const parentAttributeIds = Array.from(
      //   new Set(
      //     res?.updatedAttributes?.map(
      //       (attributes) => attributes?.parentAttributes
      //     )
      //   )
      // );

      // const parentAttribute = attributes.find((attribute) =>
      //   parentAttributeIds.includes(attribute?._id)
      // );
      // const notUpdated = parentAttribute?.subAttributes?.filter(
      //   (subAttribute) => !updatedSubAttributeIds.includes(subAttribute?._id)
      // );

      // const updatedParent = {
      //   ...parentAttribute,
      //   subAttributes: [
      //     ...(notUpdated as SubAttribute[]),
      //     ...res.updatedAttributes,
      //   ],
      // };

      // console.log(updatedParent);
    }
  };

  useEffect(() => {
    getAttributes();
  }, []);

  return (
    <>
      <Head>
        <title>Transactions - Applications</title>
      </Head>

      <Container maxWidth='lg'>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='stretch'
          spacing={3}
        >
          <Grid item xs={3.5} sx={{ height: '80vh' }}>
            <AttributeList
              attributes={attributes}
              id={id as string}
              currentAttribute={currentAttribute}
              setCurrentAttribute={setCurrentAttribute}
            />
          </Grid>
          <Grid
            item
            xs={8.5}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Card>
                    <Box sx={{ px: 2, py: 2, bgcolor: '#EEF7FE' }}>
                      <Grid container>
                        <Grid item xs>
                          <Typography>Sub Attribute Name</Typography>
                        </Grid>
                        <Grid item xs>
                          <Typography>Attribute Image</Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography>Status</Typography>
                        </Grid>
                        <Grid item xs={2} sx={{ textAlign: 'end', pr: 2 }}>
                          <Typography>Actions</Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Card>
                </Grid>
                {attributes.find(
                  (attribute) => attribute._id === currentAttribute
                )?.subAttributes.length === 0 ? (
                  <Grid item xs={12}>
                    <CreateSubAttribute
                      id={id as string}
                      currentAttribute={currentAttribute}
                    />
                  </Grid>
                ) : edit.length ===
                  attributes.find(
                    (attribute) => attribute._id === currentAttribute
                  )?.subAttributes.length ? (
                  <Grid item xs={12}>
                    <CreateSubAttribute
                      id={id as string}
                      currentAttribute={currentAttribute}
                    />
                  </Grid>
                ) : null}

                <SubAttributeRow
                  setEdit={setEdit}
                  edit={edit}
                  attributes={attributes}
                  currentAttribute={currentAttribute}
                />
              </Grid>
            </Box>
            <Box>
              {edit.length ? (
                <Grid container>
                  <Grid item xs></Grid>

                  <Grid item xs={2.5}>
                    <Button
                      onClick={() => setEdit([])}
                      variant='outlined'
                      sx={{ minWidth: 150 }}
                    >
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item xs={2.5}>
                    <LoadingButton
                      loading={updateAttributeManyHook?.isLoading}
                      onClick={() => {
                        updateSubAttributes();
                      }}
                      type='submit'
                      variant='contained'
                      sx={{ minWidth: 150 }}
                    >
                      Save
                    </LoadingButton>
                  </Grid>
                </Grid>
              ) : null}
              {!edit.length ? (
                <Grid container>
                  <Grid item xs></Grid>

                  <Grid item xs={2.5}>
                    <Button
                      onClick={() => {
                        const subAttributes = attributes.find(
                          (attribute) => attribute._id === currentAttribute
                        )?.subAttributes;
                        subAttributes
                          ? setEdit((prev) => [...prev, ...subAttributes])
                          : null;
                      }}
                      variant='contained'
                      sx={{ minWidth: 150 }}
                    >
                      Edit Sub Attributes
                    </Button>
                  </Grid>
                </Grid>
              ) : null}
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

InventoryProduct.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default InventoryProduct;

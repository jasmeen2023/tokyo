import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import { Card, Grid, InputLabel, Select } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { message, Upload, UploadProps } from 'antd';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload';
import Image from 'next/image';
import { Dispatch, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { useImageUploadToAWS } from '@/hooks/miscellaneous/image/useImage';

import { SubAttribute } from '@/pages/inventory/[id]';

import InventorySubAttributeMenu from './InventorySubAttributeMenu';
import AttributeDeleteDialogue from '../Attribute/AttributeDeleteDialogue';

interface EditModeProps {
  subAttribute: SubAttribute;
  edit: SubAttribute[];
  setEdit: Dispatch<React.SetStateAction<SubAttribute[]>>;
}

const EditMode = ({ subAttribute, setEdit, edit }: EditModeProps) => {
  const uploadImage = useImageUploadToAWS();
  const [name, setName] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>();
  const [openSubAttributeDelete, setOpenAttributeDelete] =
    useState<boolean>(false);
  const [subAttributeDelete, setAttributeDelete] = useState<
    SubAttribute | undefined
  >();

  const handleChange: UploadProps['onChange'] = async (
    info: UploadChangeParam<UploadFile>
  ) => {
    const isJpgOrPng =
      info.file.type === 'image/jpeg' || info.file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }

    if (info.file.status === 'uploading') {
      return;
    }

    if (info.file) {
      // eslint-disable-next-line prefer-const
      let formData = new FormData();
      formData.append('image', info.file as RcFile);

      const res: any = await uploadImage.mutateAsync({ body: formData });
      // Get this url from response in real world.
      if (res?.status === 'success') {
        setImageUrl(res?.uri);
        if (edit?.find((attribute) => attribute?._id === subAttribute?._id)) {
          const restEdit = edit?.filter(
            (attribute) => attribute?._id !== subAttribute?._id
          );
          setEdit([
            ...restEdit,
            {
              ...subAttribute,
              avatar: res?.uri || subAttribute?.avatar,
            },
          ]);
        }
      }
    }
  };

  const handleDeleteAttribute = (attribute, value) => {
    if (value && attribute) {
      setAttributeDelete(attribute);
      setOpenAttributeDelete(true);
    } else {
      setOpenAttributeDelete(false);
    }
  };

  const addCatalogue = Yup.object().shape({
    name: Yup.string().required('Required'),
    status: Yup.string().required('Required'),
  });
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addCatalogue),
    mode: 'onChange',
  });

  // const getValues = (target) => {
  //   let name, status;
  //   if (nameRef?.current) {
  //     name = nameRef?.current?.value;
  //   }
  //   if (target.name === 'status') {
  //     status = statusRef?.current?.value;
  //   }

  //   return { name, status };
  // };

  console.log(edit, 'this is edit');

  const handleFormChange = (event) => {
    const restEdit = edit?.filter(
      (attribute) => attribute?._id !== subAttribute?._id
    );
    if (edit?.find((attribute) => attribute?._id === subAttribute?._id)) {
      setEdit([
        ...restEdit,
        {
          ...subAttribute,
          [event.target.name]: event.target.value,
        },
      ]);
    }
  };

  return (
    <Card>
      <Box component='form' sx={{ px: 2, py: 1 }}>
        <Grid
          container
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid item xs>
            <TextField
              onChange={handleFormChange}
              size='small'
              name='name'
              defaultValue={subAttribute?.name}
            />
          </Grid>
          <Grid
            item
            xs
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Upload
              showUploadList={false}
              beforeUpload={() => false}
              maxCount={6}
              onChange={handleChange}
            >
              <LoadingButton
                loading={uploadImage?.isLoading}
                type='button'
                fullWidth
                variant='text'
              >
                <Image
                  src={
                    imageUrl ||
                    subAttribute?.avatar ||
                    '/images/noattribute.png'
                  }
                  alt='attribute image'
                  width={45}
                  height={45}
                />
              </LoadingButton>
            </Upload>
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel size='small'>Status</InputLabel>
              <Select
                fullWidth
                label='Status'
                name='status'
                size='small'
                onChange={handleFormChange}
                defaultValue={subAttribute?.status}
              >
                <MenuItem value='active'>
                  <Box
                    sx={{
                      display: 'flex',
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 18,
                        height: 18,
                        bgcolor: '#00AB4D',
                        borderRadius: '50%',
                        mr: 1,
                      }}
                    ></Box>
                    Active
                  </Box>
                </MenuItem>
                <MenuItem value='inactive'>
                  <Box
                    sx={{
                      display: 'flex',
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 18,
                        height: 18,
                        bgcolor: '#FFCA0B',
                        borderRadius: '50%',
                        mr: 1,
                      }}
                    ></Box>
                    In Active
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              justifyContent: 'end',
              textAlign: 'end',
              pr: 2,
            }}
          >
            <InventorySubAttributeMenu
              subAttribute={subAttribute}
              edit={edit}
              setEdit={setEdit}
              handleDelete={(attribute) =>
                handleDeleteAttribute(attribute, true)
              }
            />
          </Grid>
        </Grid>
      </Box>
      <AttributeDeleteDialogue
        open={openSubAttributeDelete}
        attribute={subAttributeDelete}
        handleClose={handleDeleteAttribute}
      />
    </Card>
  );
};

export default EditMode;

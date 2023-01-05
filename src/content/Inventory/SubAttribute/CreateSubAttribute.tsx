import { yupResolver } from '@hookform/resolvers/yup';
import { Add, CloudUpload } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Card, Grid, InputLabel, Select } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { message, Upload, UploadProps } from 'antd';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { useImageUploadToAWS } from '@/hooks/miscellaneous/image/useImage';
import { useCreateAttribute } from '@/hooks/product/useProduct';

const CreateSubAttribute = ({ id, currentAttribute }) => {
  const [imageUrl, setImageUrl] = useState<string>();

  const addInventory = Yup.object().shape({
    name: Yup.string().required('Required'),
    status: Yup.string().required('Required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addInventory),
  });

  const createAttributeHook = useCreateAttribute();
  const uploadImage = useImageUploadToAWS();

  const createInventoryAttribute = async (data) => {
    const res = await createAttributeHook.mutateAsync(data);
    return res;
  };

  const onSubmit = async (data) => {
    try {
      const res: any = await createInventoryAttribute({
        body: {
          ...data,
          avatar: imageUrl,
          product: id,
          parentAttribute: currentAttribute,
        },
      });
      if (res.status === 'success') {
        // handleCloseSuccess(true);
        // launch success popup
      }
    } catch (error: any) {
      console.log(error);
      return;
    }
  };

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
      }
    }
  };
  return (
    <Card>
      <Box sx={{ px: 2, py: 1 }}>
        <Grid container>
          <Grid item xs>
            <TextField
              {...register('name')}
              name='name'
              size='small'
            ></TextField>
          </Grid>
          <Grid item xs>
            <Upload
              className='avatar-uploader'
              showUploadList={false}
              beforeUpload={() => false}
              onChange={handleChange}
            >
              {imageUrl ? (
                <Image src={imageUrl} alt='avatar' width={40} height={40} />
              ) : (
                <LoadingButton
                  loading={uploadImage?.isLoading}
                  sx={{ color: '#00AB4D' }}
                >
                  <CloudUpload sx={{ mr: 1 }} />
                  <Typography>Upload Image</Typography>
                </LoadingButton>
              )}
            </Upload>
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel size='small'>Status</InputLabel>
              <Select
                {...register('status')}
                fullWidth
                label='Status'
                name='status'
                size='small'
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
            <LoadingButton
              loading={createAttributeHook?.isLoading}
              onClick={handleSubmit(onSubmit)}
              sx={{ color: '#00AB4D' }}
            >
              <Add />
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

CreateSubAttribute.propTypes = {
  id: PropTypes.string.isRequired,
  currentAttribute: PropTypes.string.isRequired,
};

export default CreateSubAttribute;

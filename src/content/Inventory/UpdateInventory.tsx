import { yupResolver } from '@hookform/resolvers/yup';
import { Add } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { DialogContent, InputLabel, Select, Slide } from '@mui/material';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { TransitionProps } from '@mui/material/transitions';
import { message, Upload } from 'antd';
import {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from 'antd/es/upload';
import { useAtom } from 'jotai';
import PropTypes from 'prop-types';
import { forwardRef, ReactElement, Ref, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { useImageUploadToAWS } from '@/hooks/miscellaneous/image/useImage';
import { useUpdateProduct } from '@/hooks/product/useProduct';

import { updateInventoryAtom } from '@/store/inventory';

const DialogWrapper = styled(Dialog)(() => ({}));

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction='down' ref={ref} {...props} />;
});

const UpdateInventory = ({ onClose, snack, open }) => {
  const [updateProduct, setUpdateProduct] = useAtom(updateInventoryAtom);

  const handleClose = () => {
    onClose(snack);
  };

  const handleCloseSuccess = (value: boolean) => {
    onClose(value);
  };

  const addInventory = Yup.object().shape({
    name: Yup.string().required('Required'),
    category: Yup.string().required('Required'),
    status: Yup.string().required('Required'),
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addInventory),
    defaultValues: {
      category: updateProduct?.category,
      name: updateProduct?.name,
      status: updateProduct?.status,
    },
  });

  const onSubmit = async (data) => {
    console.log(updateProduct?._id, 'updateProduct');
    try {
      const res: any = await updateInventoryProduct({
        query: {
          id: updateProduct?._id,
        },
        body: { ...data, avatar: imageUrl },
      });
      if (res.status === 'success') {
        handleCloseSuccess(true);
      }
    } catch (error: any) {
      console.log(error);
      return;
    }
  };

  const updateProductHook = useUpdateProduct();
  const uploadImage = useImageUploadToAWS();

  const updateInventoryProduct = async (data) => {
    const res = await updateProductHook.mutateAsync(data);
    return res;
  };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = async (
    info: UploadChangeParam<UploadFile>
  ) => {
    const isJpgOrPng =
      info.file.type === 'image/jpeg' || info.file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }

    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }

    if (info.file) {
      // eslint-disable-next-line prefer-const
      let formData = new FormData();
      formData.append('image', info.file as RcFile);

      const res: any = await uploadImage.mutateAsync({ body: formData });
      // Get this url from response in real world.
      if (res?.status === 'success') {
        setLoading(false);
        setImageUrl(res?.uri);
      }
    }
  };

  useEffect(() => {
    setValue('status', updateProduct?.status);
    setValue('category', updateProduct?.category);
    setValue('name', updateProduct?.name);
  }, [updateProduct]);

  return (
    <DialogWrapper
      open={open}
      TransitionComponent={Transition}
      keepMounted
      maxWidth='xs'
      fullWidth
      scroll='paper'
      onClose={handleClose}
    >
      <DialogTitle>Update Product</DialogTitle>
      <DialogContent>
        <Box>
          <FormControl fullWidth sx={{ mt: 1 }}>
            <InputLabel id='demo-simple-select-helper-label'>
              Product Type
            </InputLabel>
            <Select
              {...register('category')}
              fullWidth
              labelId='demo-simple-select-helper-label'
              id='demo-simple-select-helper'
              label='Product Type'
              name='category'
              defaultValue={updateProduct?.category}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value='sofa'>Sofa</MenuItem>
            </Select>
          </FormControl>
          <TextField
            {...register('name')}
            fullWidth
            required
            name='name'
            margin='normal'
            label='Display Name'
            InputLabelProps={{
              shrink: true,
            }}
          />

          <RadioGroup
            {...register('status')}
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='status'
            defaultValue={updateProduct?.status}
          >
            <FormControlLabel
              {...register('status')}
              value='active'
              control={<Radio size='small' />}
              label='Active'
            />
            <FormControlLabel
              {...register('status')}
              value='inactive'
              control={<Radio size='small' />}
              label='In Active'
            />
          </RadioGroup>

          <Upload
            name='avatar'
            listType='picture-card'
            className='avatar-uploader'
            showUploadList={false}
            beforeUpload={() => false}
            onChange={handleChange}
          >
            {imageUrl || updateProduct?.avatar ? (
              <img
                src={imageUrl || updateProduct?.avatar}
                alt='avatar'
                style={{ width: '100%' }}
              />
            ) : (
              <LoadingButton
                loading={uploadImage?.isLoading}
                type='button'
                fullWidth
                sx={{ my: 2.6, p: 1.4, flexDirection: 'column' }}
                variant='text'
              >
                <Add /> Upload
              </LoadingButton>
            )}
          </Upload>
          <LoadingButton
            type='submit'
            loading={updateProductHook?.isLoading}
            fullWidth
            sx={{ my: 2.6, p: 1.4 }}
            variant='contained'
            color='primary'
            onClick={handleSubmit(onSubmit)}
          >
            Update Product
          </LoadingButton>
        </Box>
      </DialogContent>
    </DialogWrapper>
  );
};

UpdateInventory.propTypes = {
  snack: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

UpdateInventory.defaultProps = {
  snack: false,
  open: false,
};

export default UpdateInventory;

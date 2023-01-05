import { yupResolver } from '@hookform/resolvers/yup';
import { Add } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { DialogContent, Slide } from '@mui/material';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
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
import PropTypes from 'prop-types';
import { forwardRef, ReactElement, Ref, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { useImageUploadToAWS } from '@/hooks/miscellaneous/image/useImage';
import { useCreateAttribute } from '@/hooks/product/useProduct';

const DialogWrapper = styled(Dialog)(() => ({}));

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction='down' ref={ref} {...props} />;
});

const CreateAttribute = ({ onClose, snack, open, product }) => {
  const handleClose = () => {
    onClose(snack);
  };

  const handleCloseSuccess = (value: boolean) => {
    onClose(value);
  };

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
        body: { ...data, avatar: imageUrl, product },
      });
      if (res.status === 'success') {
        handleCloseSuccess(true);
      }
    } catch (error: any) {
      console.log(error);
      return;
    }
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

  console.log(errors);
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
      <DialogTitle>Add Attribute</DialogTitle>
      <DialogContent>
        <Box>
          <TextField
            {...register('name')}
            fullWidth
            required
            name='name'
            margin='normal'
            label='Display Name'
          />

          <RadioGroup
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='status'
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
              label='Inactive'
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
            {imageUrl ? (
              <img src={imageUrl} alt='avatar' style={{ width: '100%' }} />
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
            loading={createAttributeHook?.isLoading}
            fullWidth
            sx={{ my: 2.6, p: 1.4 }}
            variant='contained'
            color='primary'
            onClick={handleSubmit(onSubmit)}
          >
            Add Attribute
          </LoadingButton>
        </Box>
      </DialogContent>
    </DialogWrapper>
  );
};

CreateAttribute.propTypes = {
  snack: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.string.isRequired,
};

CreateAttribute.defaultProps = {
  snack: false,
  open: false,
};

export default CreateAttribute;

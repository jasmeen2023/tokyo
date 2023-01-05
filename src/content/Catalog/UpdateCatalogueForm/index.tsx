import { yupResolver } from '@hookform/resolvers/yup';
import { Add } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Alert,
  Card,
  Container,
  Grid,
  Snackbar,
  Typography,
} from '@mui/material';
import { Button, CardContent, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { message, Modal, Upload, UploadProps } from 'antd';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { useUpdateSingleCatalogue } from '@/hooks/catalogue/useCatalogue';
import { useImageUploadToAWS } from '@/hooks/miscellaneous/image/useImage';

import { AgentFieldStatus } from '@/models/agentStatus';

import { Catalogue } from '../Cataloge';
import { useGetSingleCatalogue } from '../../../hooks/catalogue/useCatalogue';

interface Filters {
  status?: AgentFieldStatus;
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      // margin: theme.spacing(1),
    },
  },
  textarea: {
    resize: 'both',
  },
}));

const UpdateCatalogueForm = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
  const [catalogue, setCatalogue] = useState<Catalogue>();

  const [snack, setSnack] = useState(false);
  const [imageUrl, setImageUrl] = useState<string[]>();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const uploadImage = useImageUploadToAWS();
  const updateSingleCatalogueHook = useUpdateSingleCatalogue();
  const getSingleCatalogueHook = useGetSingleCatalogue();

  const addCatalogue = Yup.object().shape({
    name: Yup.string().required('Required'),
    category: Yup.string().required('Required'),
    discountApplicable: Yup.string().required('Required'),
    color: Yup.string().required('Required'),
    price: Yup.number().required('Required'),
    status: Yup.string().required('Required'),
  });
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(addCatalogue),
    mode: 'onChange',
  });

  const handleClose = (value) => {
    if (value) {
      setTimeout(() => {
        router?.back();
      }, 1000);
      setSnack(true);
    }
  };

  const handleSnackClose = () => {
    setSnack(false);
  };

  const onSubmit = async (data) => {
    const res: any = await updateSingleCatalogueHook.mutateAsync({
      pathParams: {
        id: id,
      },
      body: {
        ...data,
        discountApplicable: data?.discountApplicable === 'yes' ? true : false,
        images: imageUrl,
      },
    });
    if (res?.status === 'success') {
      handleClose(true);
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
        setSnack(true);
        if (!imageUrl?.length) {
          setImageUrl([res?.uri]);
        } else {
          setImageUrl((prev) => [...(prev as string[]), res?.uri]);
        }
      }
    }
  };

  const addImage = (data: UploadFile) => {
    setFileList((prev) => [...prev, { ...data }]);
  };

  const getSingleCatalogue = async (id) => {
    const res: any = await getSingleCatalogueHook?.mutateAsync({
      pathParams: { id },
    });
    if (res?.status === 'success') {
      setCatalogue(res?.catalogue);
      setValue('name', res?.catalogue?.name);
      setValue('category', res?.catalogue?.category);
      setValue('color', res?.catalogue?.color);
      setValue('price', res?.catalogue?.price);
      setValue('finalPrice', res?.catalogue?.finalPrice);
      setValue('discountApplicable', res?.catalogue?.discountApplicable);
      setValue('description', res?.catalogue?.description);
      setValue('status', res?.catalogue?.status);
      setImageUrl(res?.catalogue?.images);
      if (res?.catalogue?.images.length) {
        res?.catalogue?.images?.map((image, index) => {
          addImage({ uid: index, name: index, url: image, status: 'done' });
        });
      }
    }
  };

  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1)
    );
  };

  useEffect(() => {
    if (id) {
      getSingleCatalogue(id);
    }
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card
          sx={{
            background: '#FFF',
            borderRadius: 1,
            boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
          }}
        >
          <Container>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={5}>
                  <Typography>Product Images</Typography>
                  <Upload
                    name='avatar'
                    fileList={fileList}
                    listType='picture-card'
                    onPreview={handlePreview}
                    className='avatar-uploader'
                    showUploadList={false}
                    beforeUpload={() => false}
                    maxCount={6}
                    onChange={handleChange}
                  >
                    <LoadingButton
                      loading={uploadImage?.isLoading}
                      type='button'
                      fullWidth
                      sx={{ my: 2.6, p: 1.4, flexDirection: 'column' }}
                      variant='text'
                    >
                      <Add /> Upload
                    </LoadingButton>
                  </Upload>
                </Grid>
                <Grid item xs={7}>
                  <FormLabel>*Enter Product Name</FormLabel>
                  <TextField
                    {...register('name')}
                    fullWidth
                    placeholder='-'
                    error={Boolean(errors?.name)}
                    helperText={
                      errors.name ? `Name is ${errors.name?.message}` : null
                    }
                  />
                </Grid>
                <Grid item xs={3}>
                  <FormLabel>*Category</FormLabel>
                  <TextField
                    {...register('category')}
                    fullWidth
                    placeholder='-'
                    error={Boolean(errors?.category)}
                    name='category'
                    helperText={
                      errors.category
                        ? `Category is ${errors.category?.message}`
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={3}>
                  <FormControl fullWidth>
                    <FormLabel>
                      *Is Discount Applicable for the product?
                    </FormLabel>
                    <Select
                      {...register('discountApplicable')}
                      fullWidth
                      labelId='demo-simple-select-helper-label'
                      id='demo-simple-select-helper'
                      name='discountApplicable'
                      error={Boolean(errors?.discountApplicable)}
                      defaultValue='no'
                    >
                      <MenuItem value='yes'>yes</MenuItem>
                      <MenuItem value='no'>No</MenuItem>
                    </Select>
                    <Typography color='error'>
                      {errors?.discountApplicable?.message as string}
                    </Typography>
                  </FormControl>
                </Grid>
                <Grid item xs={3}>
                  <FormLabel>*Product Color</FormLabel>
                  <TextField
                    {...register('color')}
                    fullWidth
                    placeholder='-'
                    error={Boolean(errors?.color)}
                    helperText={
                      errors.color ? `Color is ${errors.color?.message}` : null
                    }
                  />
                </Grid>
                <Grid item xs={3}>
                  <FormLabel>*Product Price</FormLabel>
                  <TextField
                    {...register('price')}
                    fullWidth
                    type='number'
                    placeholder='-'
                    defaultValue={0}
                    error={Boolean(errors?.price)}
                    helperText={
                      errors.price ? `Price is ${errors.price?.message}` : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormLabel>Product Description</FormLabel>
                  <TextField
                    {...register('description')}
                    id='outlined-textarea'
                    fullWidth
                    placeholder='-'
                    multiline
                    variant='outlined'
                    inputProps={{ className: classes.textarea }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Container>
          <Card
            sx={{
              my: 10,
              mx: 3,
              background: '#F8F9FB',
              borderRadius: 1,
              boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
            }}
          >
            <CardContent>
              <Grid container>
                <Grid item container xs={3} spacing={2}>
                  <Grid item>
                    <Typography component='legend'>
                      Make Product Staus Availability
                    </Typography>
                  </Grid>
                  <Grid item>
                    <FormControl
                      error={Boolean(errors?.status)}
                      // helperText={
                      //   errors.price
                      //     ? `Price is ${errors.price?.message}`
                      //     : null
                      // }
                    >
                      <RadioGroup
                        row
                        aria-labelledby='demo-row-radio-buttons-group-label'
                        {...register('status')}
                      >
                        <FormControlLabel
                          {...register('status')}
                          value='active'
                          control={<Radio size='small' />}
                          label='Make Active'
                        />
                        <FormControlLabel
                          {...register('status')}
                          value='inactive'
                          control={<Radio size='small' />}
                          label='Make Inactive'
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid item container xs={2} spacing={2}>
                  <Grid item>
                    <Typography>Total Price after Attributes</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Dhs.</Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={2} spacing={2}>
                  <Grid item>
                    <Typography component='legend'>
                      Enter Final Price
                    </Typography>
                  </Grid>
                  <Grid item>
                    <TextField
                      {...register('finalPrice')}
                      fullWidth
                      size='small'
                    />
                  </Grid>
                </Grid>
                <Grid item container xs spacing={2} sx={{ alignItems: 'end' }}>
                  <Grid item xs></Grid>
                  <Grid item>
                    <Button
                      onClick={() => {
                        router?.back();
                      }}
                      variant='outlined'
                      sx={{ minWidth: 150 }}
                    >
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item>
                    <LoadingButton
                      loading={updateSingleCatalogueHook?.isLoading}
                      type='submit'
                      disabled={!isDirty}
                      variant='contained'
                      sx={{ minWidth: 150 }}
                      onClick={handleSubmit(onSubmit)}
                    >
                      Update
                    </LoadingButton>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Card>
      </Grid>
      <Grid item xs={12}></Grid>

      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt='example' style={{ width: '100%' }} src={previewImage} />
      </Modal>
      <Snackbar open={snack} autoHideDuration={6000} onClose={handleSnackClose}>
        <Alert
          onClose={handleSnackClose}
          variant='filled'
          severity='success'
          sx={{ width: '100%' }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default UpdateCatalogueForm;

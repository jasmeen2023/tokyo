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
  useTheme,
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
import { message, Upload, UploadProps } from 'antd';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { useCreateCatalogue } from '@/hooks/catalogue/useCatalogue';
import { useImageUploadToAWS } from '@/hooks/miscellaneous/image/useImage';

import { Inventory, openUpdateAtom } from '@/store/inventory';

import { AgentFieldStatus, AgentStatus } from '@/models/agentStatus';

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

const applyFilters = (
  agentStatuss: AgentStatus[],
  filters: Filters
): AgentStatus[] => {
  return agentStatuss.filter((AgentStatus) => {
    let matches = true;

    if (filters.status && AgentStatus.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const AddCatalogueForm = () => {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const [inventory, setInventory] = useState<Inventory[]>();

  const [open, setOpen] = useState(false);
  const [openUpdate, setUpdateOpen] = useAtom(openUpdateAtom);
  const [snack, setSnack] = useState(false);
  const [imageUrl, setImageUrl] = useState<string[]>();

  const uploadImage = useImageUploadToAWS();
  const createCatalogueHook = useCreateCatalogue();

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
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addCatalogue),
    mode: 'onChange',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    if (value) {
      setTimeout(() => {
        router?.back();
      }, 1000);
      setSnack(true);
    } else {
      setOpen(false);
    }
  };
  const handleUpdateClose = (value) => {
    if (value) {
      setUpdateOpen(false);
      setSnack(true);
    } else {
      setUpdateOpen(false);
    }
  };

  const handleSnackClose = () => {
    setSnack(false);
  };

  const onSubmit = async (data) => {
    const res: any = await createCatalogueHook.mutateAsync({
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
        if (!imageUrl?.length) {
          setImageUrl([res?.uri]);
        } else {
          setImageUrl((prev) => [...(prev as string[]), res?.uri]);
        }
      }
    }
  };

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
                    listType='picture-card'
                    className='avatar-uploader'
                    showUploadList={true}
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
                      name='category'
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
                        name='status'
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
                      // onClick={() => setEdit('')}
                      variant='outlined'
                      sx={{ minWidth: 150 }}
                    >
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      type='submit'
                      variant='contained'
                      sx={{ minWidth: 150 }}
                      onClick={handleSubmit(onSubmit)}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Card>
      </Grid>
      <Grid item xs={12}></Grid>

      {/* <Grid container spacing={2} marginY={2}>
        {inventory?.map((item) => (
          <Grid key={item?._id} item lg={3}>
            <InventoryCard item={item}></InventoryCard>
          </Grid>
        ))}
      </Grid>
      <CreateInventory snack={snack} open={open} onClose={handleClose} />
      <UpdateInventory
        snack={snack}
        open={openUpdate}
        onClose={handleUpdateClose}
      /> */}
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

export default AddCatalogueForm;

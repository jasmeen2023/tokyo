import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Card,
  CardHeader,
  Container,
  Divider,
  Grid,
  InputAdornment,
  Typography,
} from '@mui/material';
import { Button, CardContent, styled } from '@mui/material';
import FormControl from '@mui/material/FormControl';

import MenuItem from '@mui/material/MenuItem';

import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { useCreateCatalogue } from '@/hooks/catalogue/useCatalogue';
import { AgentFieldStatus, AgentStatus } from '@/models/agentStatus';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {
  CurrencyPoundOutlined,
  CurrencyPoundRounded,
} from '@mui/icons-material';

interface Filters {
  status?: AgentFieldStatus;
}

const InputHeading = styled(Typography)(({ theme }) => ({
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '14px',
  lineHeight: '19px',
  textTransform: 'capitalize',
  color: '#000000',
  padding: '5px 0px',
}));

const useStyles = makeStyles((theme) => ({
  cell_short: {
    height: '70%',
    width: '70%',
  },
  cell_short2: {
    height: '70%',
    width: '60%',
  },
  cell_short_box: {
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '140.1%',
    color: '#263238',
    padding: '2px 3px',
  },
}));

const InputBoxes = styled(TextField)(({ theme }) => ({
  background: '#FFFFFF',
}));

const InputSelect = styled(Select)(({ theme }) => ({
  background: '#FFFFFF',
}));

const MortgageDetail = () => {
  const classes = useStyles();
  const router = useRouter();

  const [snack, setSnack] = useState(false);
  const [imageUrl, setImageUrl] = useState<string[]>();

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

  const [currency, setCurrency] = useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const onSubmit = async (data) => {
    const res: any = await createCatalogueHook.mutateAsync({
      body: {
        ...data,
        discountApplicable:
          data?.discountApplicable === 'reremortgage' ? true : false,
        images: imageUrl,
      },
    });
    if (res?.status === 'success') {
      // handleClose(true);
    }
  };

  return (
    <Card
      sx={{
        background: '#FFF',
        borderRadius: 0,
        boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
      }}
    >
      <Container>
        <CardHeader
          title=' Mortgage Details'
          sx={{
            fontWeight: 600,
            fontSize: '16px',
            letterSpacing: '0.01em',
            color: '#292D32',
          }}
        />

        <Card
          sx={{
            background: '#EEF7FE',
            borderRadius: 0,
            boxshadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
            padding: '5px 10px',
          }}
        >
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              <Typography
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '19px',
                  textTransform: 'capitalize',
                  color: '#4B473E',
                }}
              >
                Buyer Type
              </Typography>

              <InputSelect
                className={classes.cell_short}
                {...register('discountApplicable')}
                labelId='demo-simple-InputSelect-helper-label'
                id='demo-simple-InputSelect-helper'
                name='category'
                error={Boolean(errors?.discountApplicable)}
                defaultValue='remortgage'
              >
                <MenuItem value='reremortgage'>Remortgage</MenuItem>
                <MenuItem value='remortgage'>Remortgage</MenuItem>
              </InputSelect>
              <Typography color='error'>
                {errors?.discountApplicable?.message as string}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              <Typography
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '19px',
                  textTransform: 'capitalize',
                  color: '#4B473E',
                }}
              >
                Mortgage Product Type
              </Typography>

              <InputSelect
                className={classes.cell_short2}
                {...register('discountApplicable')}
                labelId='demo-simple-InputSelect-helper-label'
                id='demo-simple-InputSelect-helper'
                name='category'
                error={Boolean(errors?.discountApplicable)}
                defaultValue='remortgage'
              >
                <MenuItem value='reremortgage'>Remortgage</MenuItem>
                <MenuItem value='remortgage'>Remortgage</MenuItem>
              </InputSelect>
              <Typography color='error'>
                {errors?.discountApplicable?.message as string}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '19px',
                  textTransform: 'capitalize',
                  color: '#4B473E',
                  paddingX: 2,
                }}
              >
                LTV
              </Typography>

              <TextField
                size='small'
                placeholder='12%'
                sx={{ background: '#FFF', width: '80px', textAlign: 'center' }}
              >
                12%
              </TextField>
            </Grid>
          </Grid>
        </Card>
        <CardHeader
          title=' Mortgage Security Address'
          sx={{
            fontWeight: 600,
            fontSize: '16px',
            letterSpacing: '0.01em',
            color: '#292D32',
          }}
        />
        <Card
          sx={{
            background: '#EEF7FE',
            borderRadius: 0,
            boxshadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
            padding: '15px',
            marginBottom: 2,
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={7}>
              <TextField
                sx={{
                  width: '393px',
                  height: '50px',
                  background: '#FFFFFF',
                }}
                {...register('category')}
                placeholder='Enter postcode'
                error={Boolean(errors?.category)}
                helperText={
                  errors.category
                    ? `Category is ${errors.category?.message}`
                    : null
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position='start'
                      sx={{
                        padding: '26px 8px',
                        background: '#EBEBEB',
                        color: '#4B65B2',
                        marginLeft: '-15px',
                      }}
                    >
                      <SearchTwoToneIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </Grid>

            <Grid item xs={5} spacing={2}>
              <Button
                type='submit'
                variant='contained'
                sx={{
                  background:
                    'linear-gradient(91.88deg, #4B65B2 2.83%, #13BBE6 100%)',
                  color: '#FFF',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '15.5px',
                  lineHeight: '21px',
                  textAlign: 'center',
                  borderRadius: 40,
                  width: '157px',
                  height: '50px',
                  marginX: 1,
                }}
                onClick={handleSubmit(onSubmit)}
              >
                Search Podcast
              </Button>

              <Button
                type='submit'
                variant='contained'
                sx={{
                  background:
                    'linear-gradient(91.88deg, #4B65B2 2.83%, #13BBE6 100%)',
                  color: '#FFF',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '15.5px',
                  lineHeight: '21px',
                  textAlign: 'center',
                  borderRadius: 40,
                  width: '157px',
                  height: '50px',
                }}
                onClick={handleSubmit(onSubmit)}
              >
                Enter Manually
              </Button>
            </Grid>
          </Grid>
        </Card>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <InputHeading>Street Address</InputHeading>
            <InputBoxes
              {...register('name')}
              fullWidth
              placeholder='-'
              error={Boolean(errors?.name)}
              helperText={
                errors.name ? `Name is ${errors.name?.message}` : null
              }
              sx={{ background: '#F6F7F8' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InputHeading>Town</InputHeading>
            <InputBoxes
              {...register('category')}
              fullWidth
              placeholder='-'
              error={Boolean(errors?.category)}
              helperText={
                errors.category
                  ? `Category is ${errors.category?.message}`
                  : null
              }
              sx={{ background: '#F6F7F8' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InputHeading>Country</InputHeading>
            <InputBoxes
              {...register('category')}
              fullWidth
              placeholder='-'
              error={Boolean(errors?.category)}
              helperText={
                errors.category
                  ? `Category is ${errors.category?.message}`
                  : null
              }
              sx={{ background: '#F6F7F8' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InputHeading>Post Code</InputHeading>
            <InputBoxes
              {...register('category')}
              fullWidth
              placeholder='-'
              error={Boolean(errors?.category)}
              helperText={
                errors.category
                  ? `Category is ${errors.category?.message}`
                  : null
              }
              sx={{ background: '#F6F7F8' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InputHeading>Property Purchase Price</InputHeading>
            <InputBoxes
              {...register('category')}
              fullWidth
              placeholder='-'
              error={Boolean(errors?.category)}
              helperText={
                errors.category
                  ? `Category is ${errors.category?.message}`
                  : null
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position='start'
                    sx={{
                      padding: '26px 8px',
                      background: '#EEF7FE',
                      marginLeft: '-15px',
                    }}
                  >
                    <CurrencyPoundRounded
                      sx={{
                        color: '#4B65B2',
                        borderColor: ' #4B65B2',
                        borderRadius: '50%',
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InputHeading>Lender</InputHeading>
            <InputBoxes
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
          <Grid item xs={12} md={4}>
            <InputHeading>Lender Reference</InputHeading>
            <InputBoxes
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
          <Grid item xs={12} md={4}>
            <Typography variant='h5'>Term Years</Typography>
            <InputBoxes
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
          <Grid item xs={12} md={4}>
            <InputHeading>Rate</InputHeading>
            <InputBoxes
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

          <Grid item xs={12} md={4}>
            <InputHeading>Mortgage Amount</InputHeading>
            <InputBoxes
              {...register('category')}
              fullWidth
              placeholder='-'
              error={Boolean(errors?.category)}
              helperText={
                errors.category
                  ? `Category is ${errors.category?.message}`
                  : null
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position='start'
                    sx={{
                      padding: '26px 8px',
                      background: '#EEF7FE',
                      marginLeft: '-15px',
                    }}
                  >
                    <CurrencyPoundRounded
                      sx={{
                        color: '#4B65B2',
                        borderColor: ' #4B65B2',
                        borderRadius: '50%',
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputHeading>Repayment Type</InputHeading>
              <InputSelect
                {...register('discountApplicable')}
                fullWidth
                labelId='demo-simple-InputSelect-helper-label'
                id='demo-simple-InputSelect-helper'
                name='category'
                error={Boolean(errors?.discountApplicable)}
                defaultValue='remortgage'
              >
                <MenuItem value='reremortgage'>remortgage</MenuItem>
                <MenuItem value='remortgage'>remortgage</MenuItem>
              </InputSelect>
              <Typography color='error'>
                {errors?.discountApplicable?.message as string}
              </Typography>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <InputHeading>Rate Expiry Date</InputHeading>
            <InputBoxes
              {...register('category')}
              fullWidth
              placeholder='-'
              error={Boolean(errors?.category)}
              helperText={
                errors.category
                  ? `Category is ${errors.category?.message}`
                  : null
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position='start'
                    sx={{
                      padding: '26px 8px',
                      background: '#EEF7FE',
                      marginLeft: '-15px',
                    }}
                  >
                    <CalendarMonthIcon
                      sx={{
                        color: '#4B65B2',
                        borderColor: ' #4B65B2',
                        borderRadius: '50%',
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <InputHeading>Offer Expiry Date</InputHeading>
            <InputBoxes
              {...register('color')}
              fullWidth
              placeholder='-'
              error={Boolean(errors?.color)}
              helperText={
                errors.color ? `Color is ${errors.color?.message}` : null
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position='start'
                    sx={{
                      padding: '26px 8px',
                      background: '#EEF7FE',
                      marginLeft: '-15px',
                    }}
                  >
                    <CalendarMonthIcon
                      sx={{
                        color: '#4B65B2',
                        borderColor: ' #4B65B2',
                        borderRadius: '50%',
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}></Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: '16px',

                letterSpacing: '0.01em',
                color: '#292D32',
                marginTop: 1,
              }}
            >
              Solicitor Details
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <InputHeading>Name</InputHeading>
            <InputBoxes
              {...register('color')}
              fullWidth
              placeholder='-'
              error={Boolean(errors?.color)}
              helperText={
                errors.color ? `Color is ${errors.color?.message}` : null
              }
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <InputHeading>Address</InputHeading>
            <InputBoxes
              {...register('color')}
              fullWidth
              placeholder='-'
              error={Boolean(errors?.color)}
              helperText={
                errors.color ? `Color is ${errors.color?.message}` : null
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InputHeading>Postcode</InputHeading>
            <InputBoxes
              {...register('color')}
              fullWidth
              placeholder='-'
              error={Boolean(errors?.color)}
              helperText={
                errors.color ? `Color is ${errors.color?.message}` : null
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InputHeading>Phone No.</InputHeading>
            <InputBoxes
              {...register('color')}
              fullWidth
              placeholder='-'
              error={Boolean(errors?.color)}
              helperText={
                errors.color ? `Color is ${errors.color?.message}` : null
              }
            />
          </Grid>

          <Grid item xs={12} md={4}></Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: '16px',

                letterSpacing: '0.01em',
                color: '#292D32',
                marginTop: 1,
              }}
            >
              Estate Agent Details
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <InputHeading>Name</InputHeading>
            <InputBoxes
              {...register('color')}
              fullWidth
              placeholder='-'
              error={Boolean(errors?.color)}
              helperText={
                errors.color ? `Color is ${errors.color?.message}` : null
              }
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputHeading>Address</InputHeading>
            <InputBoxes
              {...register('color')}
              fullWidth
              placeholder='-'
              error={Boolean(errors?.color)}
              helperText={
                errors.color ? `Color is ${errors.color?.message}` : null
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InputHeading>Postcode</InputHeading>
            <InputBoxes
              {...register('color')}
              fullWidth
              placeholder='-'
              error={Boolean(errors?.color)}
              helperText={
                errors.color ? `Color is ${errors.color?.message}` : null
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InputHeading>Phone No.</InputHeading>
            <InputBoxes
              {...register('color')}
              fullWidth
              placeholder='-'
              error={Boolean(errors?.color)}
              helperText={
                errors.color ? `Color is ${errors.color?.message}` : null
              }
            />
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
};

export default MortgageDetail;

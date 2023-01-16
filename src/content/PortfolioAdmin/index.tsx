import { yupResolver } from '@hookform/resolvers/yup';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  InputAdornment,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { styled, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { useCreateCatalogue } from '@/hooks/catalogue/useCatalogue';
import { AgentFieldStatus, AgentStatus } from '@/models/agentStatus';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import {
  CurrencyPound,
  HouseOutlined,
  LocationCity,
  SchoolOutlined,
} from '@mui/icons-material';
import { useState } from 'react';
import { Box } from '@mui/system';
import Image from 'next/image';
import List from '@mui/material/List';

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

const propertyCard = [
  {
    id: 1,
    iconimg: <HouseOutlined />,
    addressType: 'Current Residence',
    iconShort: <HouseOutlined />,
    name: 'Address',
    address: '27 Old Gloucester Street',
    addressSlot: 'WC1N 3AX',
    iconBalance: <HouseOutlined />,
    price: '95,500',
    iconLoation: <LocationCity />,
    month: '24 months',
    iconProperty: <HouseOutlined />,
    value: 'Property Value (Approx.)',
    valueNo: '12,45,000',
    iconSchool: <SchoolOutlined />,
    mortgage: 'Mortgage Lender',
    lender: 'Brit Insurance Bank',
  },
];

const PortfolioAdmin = () => {
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
    <>
      <Card
        sx={{
          background: '#FFF',
          borderRadius: 0,
          boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
          padding: 3,
          my: 1,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Grid item display='flex' alignItems='center' xs={7}>
            <IconButton
              sx={{
                color: '#4B65B2',
                background: '#EEF7FE',
                borderRadius: '10px',
              }}
            >
              <HouseOutlined />
            </IconButton>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '140.1%',
                color: '#263238',
                paddingX: 1,
              }}
            >
              About Property
            </Typography>
          </Grid>

          <Grid item xs={5}>
            <Box
              sx={{
                background: '#EEF7FE',
                borderRadius: 1,
                padding: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Grid
                container
                item
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
                    color: '#4B473E',
                    paddingX: 1,
                  }}
                >
                  Type of address
                </Typography>
                <Typography
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '19px',
                    color: '#4B473E',
                  }}
                >
                  Buy To Let
                </Typography>
              </Grid>
              <Grid
                container
                item
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image src='/images/homeaddress.png' width={20} height={20} />
                <Typography
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '19px',
                    color: '#4B473E',
                    paddingX: 1,
                  }}
                >
                  Address
                </Typography>
              </Grid>

              <Grid container>
                <Grid item>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '140.1%',
                      color: '#4A4949',
                    }}
                  >
                    27 Old Gloucester Street
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '21px',
                      color: '#4A4949',
                    }}
                  >
                    WC1N 3AX
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Divider
          sx={{ my: 2, border: '1px dashed rgba(151, 151, 151, 0.5)' }}
        />

        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <InputHeading>Mortgage Balance</InputHeading>
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
          <Grid item xs={12} md={3}>
            <InputHeading>Remaining term of mortgage</InputHeading>
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
          <Grid item xs={12} md={3}>
            <InputHeading>Approximate Property Value</InputHeading>
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
          <Grid item xs={12} md={3}>
            <InputHeading>Mortgage Lender</InputHeading>
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

          <Grid item xs={12} md={3}>
            <InputHeading>Mortgage account number</InputHeading>
            <InputBoxes
              {...register('category')}
              fullWidth
              placeholder='128761451'
              error={Boolean(errors?.category)}
              helperText={
                errors.category
                  ? `Category is ${errors.category?.message}`
                  : null
              }
              sx={{ background: '#F6F7F8' }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <InputHeading>Select your repayment type</InputHeading>
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
          <Grid item xs={12} md={3}>
            <Typography variant='h5'>Current Monthly rental income</Typography>
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
                    <CurrencyPound
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
          <Grid item xs={12} md={3}>
            <Typography variant='h5'>
              Do you want to release equity from this property?
            </Typography>
            <InputBoxes
              {...register('category')}
              fullWidth
              placeholder='Yes'
              error={Boolean(errors?.category)}
              helperText={
                errors.category
                  ? `Category is ${errors.category?.message}`
                  : null
              }
              sx={{ background: '#F6F7F8' }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant='h5'>Amount required to release</Typography>
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
                    <CurrencyPound
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
        </Grid>
      </Card>

      <Grid item xs={3}>
        <Card
          sx={{
            backgroundColor: '#FFF',
            backgroundImage: 'url("/images/building-3.png")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right bottom',
            borderRadius: 1,
            boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
          }}
        >
          <CardHeader
            title='Current Residence'
            avatar={
              <Avatar
                sx={{ bgcolor: '#EEF7FE', borderRadius: 1 }}
                aria-label='recipe'
              >
                <Image src='/images/homeaddress.png' width={21} height={21} />
              </Avatar>
            }
          />
          <Divider sx={{ border: '0.5px dashed rgba(38, 50, 56, 0.1)' }} />
          <CardContent>
            <Card
              sx={{
                background: '#EEF7FE',
                borderRadius: 1,
                borderColor: '#EEF7FE',
                boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
              }}
            >
              <CardHeader
                avatar={
                  <Image src='/images/homeaddress.png' width={21} height={21} />
                }
                title='Address'
                sx={{
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '140.1%',
                  textTransform: 'capitalize',
                  color: '#000000',
                }}
              />
              <CardContent
                sx={{
                  paddingY: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '140.1%',
                    color: '#979797',
                  }}
                >
                  27 Old Gloucester Street
                </Typography>
                <Typography
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '21px',
                    color: '#979797',
                  }}
                >
                  WC1N 3AX
                </Typography>
              </CardContent>
            </Card>
          </CardContent>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Image src='/images/balance.svg' width={32} height={32} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '13px',
                      color: '#979797',
                      marginY: 1,
                    }}
                  >
                    Mortgage Balance
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '19px',
                      color: '#263238',
                    }}
                  >
                    95,500
                  </Typography>
                }
              ></ListItemText>
            </ListItem>
          </List>
          <List sx={{ display: 'flex' }}>
            <ListItem>
              <ListItemAvatar>
                <Image src='/images/balance.svg' width={32} height={32} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '13px',
                      color: '#979797',
                      marginY: 1,
                    }}
                  >
                    Mortgage Balance
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '19px',
                      color: '#263238',
                    }}
                  >
                    95,500
                  </Typography>
                }
              ></ListItemText>
            </ListItem>
          </List>
        </Card>
      </Grid>
    </>
  );
};

export default PortfolioAdmin;

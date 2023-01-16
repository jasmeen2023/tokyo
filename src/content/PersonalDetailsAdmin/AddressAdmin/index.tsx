import { yupResolver } from '@hookform/resolvers/yup';
import {
  Card,
  CardHeader,
  Container,
  Grid,
  InputAdornment,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router';
import { SyntheticEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { useCreateCatalogue } from '@/hooks/catalogue/useCatalogue';
import { AgentFieldStatus, AgentStatus } from '@/models/agentStatus';
import TextField from '@mui/material/TextField';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import IconButton from '@mui/material/IconButton';
import {
  AccountCircleOutlined,
  Home,
  HouseOutlined,
  MobileScreenShareOutlined,
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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const AddressAdmin = () => {
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
  const [value, setValue] = useState(0);
  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  // };

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
        paddingBottom: 2,
        my: 1,
      }}
    >
      <Container>
        <CardHeader
          title='Address'
          sx={{
            fontWeight: 800,
            fontSize: '18px',
            lineHeight: '140.1%',
            color: '#263238',
            paddingX: 0,
          }}
          avatar={
            <IconButton
              sx={{
                color: '#4B65B2',
                background: '#EEF7FE',
                borderRadius: '10px',
              }}
            >
              <HouseOutlined />
            </IconButton>
          }
        />

        <Tabs
          sx={{ marginBottom: 1, borderBottom: '0.75px dashed #979797' }}
          variant='scrollable'
          scrollButtons='auto'
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='Applicant 1 (Carlo)' {...a11yProps(0)} />
          <Tab label='Applicant 2 (Mattis)' {...a11yProps(1)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <Grid
            sx={{
              my: 1,
              background: '#EEF7FE',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '19px',
              color: '#4B473E',
              padding: 2,
              borderRadius: 1,
            }}
          >
            Type of address Previous
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <InputHeading>Flat or apartment number</InputHeading>
              <InputBoxes
                {...register('name')}
                fullWidth
                placeholder='12J - 4th Level'
                error={Boolean(errors?.name)}
                helperText={
                  errors.name ? `Name is ${errors.name?.message}` : null
                }
                sx={{ background: '#F6F7F8' }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <InputHeading>Housing or building name</InputHeading>
              <InputBoxes
                {...register('category')}
                fullWidth
                placeholder='Winchester Villas'
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
              <InputHeading>Street</InputHeading>
              <InputBoxes
                {...register('category')}
                fullWidth
                placeholder='27 Old Gloucester Street'
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
              <InputHeading>City</InputHeading>
              <InputBoxes
                {...register('category')}
                fullWidth
                placeholder='London'
                error={Boolean(errors?.category)}
                helperText={
                  errors.category
                    ? `Category is ${errors.category?.message}`
                    : null
                }
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <InputHeading>Postcode</InputHeading>
              <InputBoxes
                {...register('category')}
                fullWidth
                placeholder='WC1N 3AX'
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
              <InputHeading>
                When did you start living at this address?
              </InputHeading>
              <InputBoxes
                {...register('category')}
                fullWidth
                placeholder='01/01/1997'
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
              <InputHeading>What type of occupant are you?</InputHeading>
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
          </Grid>

          <Grid
            sx={{
              marginY: 2,
              background: '#EEF7FE',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '19px',
              color: '#4B473E',
              padding: 2,
              borderRadius: 1,
            }}
          >
            Type of address Current
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <InputHeading>Flat or apartment number</InputHeading>
              <InputBoxes
                {...register('name')}
                fullWidth
                placeholder='12J - 4th Level'
                error={Boolean(errors?.name)}
                helperText={
                  errors.name ? `Name is ${errors.name?.message}` : null
                }
                sx={{ background: '#F6F7F8' }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <InputHeading>Housing or building name</InputHeading>
              <InputBoxes
                {...register('category')}
                fullWidth
                placeholder='Winchester Villas'
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
              <InputHeading>Street</InputHeading>
              <InputBoxes
                {...register('category')}
                fullWidth
                placeholder='27 Old Gloucester Street'
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
              <InputHeading>City</InputHeading>
              <InputBoxes
                {...register('category')}
                fullWidth
                placeholder='London'
                error={Boolean(errors?.category)}
                helperText={
                  errors.category
                    ? `Category is ${errors.category?.message}`
                    : null
                }
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <InputHeading>Postcode</InputHeading>
              <InputBoxes
                {...register('category')}
                fullWidth
                placeholder='WC1N 3AX'
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
              <InputHeading>
                When did you start living at this address?
              </InputHeading>
              <InputBoxes
                {...register('category')}
                fullWidth
                placeholder='01/01/1997'
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
              <InputHeading>What type of occupant are you?</InputHeading>
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
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Grid
            sx={{
              my: 1,
              background: '#EEF7FE',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '19px',
              color: '#4B473E',
              padding: 2,
              borderRadius: 1,
            }}
          >
            Type of address Previous
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <InputHeading>Flat or apartment number</InputHeading>
              <InputBoxes
                {...register('name')}
                fullWidth
                placeholder='12J - 4th Level'
                error={Boolean(errors?.name)}
                helperText={
                  errors.name ? `Name is ${errors.name?.message}` : null
                }
                sx={{ background: '#F6F7F8' }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <InputHeading>Housing or building name</InputHeading>
              <InputBoxes
                {...register('category')}
                fullWidth
                placeholder='Winchester Villas'
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
              <InputHeading>Street</InputHeading>
              <InputBoxes
                {...register('category')}
                fullWidth
                placeholder='27 Old Gloucester Street'
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
              <InputHeading>City</InputHeading>
              <InputBoxes
                {...register('category')}
                fullWidth
                placeholder='London'
                error={Boolean(errors?.category)}
                helperText={
                  errors.category
                    ? `Category is ${errors.category?.message}`
                    : null
                }
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <InputHeading>Postcode</InputHeading>
              <InputBoxes
                {...register('category')}
                fullWidth
                placeholder='WC1N 3AX'
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
              <InputHeading>
                When did you start living at this address?
              </InputHeading>
              <InputBoxes
                {...register('category')}
                fullWidth
                placeholder='01/01/1997'
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
              <InputHeading>What type of occupant are you?</InputHeading>
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
          </Grid>

          <Grid
            sx={{
              marginY: 2,
              background: '#EEF7FE',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '19px',
              color: '#4B473E',
              padding: 2,
              borderRadius: 1,
            }}
          >
            Type of address Current
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <InputHeading>Flat or apartment number</InputHeading>
              <InputBoxes
                {...register('name')}
                fullWidth
                placeholder='12J - 4th Level'
                error={Boolean(errors?.name)}
                helperText={
                  errors.name ? `Name is ${errors.name?.message}` : null
                }
                sx={{ background: '#F6F7F8' }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <InputHeading>Housing or building name</InputHeading>
              <InputBoxes
                {...register('category')}
                fullWidth
                placeholder='Winchester Villas'
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
              <InputHeading>Street</InputHeading>
              <InputBoxes
                {...register('category')}
                fullWidth
                placeholder='27 Old Gloucester Street'
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
              <InputHeading>City</InputHeading>
              <InputBoxes
                {...register('category')}
                fullWidth
                placeholder='London'
                error={Boolean(errors?.category)}
                helperText={
                  errors.category
                    ? `Category is ${errors.category?.message}`
                    : null
                }
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <InputHeading>Postcode</InputHeading>
              <InputBoxes
                {...register('category')}
                fullWidth
                placeholder='WC1N 3AX'
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
              <InputHeading>
                When did you start living at this address?
              </InputHeading>
              <InputBoxes
                {...register('category')}
                fullWidth
                placeholder='01/01/1997'
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
              <InputHeading>What type of occupant are you?</InputHeading>
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
          </Grid>
        </TabPanel>
      </Container>
    </Card>
  );
};

export default AddressAdmin;

import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  Link,
} from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as yup from 'yup';

import LogoSignGreenText from '@/components/LogoSign/LogoSignGreenText';

import { useCreateUser } from '../../hooks/user/useUser';

function Forms() {
  const signupHook = useCreateUser();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const createUser = async (authData) => {
    const res = await signupHook.mutateAsync(authData);
    return res;
  };

  const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),

    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const newUser = await createUser(values);
    },
  });

  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <Box
        height='100%'
        flexDirection='column'
        style={{
          backgroundImage: `url('/static/images/background/pexels-dada-design-12281845 1.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          spacing={0.5}
        >
          <Grid xs={12}>
            <Card sx={{ minWidth: 550, p: 2, mt: 5 }}>
              <CardHeader
                title={
                  <>
                    <Box sx={{ mb: 2 }}>
                      <Box>
                        <LogoSignGreenText />
                      </Box>
                    </Box>
                    <Typography variant='h3' sx={{ my: 0.5 }}>
                      Create account
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: 400,
                        fontSize: 16,
                        // color: alpha(themeColors.black, 0.55),
                      }}
                      variant='subtitle2'
                    >
                      Fill in the fields below to sign up for an account.
                    </Typography>
                  </>
                }
              />
              {/* <Divider /> */}
              <CardContent>
                <Box
                  component='form'
                  onSubmit={formik.handleSubmit}
                  noValidate
                  autoComplete='off'
                >
                  <div>
                    <TextField
                      fullWidth
                      required
                      name='name'
                      margin='normal'
                      label='Name'
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                  </div>
                  <div>
                    <TextField
                      fullWidth
                      required
                      name='email'
                      margin='normal'
                      label='Email address'
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </div>
                  <div>
                    <TextField
                      fullWidth
                      required
                      name='password'
                      type={showPassword ? 'text' : 'password'}
                      margin='normal'
                      label='Password'
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                      InputProps={{
                        // <-- This is where the toggle button is added.
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              aria-label='toggle password visibility'
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={
                      <Typography>
                        I accept the <Link>terms and conditions.</Link>
                      </Typography>
                    }
                  />
                  <Button
                    fullWidth
                    sx={{ my: 2.6, p: 1.4 }}
                    type='submit'
                    variant='contained'
                    color='primary'
                  >
                    Create your account
                  </Button>
                </Box>

                <Typography
                  sx={{ my: 1 }}
                  style={{
                    fontWeight: 700,
                    fontSize: 15,
                  }}
                >
                  Already have an account?
                  <NextLink href='/auth/signin' passHref>
                    <Link> Sign in here</Link>
                  </NextLink>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

// Forms.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;

export default Forms;

import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  InputAdornment,
} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

import { useLogin } from '@/hooks/menu/useMenu';

import LogoSignGreenText from '@/components/LogoSign/LogoSignGreenText';

import { cookies } from '@/utils/apiUtils';

function Forms() {
  const loginHook = useLogin();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const authenticateUser = async (authData) => {
    const res = await loginHook.mutateAsync(authData);
    return res;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);
    const authData = Object.fromEntries(formData.entries());

    try {
      const res: any = await authenticateUser({
        ...authData,
        type: 'staff',
      });
      if (
        res.status === 'success' &&
        ['admin', 'superadmin', 'agent'].includes(res.user.role)
      ) {
        router.push('/');

        cookies.set(res.accessToken.name, res.accessToken.value, {
          maxAge: res.accessToken.expiresIn,
          path: '/',
        });
        cookies.set(res.refreshToken.name, res.refreshToken.value, {
          maxAge: res.refreshToken.expiresIn,
          path: '/',
        });
      }
    } catch (error: any) {
      return;
    }
  };

  return (
    <>
      <Head>
        <title>Sign in</title>
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
                  <Box>
                    <Box
                      sx={{
                        mb: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}
                    >
                      <LogoSignGreenText />
                    </Box>
                    <Typography variant='h3' sx={{ my: 0.5 }}>
                      Sign in
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: 400,
                        fontSize: 16,
                        // color: alpha(themeColors.black, 0.55),
                      }}
                      variant='subtitle2'
                    >
                      Fill in the fields below to sign into your account.
                    </Typography>
                  </Box>
                }
              />
              <CardContent>
                {loginHook?.isError ? (
                  <Typography color='error'>
                    {(loginHook?.error as any)?.response?.data?.error?.message}
                  </Typography>
                ) : (
                  ''
                )}
                <Box
                  component='form'
                  onSubmit={handleSubmit}
                  noValidate
                  autoComplete='off'
                >
                  <div>
                    <TextField
                      fullWidth
                      required
                      name='email'
                      margin='normal'
                      label='Email address'
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
                  {/* 
                  <Typography
                    style={{
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    <Link>Lost password?</Link>
                  </Typography> */}
                  <LoadingButton
                    type='submit'
                    loading={loginHook?.isLoading}
                    fullWidth
                    sx={{ my: 2.6, p: 1.4 }}
                    variant='contained'
                    color='primary'
                  >
                    Sign in
                  </LoadingButton>
                </Box>
                {/* <Typography
                  sx={{ my: 1 }}
                  style={{
                    fontWeight: 700,
                    fontSize: 15,
                  }}
                >
                  Don’t have an account, yet?
                  <NextLink href='/auth/signup' passHref>
                    <Link> Sign up here </Link>
                  </NextLink>
                </Typography> */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Forms;

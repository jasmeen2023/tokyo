import { InputLabel } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const theme = createTheme();

function Forms() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component='main'
        sx={{
          height: '100vh',
          // borderImage: "url('/images/border-right.png')",
        }}
      >
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{
            background:
              "url('/images/border-right.png') , url('/images/border-right-bottom.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left top, left bottom',
          }}
        >
          <Box
            sx={{
              my: 22,
              mx: 15,
            }}
          >
            <Grid
              container
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginY: 10,
              }}
            >
              <Avatar sx={{ m: 1 }} src='/images/logosigin.png'></Avatar>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '27px',
                  alignItems: 'center',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  color: '#263238',
                }}
              >
                Freedom Circle
              </Typography>
            </Grid>

            <Typography component='h1' variant='h5' textAlign='center'>
              Sign In
            </Typography>
            <Box component='form' noValidate onSubmit={handleSubmit}>
              <InputLabel
                sx={{
                  mt: 1,
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#979797',
                }}
              >
                Email
              </InputLabel>
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                name='email'
                autoComplete='email'
                autoFocus
              />
              <InputLabel
                sx={{
                  mt: 1,
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#979797',
                }}
              >
                Password
              </InputLabel>
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                type='password'
                id='password'
                autoComplete='current-password'
              />

              <Grid
                container
                alignItems='center'
                justifyContent='space-between'
              >
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value='remember'
                        sx={{
                          color: 'rgba(0, 0, 0, 0.2)',
                        }}
                      />
                    }
                    label='Remember me?'
                    sx={{
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#979797',
                    }}
                  />
                </Grid>
                <Grid item>
                  <Link
                    href='#'
                    variant='body2'
                    sx={{
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#4B65B2',
                    }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Grid container item justifyContent='center'>
                <Button
                  type='submit'
                  variant='contained'
                  sx={{
                    mt: 3,
                    mb: 2,
                    width: '188px',
                    height: '44px',
                    textTransform: 'none',
                    background:
                      'linear-gradient(91.88deg, #4B65B2 2.83%, #13BBE6 100%)',
                  }}
                >
                  Sign in
                </Button>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url('/images/signin-img.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}

export default Forms;

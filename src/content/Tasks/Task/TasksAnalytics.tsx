import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { Box, Container, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import CardMedia from '@mui/material/CardMedia';

const DotPrimaryLight = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.primary.lighter};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

const DotPrimary = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.primary.main};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(6)};
    height: ${theme.spacing(6)};
`
);

function TasksAnalytics() {
  const theme = useTheme();

  return (
    <Card
      sx={{
        boxShadow: 'none',
      }}
    >
      <CardHeader
        title='Moodboard'
        action={
          <Grid container spacing={3}>
            <Grid item xs>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                QUANTITY
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                02
              </Typography>
            </Grid>
          </Grid>
        }
      />
      <CardContent sx={{ background: '#F3F6F8 ' }}>
        <Container>
          <Grid container spacing={1}>
            <Grid item container xs={6} spacing={1}>
              <Grid item xs={12}>
                <Card
                  sx={{
                    boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
                  }}
                >
                  <CardContent sx={{ display: 'flex' }}>
                    <Badge
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      overlap='rectangular'
                    >
                      <AvatarWrapper
                        alt='Ann Saris'
                        src='/static/images/avatars/3.jpg'
                      />
                    </Badge>
                    <Box sx={{ ml: 2 }}>
                      <Typography
                        gutterBottom
                        variant='subtitle2'
                        component='div'
                      >
                        MODEL
                      </Typography>
                      <Typography variant='h5' color='text.secondary'>
                        2 Seater
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card
                  sx={{
                    boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      height='250'
                      image='/images/fabric.png'
                      alt='green iguana'
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant='subtitle2'
                        component='div'
                      >
                        FABRIC
                      </Typography>
                      <Typography variant='h5' color='text.secondary'>
                        Maroon Plain Viscose Gaji Silk
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card
                  sx={{
                    boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
                  }}
                >
                  <CardContent sx={{ display: 'flex' }}>
                    <Badge
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      overlap='rectangular'
                      sx={{
                        background: '#10856F',
                        height: 80,
                        width: 130,
                        borderRadius: 0.5,
                      }}
                    ></Badge>
                    <Box sx={{ ml: 2 }}>
                      <Typography
                        gutterBottom
                        variant='subtitle2'
                        component='div'
                      >
                        FABRIC COLOR
                      </Typography>
                      <Typography variant='h5' color='text.secondary'>
                        Butter Crepe Teal Green
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid item container xs={6} spacing={2}>
              <Grid item xs={12}>
                <Card
                  sx={{
                    boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      height='194'
                      image='/images/wood.png'
                      alt='green iguana'
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant='subtitle2'
                        component='div'
                      >
                        TYPE OF WOOD
                      </Typography>
                      <Typography variant='h5' color='text.secondary'>
                        Mahogany
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card
                  sx={{
                    boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      height='194'
                      image='/images/metal.png'
                      alt='green iguana'
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant='subtitle2'
                        component='div'
                      >
                        LEG METAL
                      </Typography>
                      <Typography variant='h5' color='text.secondary'>
                        Brass
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </CardContent>
    </Card>
  );
}

export default TasksAnalytics;

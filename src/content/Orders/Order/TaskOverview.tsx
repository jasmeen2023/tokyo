import { ArrowForward } from '@mui/icons-material';
import { Card, CardContent, CardHeader } from '@mui/material';
import {
  Avatar,
  Badge,
  Box,
  Grid,
  LinearProgress,
  styled,
  Typography,
  useTheme,
} from '@mui/material';

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
    border: ${theme.colors.alpha.white[100]} solid 2px;
`
);

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(13)};
    height: ${theme.spacing(13)};
`
);

const LinearProgressWrapper = styled(LinearProgress)(
  ({ theme }) => `
        flex-grow: 1;
        height: 10px;
        
        &.MuiLinearProgress-root {
          background-color: ${theme.colors.alpha.black[10]};
        }
        
        .MuiLinearProgress-bar {
          border-radius: ${theme.general.borderRadiusXl};
        }
`
);

const Arrow = styled(ArrowForward)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  border: `0.5px solid ${theme.palette.info.main}`,
  padding: 5,
  height: 25,
  width: 25,
  borderRadius: '50%',
  borderStyle: 'solid',
  color: theme.colors.primary.main,
}));

function TaskOverview() {
  const theme = useTheme();

  return (
    <Card sx={{ boxShadow: 'none', borderRadius: 0 }}>
      <CardHeader title='Details'></CardHeader>
      <CardContent sx={{ backgroundColor: 'transparent' }}>
        <Grid container spacing={4} rowSpacing={4}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box display='flex'>
              <Badge
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                overlap='circular'
              >
                <AvatarWrapper alt='Ann Saris' src='/images/red-chair.png' />
              </Badge>
              <Box sx={{ ml: 2 }}>
                <Typography variant='h4' noWrap gutterBottom>
                  Osmond Armchair
                </Typography>
                <Box display='flex'>
                  <Typography
                    variant='subtitle2'
                    fontSize={12}
                    component='h6'
                    noWrap
                  >
                    Color
                  </Typography>
                  <Typography
                    variant='body1'
                    fontSize={12}
                    component='h6'
                    noWrap
                    ml={1}
                  >
                    Gunnared biege
                  </Typography>
                </Box>
                <Box display='flex'>
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
                  <Typography
                    ml={1}
                    my={2}
                    variant='body2'
                    color='text.secondary'
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    02
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Box display='flex'>
              <Box sx={{ mr: 2 }}>
                <Typography variant='body2' noWrap>
                  Dhs 5,400.00
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default TaskOverview;

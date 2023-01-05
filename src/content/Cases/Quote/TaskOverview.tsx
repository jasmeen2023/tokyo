import { ArrowForward, Call } from '@mui/icons-material';
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
    width: ${theme.spacing(6)};
    height: ${theme.spacing(6)};
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
      <CardHeader title='Customer Details'></CardHeader>
      <CardContent sx={{ background: '#E8E8E8' }}>
        <Grid container spacing={4} rowSpacing={4}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box display='flex' alignItems='center'>
              <Badge
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                overlap='circular'
              >
                <AvatarWrapper
                  alt='Ann Saris'
                  src='/static/images/avatars/3.jpg'
                />
              </Badge>
              <Box sx={{ ml: 2 }}>
                <Typography variant='h4' noWrap gutterBottom>
                  Harvey Alvarado
                </Typography>
                <Typography
                  variant='subtitle2'
                  fontSize={12}
                  component='h6'
                  noWrap
                >
                  Customer Details
                </Typography>
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
              alignItems: 'center',
            }}
          >
            <Box display='flex' alignItems='center'>
              <Box sx={{ mr: 2 }}>
                <Typography variant='subtitle1' noWrap>
                  +971 - 399 345 678
                </Typography>
              </Box>
              <Avatar
                sx={{ bgcolor: '#00AB4D', color: 'white', borderRadius: 1 }}
                variant='square'
              >
                <Call />
              </Avatar>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default TaskOverview;

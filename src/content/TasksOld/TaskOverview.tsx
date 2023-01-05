import { ArrowForward } from '@mui/icons-material';
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
    <Grid container spacing={4} rowSpacing={4} xs={12}>
      <Grid
        item
        xs={12}
        md={4}
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
            // badgeContent={
            //   <Tooltip
            //     arrow
            //     placement='top'
            //     title={
            //       'Online since ' +
            //       formatDistance(subMinutes(new Date(), 6), new Date(), {
            //         addSuffix: true,
            //       })
            //     }
            //   >
            //     <DotLegend
            //       style={{ background: `${theme.colors.success.main}` }}
            //     />
            //   </Tooltip>
            // }
          >
            <AvatarWrapper
              variant='square'
              alt='Ann Saris'
              src='/assets/svg/totalcustomers.svg'
            />
          </Badge>
          <Box sx={{ ml: 2 }}>
            <Typography variant='body1' fontSize={30} noWrap gutterBottom>
              42,000
            </Typography>
            <Typography variant='subtitle2' noWrap>
              Ordered
            </Typography>
          </Box>
        </Box>

        {/* 
          <Typography variant='subtitle2' gutterBottom>
            <Text color='black'>2</Text> out of <Text color='black'>8</Text>{' '}
            tasks completed
          </Typography>
          <LinearProgressWrapper
            value={25}
            color='primary'
            variant='determinate'
          /> */}
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
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
            // badgeContent={
            //   <Tooltip
            //     arrow
            //     placement='top'
            //     title={
            //       'Online since ' +
            //       formatDistance(subMinutes(new Date(), 6), new Date(), {
            //         addSuffix: true,
            //       })
            //     }
            //   >
            //     <DotLegend
            //       style={{ background: `${theme.colors.success.main}` }}
            //     />
            //   </Tooltip>
            // }
          >
            <AvatarWrapper
              variant='square'
              alt='Ann Saris'
              src='/assets/svg/referrals.svg'
            />
          </Badge>
          <Box sx={{ ml: 2 }}>
            <Typography variant='body1' fontSize={30} noWrap gutterBottom>
              5,600
            </Typography>
            <Typography variant='subtitle2' noWrap>
              Ready for delivery
            </Typography>
          </Box>
        </Box>

        {/* 
          <Typography variant='subtitle2' gutterBottom>
            <Text color='black'>2</Text> out of <Text color='black'>8</Text>{' '}
            tasks completed
          </Typography>
          <LinearProgressWrapper
            value={25}
            color='primary'
            variant='determinate'
          /> */}
      </Grid>

      <Grid
        item
        xs={12}
        md={4}
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
            // badgeContent={
            //   <Tooltip
            //     arrow
            //     placement='top'
            //     title={
            //       'Online since ' +
            //       formatDistance(subMinutes(new Date(), 6), new Date(), {
            //         addSuffix: true,
            //       })
            //     }
            //   >
            //     <DotLegend
            //       style={{ background: `${theme.colors.success.main}` }}
            //     />
            //   </Tooltip>
            // }
          >
            <AvatarWrapper
              variant='square'
              alt='Ann Saris'
              src='/assets/svg/referrals.svg'
            />
          </Badge>
          <Box sx={{ ml: 2 }}>
            <Typography variant='body1' fontSize={30} noWrap gutterBottom>
              3,475
            </Typography>
            <Typography variant='subtitle2' noWrap>
              Ready for delivery
            </Typography>
          </Box>
        </Box>

        {/* 
          <Typography variant='subtitle2' gutterBottom>
            <Text color='black'>2</Text> out of <Text color='black'>8</Text>{' '}
            tasks completed
          </Typography>
          <LinearProgressWrapper
            value={25}
            color='primary'
            variant='determinate'
          /> */}
      </Grid>
    </Grid>
  );
}

export default TaskOverview;

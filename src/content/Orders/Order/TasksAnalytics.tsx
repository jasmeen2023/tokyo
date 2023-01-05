import { Check, Edit, Repeat } from '@mui/icons-material';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  useTheme,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';

function TasksAnalytics() {
  const theme = useTheme();

  return (
    <>
      <Divider />

      <Card
        sx={{
          boxShadow: 'none',
        }}
      >
        <CardHeader title='Order Status' />
        <CardContent sx={{ backgroundColor: 'transparent', p: 0, m: 0 }}>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 1,
              },
            }}
          >
            <TimelineItem
              sx={{
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    ml: -1,
                    backgroundColor: '#00AB4D',
                    color: 'white',
                  }}
                >
                  <Check fontSize='small' />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ ml: 2 }}>
                <Grid container>
                  <Grid item xs>
                    <Typography variant='h4'>Ordered</Typography>
                    <Typography variant='subtitle2' fontSize={12}>
                      31 Aug’22 12:30 PM
                    </Typography>
                  </Grid>
                </Grid>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem
              sx={{
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    ml: -1,
                    backgroundColor: '#00AB4D',
                    color: 'white',
                  }}
                >
                  <Check fontSize='small' />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ ml: 2, width: '100%' }}>
                <Grid container>
                  <Grid item xs>
                    <Typography variant='h4'>Structure Ready</Typography>
                    <Typography variant='subtitle2' fontSize={12}>
                      31 Aug’22 12:30 PM
                    </Typography>
                  </Grid>
                  <Grid item xs={4} container spacing={0.5}>
                    <Grid item>
                      <Image
                        src='/images/noattribute.png'
                        alt=''
                        width={35}
                        height={35}
                      />
                    </Grid>
                    <Grid item>
                      <Image
                        src='/images/noattribute.png'
                        alt=''
                        width={35}
                        height={35}
                      />
                    </Grid>
                    <Grid item>
                      <Image
                        src='/images/noattribute.png'
                        alt=''
                        width={35}
                        height={35}
                      />
                    </Grid>
                    <Grid item>
                      <Image
                        src='/images/noattribute.png'
                        alt=''
                        width={35}
                        height={35}
                      />
                    </Grid>
                    <Grid item>
                      <IconButton>
                        <Edit />
                      </IconButton>
                    </Grid>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant='h5'>Jurrien Oldhof</Typography>
                    <Typography variant='subtitle2' fontSize={12}>
                      Admin
                    </Typography>
                  </Grid>
                </Grid>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem
              sx={{
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    ml: -1,
                    backgroundColor: '#00AB4D',
                    color: 'white',
                  }}
                >
                  <Check fontSize='small' />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ ml: 2 }}>
                <Grid container>
                  <Grid item xs>
                    <Typography variant='h4'>Upholstery Ready</Typography>
                    <Typography variant='subtitle2' fontSize={12}>
                      31 Aug’22 12:30 PM
                    </Typography>
                  </Grid>
                  <Grid item xs={4} container spacing={0.5}>
                    <Grid item>
                      <Image
                        src='/images/noattribute.png'
                        alt=''
                        width={35}
                        height={35}
                      />
                    </Grid>
                    <Grid item>
                      <Image
                        src='/images/noattribute.png'
                        alt=''
                        width={35}
                        height={35}
                      />
                    </Grid>
                    <Grid item>
                      <Image
                        src='/images/noattribute.png'
                        alt=''
                        width={35}
                        height={35}
                      />
                    </Grid>
                    <Grid item>
                      <Image
                        src='/images/noattribute.png'
                        alt=''
                        width={35}
                        height={35}
                      />
                    </Grid>
                    <Grid item>
                      <IconButton>
                        <Edit />
                      </IconButton>
                    </Grid>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant='h5'>Jurrien Oldhof</Typography>
                    <Typography variant='subtitle2' fontSize={12}>
                      Admin
                    </Typography>
                  </Grid>
                </Grid>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem
              sx={{
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    ml: -1,
                    backgroundColor: '#FFBA4F',
                    color: 'white',
                  }}
                >
                  <Repeat fontSize='small' />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ ml: 2 }}>
                <Grid container>
                  <Grid item xs>
                    <Typography variant='h4'>Ready for delivery, </Typography>
                    <Typography variant='subtitle2' fontSize={12}>
                      31 Aug’22 12:30 PM
                    </Typography>
                  </Grid>

                  <Grid item xs={2}>
                    <Typography variant='h5'>Jurrien Oldhof</Typography>
                    <Typography variant='subtitle2' fontSize={12}>
                      Admin
                    </Typography>
                  </Grid>
                </Grid>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem
              sx={{
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    ml: -1,
                    backgroundColor: '#D9D9D9#',
                    color: 'white',
                  }}
                >
                  <Check fontSize='small' />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ ml: 2 }}>
                <Grid container>
                  <Grid item>
                    <Typography variant='h4'>Delivered</Typography>
                    <Typography variant='subtitle2' fontSize={12}>
                      31 Aug’22 12:30 PM
                    </Typography>
                  </Grid>
                </Grid>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </CardContent>
      </Card>
    </>
  );
}

export default TasksAnalytics;

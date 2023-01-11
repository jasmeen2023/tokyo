import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import SidebarLayout from '@/layouts/SidebarLayout';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Image from 'next/image';
import CaseNotesDialog from './CaseNotesDialog';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    color: 'rgba(0, 0, 0, 0.87)',
    background: '#FFFFFF',
    boxShadow: '0px 0px 11px rgba(0, 0, 0, 0.25)',
  },
}));

function CaseNotesPage() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        <Grid item xs={12}>
          <CardHeader
            title='Case Notes'
            sx={{
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '21px',
              textTransform: 'capitalize',
              color: '#4B473E',
            }}
          />

          <Card
            sx={{
              background: '#FFF',
              borderRadius: 1,
              boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
              minHeight: '120px',
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '175%',

                  color: '#232D42',
                }}
              >
                A case note is a summary and analysis of a single case, as
                opposed to an article, which examines an area of law. A case
                note should outline the facts of the case, as well as its ratio
                decedendi, and also provide a critical analysis of the decision.
              </Typography>
            </CardContent>
          </Card>

          <Button
            size='medium'
            onClick={handleClickOpen}
            sx={{
              background: '#4B65B2',
              border: '1.5px solid #4B65B2',
              borderRadius: '4px',
              color: '#FFF',
              my: 1,
            }}
          >
            Add New
          </Button>
          <CaseNotesDialog open={open} onClose={handleClose} />
        </Grid>
        <Grid item xs={12}>
          <Card
            sx={{
              background: '#FFF',
              borderRadius: 1,
              boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
            }}
          >
            <CardContent>
              <Grid sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
                <Typography
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '21px',
                    color: '#4B473E',
                  }}
                >
                  Case Notes
                </Typography>
                <LightTooltip
                  title={
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: '14px',
                          lineHeight: '26px',
                          color: '#292D32',
                        }}
                      >
                        Edited Fields Information
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: '13px',
                          lineHeight: '175%',

                          color: '#232D42',
                        }}
                      >
                        A case note is a summary and analysis of a single case,
                        as opposed to an article,{' '}
                      </Typography>
                    </Box>
                  }
                >
                  <IconButton sx={{ color: '#4B65B2' }}>
                    <ErrorOutlineIcon />
                  </IconButton>
                </LightTooltip>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Grid
                    container
                    spacing={2}
                    sx={{ display: 'flex', margin: 1 }}
                  >
                    <IconButton
                      sx={{
                        background: '#EEF7FE',
                        borderRadius: '4px',
                        color: '#4B65B2',
                      }}
                    >
                      <CalendarMonthIcon />
                    </IconButton>
                    <Grid>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '24px',
                          display: 'flex',
                          alignItems: 'center',
                          letterSpacing: '0.01em',
                          color: '#292D32',
                          marginLeft: 1,
                        }}
                      >
                        SEP 10, 2022 12:30 PM
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: '12px',
                          lineHeight: '16px',
                          textTransform: 'capitalize',
                          color: '#000000',
                          marginLeft: 1,
                        }}
                      >
                        Last updated on
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={2}
                    sx={{ display: 'flex', margin: 1 }}
                  >
                    <Image
                      src='/images/Color.png'
                      alt='user'
                      width='40px'
                      height='40px'
                    />
                    <Grid>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '24px',
                          display: 'flex',
                          alignItems: 'center',
                          letterSpacing: '0.01em',
                          color: '#292D32',
                          marginLeft: 1,
                        }}
                      >
                        Elva Cora
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: '12px',
                          lineHeight: '16px',
                          textTransform: 'capitalize',
                          color: '#000000',
                          marginLeft: 1,
                        }}
                      >
                        Updated by
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={10}>
                  <Card
                    sx={{
                      background: '#F6F7F8',
                      borderRadius: 1,
                      boxShadow: '0px 2px 2px 0px rgb(47 41 62 / 3%)',
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{
                          fontStyle: 'normal',
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '175%',

                          color: '#232D42',
                        }}
                      >
                        A case note is a summary and analysis of a single case,
                        as opposed to an article, which examines an area of law.
                        A case note should outline the facts of the case, as
                        well as its ratio decedendi, and also provide a critical
                        analysis of the decision.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

CaseNotesPage.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default CaseNotesPage;

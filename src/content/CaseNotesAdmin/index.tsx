import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  InputAdornment,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
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
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    color: 'rgba(0, 0, 0, 0.87)',
    background: '#FFFFFF',
    boxShadow: '0px 0px 11px rgba(0, 0, 0, 0.25)',
  },
}));

function CaseNotesAdmin() {
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
        item
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          my: 1,
        }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '19px',
            textTransform: 'capitalize',
            color: '#000000',
            paddingX: 1,
          }}
        >
          Schedule Case Notes
        </Typography>
        <TextField
          placeholder='Select Date'
          size='small'
          sx={{
            background: '#FFFFFF',
            borderRadius: '4px',
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position='start'
                sx={{
                  padding: '22px 8px',
                  background: '#EBEBEB',
                  color: '#4B65B2',
                  marginLeft: '-15px',
                }}
              >
                <CalendarMonthIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Grid>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        <Grid item xs={12}>
          <Card
            sx={{
              background: '#FFF',
              borderRadius: 1,
              boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
              // minHeight: '120px',
              marginY: 2,
            }}
          >
            <CardContent>
              <Grid container spacing={4}>
                <Grid item xs={8}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: '21px',
                      textTransform: 'capitalize',
                      color: '#4B473E',
                      paddingY: 1,
                    }}
                  >
                    Case Notes
                  </Typography>
                  <TextField
                    minRows={3}
                    multiline
                    fullWidth
                    placeholder='-'
                  ></TextField>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: '21px',
                      textTransform: 'capitalize',
                      color: '#4B473E',
                      paddingY: 1,
                    }}
                  >
                    Signature
                  </Typography>
                  <TextField
                    minRows={3}
                    multiline
                    fullWidth
                    placeholder='-'
                  ></TextField>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card
            sx={{
              background: '#FFF',
              borderRadius: 1,
              boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
              marginY: 2,
            }}
          >
            <CardContent>
              <Grid container spacing={4}>
                <Grid item xs={8}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: '21px',
                      textTransform: 'capitalize',
                      color: '#4B473E',
                      paddingY: 1,
                    }}
                  >
                    Case Notes
                  </Typography>
                  <TextField
                    minRows={3}
                    multiline
                    fullWidth
                    placeholder='A case note is a summary and analysis of a single case, as opposed to an article, which examines an area of law. A case note should outline the facts of the case, as well as its ratio decedendi, and also provide a critical analysis of the decision.'
                  ></TextField>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: '21px',
                      textTransform: 'capitalize',
                      color: '#4B473E',
                      paddingY: 1,
                    }}
                  >
                    Signature
                  </Typography>
                  <TextField
                    minRows={3}
                    multiline
                    fullWidth
                    placeholder='-'
                  ></TextField>
                </Grid>
              </Grid>

              <Grid container item xs={12} my={1}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <IconButton>
                        <CalendarMonthIcon
                          sx={{
                            color: '#4B65B2',
                            background: '#EEF7FE',
                            fontSize: 40,
                            padding: '5px',
                            borderRadius: 1,
                          }}
                        />
                      </IconButton>
                    </ListItemAvatar>
                    <ListItemText
                      primary='SEP 10, 2022 12:30 PM'
                      secondary='Last Update On'
                    ></ListItemText>
                  </ListItem>
                </List>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Image src='/images/color.png' width={42} height={42} />
                    </ListItemAvatar>
                    <ListItemText
                      primary='Elva Cross'
                      secondary='Updated By'
                    ></ListItemText>
                  </ListItem>
                </List>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

CaseNotesAdmin.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default CaseNotesAdmin;

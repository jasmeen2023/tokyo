import BlockTwoToneIcon from '@mui/icons-material/BlockTwoTone';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import EmojiEmotionsTwoToneIcon from '@mui/icons-material/EmojiEmotionsTwoTone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import NotificationsOffTwoToneIcon from '@mui/icons-material/NotificationsOffTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import VideoCameraFrontTwoToneIcon from '@mui/icons-material/VideoCameraFrontTwoTone';
import FormControlLabel from '@mui/material/FormControlLabel';
import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Drawer,
  FormControl,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { formatDistance, subMinutes } from 'date-fns';
import Image from 'next/image';
import { SyntheticEvent, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { classes } from 'http-status';
import { Container } from '@mui/material';
import { CalendarMonth } from '@mui/icons-material';

const RootWrapper = styled(Box)(
  ({ theme }) => `
        @media (min-width: ${theme.breakpoints.values.md}px) {
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
`
);

const ListItemIconWrapper = styled(ListItemIcon)(
  ({ theme }) => `
        min-width: 36px;
        color: ${theme.colors.primary.light};
`
);

const AccordionSummaryWrapper = styled(AccordionSummary)(
  ({ theme }) => `
        &.Mui-expanded {
          min-height: 48px;
        }

        .MuiAccordionSummary-content.Mui-expanded {
          margin: 12px 0;
        }

        .MuiSvgIcon-root {
          transition: ${theme.transitions.create(['color'])};
        }

        &.MuiButtonBase-root {

          margin-bottom: ${theme.spacing(0.5)};

          &:last-child {
            margin-bottom: 0;
          }

          &.Mui-expanded,
          &:hover {
            background: ${theme.colors.alpha.black[10]};

            .MuiSvgIcon-root {
              color: ${theme.colors.primary.main};
            }
          }
        }
`
);

const useStyles = makeStyles((theme) => ({
  cell_short: {
    width: '60%',
    height: '0px',
  },
  cell_short1: {
    width: '40%',
  },
}));

const InputBoxes = styled(TextField)(({ theme }) => ({
  background: '#FFFFFF',
  borderRadius: '4px',
}));

export function SimpleDialog(props) {
  const classes = useStyles();

  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  //   const handleListItemClick = (value) => {
  //     onClose(value);
  //   };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle
        sx={{
          fontWeight: 600,
          fontSize: '18px',
          lineHeight: '24px',
          textAlign: 'left',
        }}
      >
        Communication Choices{' '}
      </DialogTitle>
      <DialogContent sx={{ background: '#FFF' }}>
        <Table>
          <TableBody>
            <TableRow
              sx={{
                background: '#FFF',
              }}
            >
              <TableCell
                className={classes.cell_short1}
                sx={{
                  borderBottom: '2px dashed rgba(151, 151, 151, 0.5)',
                  paddingY: 0.5,
                }}
              >
                Type
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: '2px dashed rgba(151, 151, 151, 0.5)',
                  paddingY: 0.5,
                }}
              >
                Choose
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: '2px dashed rgba(151, 151, 151, 0.5)',
                  paddingY: 0.5,
                }}
              ></TableCell>
            </TableRow>
            <TableRow sx={{ background: '#FFF' }}>
              <TableCell
                sx={{
                  borderBottom: '2px dashed rgba(151, 151, 151, 0.5)',
                  paddingY: 0.5,
                }}
              >
                Text
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: '2px dashed rgba(151, 151, 151, 0.5)',
                  paddingY: 0.5,
                }}
              >
                <RadioGroup>
                  <FormControlLabel value='' control={<Radio />} label='' />
                </RadioGroup>
              </TableCell>
              <TableCell
                className={classes.cell_short}
                sx={{
                  borderBottom: '2px dashed rgba(151, 151, 151, 0.5)',
                  paddingY: 0.5,
                }}
              >
                <InputBoxes></InputBoxes>
              </TableCell>
            </TableRow>
            <TableRow sx={{ background: '#FFF' }}>
              <TableCell
                sx={{
                  borderBottom: '2px dashed rgba(151, 151, 151, 0.5)',
                  paddingY: 0.5,
                }}
              >
                Call
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: '2px dashed rgba(151, 151, 151, 0.5)',
                  paddingY: 0.5,
                }}
              >
                <RadioGroup>
                  <FormControlLabel value='' control={<Radio />} label='' />
                </RadioGroup>
              </TableCell>
              <TableCell
                className={classes.cell_short}
                sx={{
                  borderBottom: '2px dashed rgba(151, 151, 151, 0.5)',
                  paddingY: 0.5,
                }}
              >
                <InputBoxes></InputBoxes>
              </TableCell>
            </TableRow>
            <TableRow sx={{ background: '#FFF' }}>
              <TableCell
                sx={{
                  borderBottom: '2px dashed rgba(151, 151, 151, 0.5)',
                  paddingY: 0.5,
                }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: '2px dashed rgba(151, 151, 151, 0.5)',
                  paddingY: 0.5,
                }}
              >
                <RadioGroup>
                  <FormControlLabel value='' control={<Radio />} label='' />
                </RadioGroup>
              </TableCell>
              <TableCell
                className={classes.cell_short}
                sx={{
                  borderBottom: '2px dashed rgba(151, 151, 151, 0.5)',
                  paddingY: 0.5,
                }}
              >
                <InputBoxes></InputBoxes>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>

      <DialogActions>
        <Button
          sx={{
            background:
              'linear-gradient(91.88deg, #4B65B2 2.83%, #13BBE6 100%)',
            borderRadius: '5px',
            padding: '10px 50px',
            color: '#FFF',
          }}
        >
          Save
        </Button>
        <Button
          onClick={handleClose}
          sx={{
            background:
              'linear-gradient(91.88deg, #4B65B2 2.83%, #13BBE6 100%)',
            borderRadius: '5px',
            padding: '10px 50px',
            color: '#FFF',
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export function SimpleGDPRDialog(props) {
  const classes = useStyles();

  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  //   const handleListItemClick = (value) => {
  //     onClose(value);
  //   };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle
        sx={{
          fontWeight: 600,
          fontSize: '18px',
          lineHeight: '24px',
          textAlign: 'left',
          background: '#FFF',
        }}
      >
        GDPR Policy
      </DialogTitle>
      <DialogContent sx={{ background: '#FFF' }}>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '24px',
            textTransform: 'capitalize',
            color: '#4B473E',
          }}
        >
          This Regulation applies to the processing of personal data wholly or
          partly by automated means and to the processing other than by
          automated means of personal data which form part of a filing system or
          are intended to form part of a filing system. This Regulation does not
          apply to the processing of personal data: in the course of an activity
          which falls outside the scope of Union law; by the Member States when
          carrying out activities which fall within the scope of Chapter 2 of
          Title V of the TEU; by a natural person in the course of a purely
          personal or household activity; by competent authorities for the
          purposes of the prevention, investigation, detection or prosecution of
          criminal offences or the execution of criminal penalties, including
          the safeguarding against and the prevention of threats to public
          security. 1For the processing of personal data by the Union
          institutions, bodies, offices and agencies, Regulation (EC) No 45/2001
          applies. 2Regulation (EC) No 45/2001 and other Union legal acts
          applicable to such processing of personal data shall be adapted to the
          principles and rules of this Regulation in accordance with Article 98.
          This Regulation shall be without prejudice to the application of
          Directive 2000/31/EC, in particular of the liability rules of
          intermediary service providers in Articles 12 to 15 of that Directive.
        </Typography>

        <Typography
          sx={{
            marginY: 2,
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '26px',
            color: '#292D32',
          }}
        >
          Mention the date & time, and how you recieved the consent
        </Typography>

        <Grid
          container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Grid item>
            <FormControl>
              <FormLabel
                sx={{
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '19px',
                  textTransform: 'capitalize',
                  color: '#000000',
                }}
              >
                Consent given date
              </FormLabel>
              <TextField
                sx={{ paddingLeft: 0 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start' sx={{ padding: 0 }}>
                      <IconButton>
                        <CalendarMonth
                          sx={{
                            paddingLeft: 0,
                            paddingRight: 0,
                            color: '#4B65B2',
                            background: '#EEF7FE',
                          }}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <FormLabel
                sx={{
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '19px',
                  textTransform: 'capitalize',
                  color: '#000000',
                }}
              >
                Description
              </FormLabel>
              <TextField></TextField>
            </FormControl>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ background: '#FFF' }}>
        <Button
          sx={{
            background:
              'linear-gradient(91.88deg, #4B65B2 2.83%, #13BBE6 100%)',
            borderRadius: '5px',
            padding: '10px 50px',
            color: '#FFF',
          }}
        >
          Save
        </Button>
        <Button
          onClick={handleClose}
          sx={{
            background:
              'linear-gradient(91.88deg, #4B65B2 2.83%, #13BBE6 100%)',
            borderRadius: '5px',
            padding: '10px 50px',
            color: '#FFF',
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  //   selectedValue: PropTypes.string.isRequired,
};

SimpleGDPRDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  //   selectedValue: PropTypes.string.isRequired,
};

function TopBarContent() {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  const [openGDPR, setOpenGDPR] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setOpenGDPR(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
    setOpenGDPR(false);
  };

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [expanded, setExpanded] = useState<string | false>('section1');

  const handleChange =
    (section: string) => (_event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? section : false);
    };

  return (
    <>
      <RootWrapper>
        <Box display='flex' alignItems='center'>
          <Image
            src='/images/Color.png'
            alt='usericon'
            width='48'
            height='48'
          />
          <Box ml={1}>
            <Typography variant='h4'>Zain Baptista</Typography>
            <Typography variant='subtitle1'>
              {formatDistance(subMinutes(new Date(), 8), new Date(), {
                addSuffix: true,
              })}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: {
              xs: 'none',
              lg: 'flex',
              alignItems: 'center',
            },
          }}
        >
          <Button
            sx={{
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '175%',
              color: '#4B65B2',
              padding: 1,
            }}
            onClick={handleClickOpen}
          >
            Communication Choices
          </Button>
          <SimpleDialog
            //   selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
          <Image
            style={{ padding: 1 }}
            src='/images/straightline.png'
            alt='line'
            width='2px'
            height='20px'
          />
          <Button
            sx={{
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '175%',
              color: '#4B65B2',
              padding: 1,
            }}
            onClick={handleClickOpen}
          >
            GDPR Policy
          </Button>
          <SimpleGDPRDialog
            //   selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
          {/* <Tooltip placement='bottom' title='Start a voice call'>
            <IconButton color='primary'>
              <CallTwoToneIcon />
            </IconButton>
          </Tooltip>
          <Tooltip placement='bottom' title='Start a video call'>
            <IconButton color='primary'>
              <VideoCameraFrontTwoToneIcon />
            </IconButton>
          </Tooltip>
          <Tooltip placement='bottom' title='Conversation information'>
            <IconButton color='primary' onClick={handleDrawerToggle}>
              <InfoTwoToneIcon />
            </IconButton>
          </Tooltip> */}
        </Box>
      </RootWrapper>
      <Drawer
        sx={{
          display: { xs: 'none', md: 'flex' },
        }}
        variant='temporary'
        anchor={theme.direction === 'rtl' ? 'left' : 'right'}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        elevation={9}
      >
        <Box
          sx={{
            minWidth: 360,
          }}
          p={2}
        >
          <Box
            sx={{
              textAlign: 'center',
            }}
          >
            <Avatar
              sx={{
                mx: 'auto',
                my: 2,
                width: theme.spacing(12),
                height: theme.spacing(12),
              }}
              variant='rounded'
              alt='Zain Baptista'
              src='/static/images/avatars/1.jpg'
            />
            <Typography variant='h4'>Zain Baptista</Typography>
            <Typography variant='subtitle2'>
              Active{' '}
              {formatDistance(subMinutes(new Date(), 7), new Date(), {
                addSuffix: true,
              })}
            </Typography>
          </Box>
          <Divider
            sx={{
              my: 3,
            }}
          />

          <Accordion
            expanded={expanded === 'section1'}
            onChange={handleChange('section1')}
          >
            <AccordionSummaryWrapper expandIcon={<ExpandMoreIcon />}>
              <Typography variant='h5'>Customize Chat</Typography>
            </AccordionSummaryWrapper>
            <AccordionDetails
              sx={{
                p: 0,
              }}
            >
              <List component='nav'>
                <ListItem button>
                  <ListItemIconWrapper>
                    <SearchTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary='Search in Conversation'
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIconWrapper>
                    <ColorLensTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary='Change Theme Styling'
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIconWrapper>
                    <EmojiEmotionsTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary='Choose Default Emoji'
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'section2'}
            onChange={handleChange('section2')}
          >
            <AccordionSummaryWrapper expandIcon={<ExpandMoreIcon />}>
              <Typography variant='h5'>Privacy & Support</Typography>
            </AccordionSummaryWrapper>
            <AccordionDetails
              sx={{
                p: 0,
              }}
            >
              <List component='nav'>
                <ListItem button>
                  <ListItemIconWrapper>
                    <NotificationsOffTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary='Turn off notifications'
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIconWrapper>
                    <CancelTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary='Ignore all messages'
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIconWrapper>
                    <BlockTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary='Block user'
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIconWrapper>
                    <WarningTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary="Something's Wrong"
                    primaryTypographyProps={{ variant: 'h5' }}
                    secondary='Report the conversation and provide feedback'
                    secondaryTypographyProps={{ variant: 'subtitle1' }}
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'section3'}
            onChange={handleChange('section3')}
          >
            <AccordionSummaryWrapper expandIcon={<ExpandMoreIcon />}>
              <Typography variant='h5'>Shared Files</Typography>
            </AccordionSummaryWrapper>
            <AccordionDetails
              sx={{
                p: 0,
              }}
            >
              <List component='nav'>
                <ListItem button>
                  <ListItemIconWrapper>
                    <DescriptionTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary='HolidayPictures.zip'
                    primaryTypographyProps={{ variant: 'h5' }}
                    secondary='You opened in the past year'
                    secondaryTypographyProps={{ variant: 'subtitle1' }}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIconWrapper>
                    <DescriptionTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary='2021Screenshot.jpg'
                    primaryTypographyProps={{ variant: 'h5' }}
                    secondary='You edited this file yesterday'
                    secondaryTypographyProps={{ variant: 'subtitle1' }}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIconWrapper>
                    <DescriptionTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary='PresentationDeck.pdf'
                    primaryTypographyProps={{ variant: 'h5' }}
                    secondary='Never opened'
                    secondaryTypographyProps={{ variant: 'subtitle1' }}
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Drawer>
    </>
  );
}

export default TopBarContent;

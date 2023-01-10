import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  DialogActions,
  DialogContent,
  Divider,
  Grid,
  List,
  ListItemAvatar,
  ListItemText,
  TextareaAutosize,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import { useState } from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import PageTitle from '@/components/PageTitle';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { useTheme } from '@mui/material/styles';
import SidebarLayout from '@/layouts/SidebarLayout';
import { ErrorOutline } from '@mui/icons-material';
import Image from 'next/image';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import ListItem from '@mui/material/ListItem';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    color: 'rgba(0, 0, 0, 0.87)',
    background: '#FFFFFF',
    boxShadow: '0px 0px 11px rgba(0, 0, 0, 0.25)',
  },
}));

const useStyles = makeStyles((theme) => ({
  cell_short: {
    // width: '100%',
    borderRight: '2px solid rgba(196, 196, 196, 0.4)',
  },
  // row_border: {
  //   borderBottom: '2px dashed rgba(151, 151, 151, 0.24)',
  // },
}));
const Input = styled('input')({
  display: 'none',
});

const InputBoxes = styled(TextareaAutosize)(({ theme }) => ({
  background: '#FFFFFF',
  borderRadius: '4px',
}));

export function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog fullWidth onClose={handleClose} open={open}>
      <DialogTitle
        sx={{
          fontWeight: 600,
          fontSize: '18px',
          lineHeight: '24px',
          textAlign: 'left',
          background: '#FFF',
        }}
      >
        Explain the purpose of this message
      </DialogTitle>
      <DialogContent sx={{ background: '#FFF' }}>
        <InputBoxes
          minRows={10}
          style={{ width: 550 }}
          sx={{
            borderRadius: '4px',
          }}
        ></InputBoxes>
      </DialogContent>

      <Grid
        container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Grid item>
          <List sx={{ width: '100%', maxWidth: 360 }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Image
                    src='/images/Color.png'
                    alt='icon'
                    width='50px'
                    height='50px'
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Elva Cross' secondary='Update by' />
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '24px',
              display: 'flex',
              alignItems: 'center',
              letterSpacing: '0.01em',
              color: '#292D32',
            }}
          >
            SEP 10, 2022 12:30 PM
          </Typography>
        </Grid>
        <Grid item>
          <DialogActions sx={{ background: '#FFF' }}>
            <Button
              sx={{
                background:
                  'linear-gradient(91.88deg, #4B65B2 2.83%, #13BBE6 100%)',
                borderRadius: '5px',

                color: '#FFF',
              }}
            >
              Yes, Send
            </Button>
            <Button
              onClick={handleClose}
              sx={{
                background:
                  'linear-gradient(91.88deg, #4B65B2 2.83%, #13BBE6 100%)',
                borderRadius: '5px',

                color: '#FFF',
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Grid>
      </Grid>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  //   selectedValue: PropTypes.string.isRequired,
};
function CaseNotesPage() {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [selectedValue, setSelectedValue] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='stretch'
        spacing={3}
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
          <CardActions>
            <Button
              size='small'
              sx={{
                background: '#4B65B2',
                border: '1.5px solid #4B65B2',
                borderRadius: '4px',
                color: '#FFF',
              }}
            >
              Add New
            </Button>
          </CardActions>
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
              <Grid sx={{ display: 'flex', alignItems: 'center' }}>
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
                    sx={{ display: 'flex', margin: 0.5 }}
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
                    sx={{ display: 'flex', margin: 0.5 }}
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

        <Grid item xs={12}>
          <Button
            onClick={handleClickOpen}
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
          <SimpleDialog
            //   selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
        </Grid>
      </Grid>
    </>
  );
}

CaseNotesPage.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default CaseNotesPage;

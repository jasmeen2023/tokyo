import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Table,
  TableRow,
  Toolbar,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import CancelIcon from '@mui/icons-material/Cancel';
import { styled, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import ListItemText from '@mui/material/ListItemText';

const InputBoxes = styled(TableRow)(({ theme }) => ({
  background: '#FFFFFF',
}));

function CaseNotesDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth='sm'>
      <DialogContent sx={{ background: '#FFF' }}>
        <Toolbar sx={{ mb: 2 }}>
          <Typography
            sx={{
              flex: 1,
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '22px',
              lineHeight: '29px',
              color: '#000000',
            }}
            variant='h6'
            component='div'
          >
            Explain the purpose of this message
          </Typography>
          <IconButton
            edge='start'
            color='inherit'
            onClick={handleClose}
            aria-label='close'
          >
            <CancelIcon sx={{ color: '#999999' }} />
          </IconButton>
        </Toolbar>

        <Table sx={{ background: '#FFF' }}>
          <InputBoxes>
            <TextField
              fullWidth
              multiline
              InputProps={{
                rows: 8,
              }}
            ></TextField>
          </InputBoxes>
        </Table>
        <DialogActions>
          <Grid
            container
            xs
            display='flex'
            alignItems='center'
            justifyContent='space-between'
          >
            <Grid item>
              <List
                sx={{
                  width: '100%',
                  bgcolor: 'background.paper',
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Image
                        src='/images/Color.png'
                        width='42px'
                        height='42px'
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
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '24px',
                  letterSpacing: '0.01em',
                  color: '#292D32',
                }}
              >
                SEP 10, 2022 12:30 PM
              </Typography>
            </Grid>
            <Grid item>
              <Button
                sx={{
                  background:
                    'linear-gradient(91.88deg, #4B65B2 2.83%, #13BBE6 100%)',
                  borderRadius: '5px',
                  width: '113px',
                  height: '36px',
                  color: '#FFF',
                }}
              >
                Yes, Send
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

CaseNotesDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  //   selectedValue: PropTypes.string.isRequired,
};

export default CaseNotesDialog;

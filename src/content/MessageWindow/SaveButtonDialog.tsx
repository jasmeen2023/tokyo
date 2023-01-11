import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Table,
  TableRow,
  TextareaAutosize,
  Toolbar,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import CancelIcon from '@mui/icons-material/Cancel';
import { styled } from '@mui/material';
import TextField from '@mui/material/TextField';

const InputBoxes = styled(TableRow)(({ theme }) => ({
  background: '#FFFFFF',
}));

function SaveButtonDialog(props) {
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
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

SaveButtonDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  //   selectedValue: PropTypes.string.isRequired,
};

export default SaveButtonDialog;

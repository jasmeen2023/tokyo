import { PersonSearch } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import CancelIcon from '@mui/icons-material/Cancel';
import { styled, InputLabel } from '@mui/material';

const InputBoxes = styled(TableRow)(({ theme }) => ({
  background: '#FFFFFF',
}));

const InputBoxesField = styled(TableCell)(({ theme }) => ({}));

const InputName = styled(InputLabel)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '19px',
  color: '#000000',
}));

function RewardsDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth='md'>
      <DialogContent sx={{ background: '#FFF' }}>
        <Toolbar sx={{ mb: 1 }}>
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
            Invite
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
          <TableBody>
            <InputBoxes>
              <InputBoxesField>
                <InputName>Email</InputName>
              </InputBoxesField>
              <InputBoxesField>
                <TextField size='small' fullWidth></TextField>
              </InputBoxesField>
              <InputBoxesField>
                <InputName>Name</InputName>
              </InputBoxesField>
              <InputBoxesField>
                <TextField size='small' fullWidth></TextField>
              </InputBoxesField>
            </InputBoxes>
            <InputBoxes>
              <InputBoxesField>
                <InputName>Relationship Manager</InputName>
              </InputBoxesField>
              <InputBoxesField>
                <TextField
                  size='small'
                  fullWidth
                  placeholder='Assign BRM/PO'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position='start'
                        sx={{
                          padding: '16px 8px',
                          background: '#EEF7FE',
                          marginLeft: '-15px',
                        }}
                      >
                        <PersonSearch
                          sx={{
                            color: '#4B65B2',
                            borderColor: ' #4B65B2',
                            borderRadius: '50%',
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              </InputBoxesField>
              <InputBoxesField>
                <InputName>Mobile No.</InputName>
              </InputBoxesField>
              <InputBoxesField>
                <TextField size='small' fullWidth></TextField>
              </InputBoxesField>
            </InputBoxes>
          </TableBody>
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
            Save
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

RewardsDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  //   selectedValue: PropTypes.string.isRequired,
};

export default RewardsDialog;

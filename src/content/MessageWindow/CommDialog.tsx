import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { styled, InputLabel } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const InputBoxes = styled(TableRow)(({ theme }) => ({
  background: '#FFFFFF',
}));

const InputBoxesField = styled(TableCell)(({ theme }) => ({
  borderBottom: '2px dashed rgba(151, 151, 151, 0.5)',
}));

const InputName = styled(InputLabel)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  color: '#4B473E',
}));

function SimpleCommDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth='md'>
      <DialogContent sx={{ background: '#FFF' }}>
        <Toolbar>
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
            Communication Choices
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
                <InputName>Type</InputName>
              </InputBoxesField>
              <InputBoxesField>
                <InputName>Choose</InputName>
              </InputBoxesField>
              <InputBoxesField>
                <InputName></InputName>
              </InputBoxesField>
            </InputBoxes>
            <InputBoxes>
              <InputBoxesField>
                <InputName>Text</InputName>
              </InputBoxesField>
              <InputBoxesField>
                <RadioGroup>
                  <FormControlLabel value='' control={<Radio />} label='' />
                </RadioGroup>
              </InputBoxesField>
              <InputBoxesField>
                <TextField size='small' fullWidth></TextField>
              </InputBoxesField>
            </InputBoxes>
            <InputBoxes>
              <InputBoxesField>
                <InputName>Call</InputName>
              </InputBoxesField>
              <InputBoxesField>
                <RadioGroup>
                  <FormControlLabel value='' control={<Radio />} label='' />
                </RadioGroup>
              </InputBoxesField>
              <InputBoxesField>
                <TextField size='small' fullWidth></TextField>
              </InputBoxesField>
            </InputBoxes>
            <InputBoxes>
              <InputBoxesField>
                <InputName>Email</InputName>
              </InputBoxesField>
              <InputBoxesField>
                <RadioGroup>
                  <FormControlLabel value='' control={<Radio />} label='' />
                </RadioGroup>
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

SimpleCommDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  //   selectedValue: PropTypes.string.isRequired,
};

export default SimpleCommDialog;

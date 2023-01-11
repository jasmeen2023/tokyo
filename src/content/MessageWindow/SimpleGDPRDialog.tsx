import { CalendarMonth } from '@mui/icons-material';
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
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const InputBoxes = styled(TableRow)(({ theme }) => ({
  background: '#FFFFFF',
}));

const InputBoxesField = styled(TableCell)(({ theme }) => ({
  padding: 2,
}));

const InputName = styled(InputLabel)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '19px',
  color: '#000000',
}));

function SimpleGDPRDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth='md'>
      <DialogContent sx={{ background: '#FFF' }}>
        <Toolbar sx={{ mb: 4 }}>
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
            GDPR Policy
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
            my: 1,
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '26px',
            color: '#292D32',
          }}
        >
          Mention the date & time, and how you recieved the consent
        </Typography>

        <Table sx={{ background: '#FFF' }}>
          <InputBoxes>
            <InputBoxesField>
              <InputName sx={{ my: 1 }}>Consent given date</InputName>
              <TextField
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
                      <CalendarMonthIcon
                        sx={{
                          color: '#4B65B2',
                          borderColor: ' #4B65B2',
                          borderRadius: '50%',
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                size='small'
                fullWidth
              ></TextField>
            </InputBoxesField>
            <InputBoxesField>
              <InputName sx={{ my: 1 }}>Description</InputName>
              <TextField size='small' fullWidth></TextField>
            </InputBoxesField>
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
            Save
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

SimpleGDPRDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  //   selectedValue: PropTypes.string.isRequired,
};

export default SimpleGDPRDialog;

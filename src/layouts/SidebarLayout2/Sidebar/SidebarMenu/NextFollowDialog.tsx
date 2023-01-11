import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControlLabel,
  IconButton,
  InputAdornment,
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
import { PersonSearch } from '@mui/icons-material';

const InputBoxes = styled(TableRow)(({ theme }) => ({
  background: '#FFFFFF',
}));

const InputBoxesField = styled(TableCell)(({ theme }) => ({
  borderBottom: '2px dashed rgba(151, 151, 151, 0.5)',
}));

const InputBoxesField1 = styled(TableCell)(({ theme }) => ({}));

const InputName = styled(InputLabel)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '13px',
  lineHeight: '17px',
  textTransform: 'capitalize',
  color: '#4B473E',
}));

function NextFollowDialog(props) {
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
            Next Follow Up
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
            <InputBoxesField1>
              <InputName>Relationship Manager</InputName>
            </InputBoxesField1>
            <InputBoxesField1>
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
            </InputBoxesField1>
            <InputBoxesField1>
              <InputName>Mobile No.</InputName>
            </InputBoxesField1>
            <InputBoxesField1>
              <TextField size='small' fullWidth></TextField>
            </InputBoxesField1>
          </InputBoxes>

          <InputBoxes>
            <InputBoxesField1>
              <InputName>Note</InputName>
            </InputBoxesField1>
            <InputBoxesField1 colSpan={3}>
              <TextField
                fullWidth
                multiline
                InputProps={{
                  rows: 5,
                }}
              ></TextField>
            </InputBoxesField1>
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
            Submit
          </Button>
        </DialogActions>
        <Table sx={{ background: '#FFF' }}>
          <TableBody>
            <InputBoxes>
              <InputBoxesField>
                <InputName>Date & time</InputName>
              </InputBoxesField>
              <InputBoxesField>
                <InputName>Followup Summary</InputName>
              </InputBoxesField>
              <InputBoxesField>
                <InputName></InputName>
              </InputBoxesField>
            </InputBoxes>
            <InputBoxes>
              <InputBoxesField>
                <InputName>2 Sep’22 12:39 PM</InputName>
              </InputBoxesField>
              <InputBoxesField>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '175%',
                    color: '#232D42',
                  }}
                >
                  Duis proin eu sagittis fermentum eget pharetra libero augue
                  dui. Suscipit volutpat fames tincidunt.
                </Typography>
              </InputBoxesField>
            </InputBoxes>
            <InputBoxes>
              <InputBoxesField>
                <InputName>2 Sep’22 12:39 PM</InputName>
              </InputBoxesField>
              <InputBoxesField>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '175%',
                    color: '#232D42',
                  }}
                >
                  Duis proin eu sagittis fermentum eget pharetra libero augue
                  dui. Suscipit volutpat fames tincidunt.
                </Typography>
              </InputBoxesField>
            </InputBoxes>
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}

NextFollowDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  //   selectedValue: PropTypes.string.isRequired,
};

export default NextFollowDialog;

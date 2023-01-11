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
import { styled, InputLabel, Avatar } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { PersonSearch } from '@mui/icons-material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Image from 'next/image';
import ListItemText from '@mui/material/ListItemText';

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

function ApplicationStatusDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth='lg'>
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
            Application Status Change
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
              <TextField size='small' fullWidth placeholder='-'></TextField>
            </InputBoxesField1>
            <InputBoxesField1>
              <InputName>Mobile No.</InputName>
              <TextField size='small' fullWidth></TextField>
            </InputBoxesField1>
          </InputBoxes>

          <InputBoxes>
            <InputBoxesField1>
              <InputName>Note</InputName>
            </InputBoxesField1>
            <InputBoxesField1></InputBoxesField1>
          </InputBoxes>
          <InputBoxes>
            <InputBoxesField1 colSpan={1}>
              <TextField
                fullWidth
                multiline
                InputProps={{
                  rows: 5,
                }}
              ></TextField>
            </InputBoxesField1>
            <InputBoxesField1>
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
            </InputBoxesField1>
          </InputBoxes>
        </Table>

        <Table sx={{ background: '#FFF' }}>
          <TableBody>
            <InputBoxes>
              <InputBoxesField>
                <InputName>Status</InputName>
              </InputBoxesField>
              <InputBoxesField>
                <InputName>Updated By</InputName>
              </InputBoxesField>
              <InputBoxesField>
                <InputName>Internal Notes</InputName>
              </InputBoxesField>
              <InputBoxesField>
                <InputName>Customer Notes</InputName>
              </InputBoxesField>
            </InputBoxes>
            <InputBoxes>
              <InputBoxesField>
                <List>
                  <ListItem sx={{ padding: 0 }}>
                    <ListItemAvatar>
                      <Image
                        src='/images/Color.png'
                        width='42px'
                        height='42px'
                      />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ margin: 0 }}
                      primary='Elva'
                      secondary='Update by'
                    />
                  </ListItem>
                </List>
              </InputBoxesField>
              <InputBoxesField>
                <List>
                  <ListItem sx={{ padding: 0 }}>
                    <ListItemAvatar>
                      <Image
                        src='/images/Color.png'
                        width='42px'
                        height='42px'
                      />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ margin: 0 }}
                      primary='Elva'
                      secondary='Update by'
                    />
                  </ListItem>
                </List>
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

ApplicationStatusDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  //   selectedValue: PropTypes.string.isRequired,
};

export default ApplicationStatusDialog;

import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  DialogActions,
  DialogContent,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextareaAutosize,
  TextField,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { useState } from 'react';

import PageTitle from '@/components/PageTitle';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';
import { DeleteOutline, HelpOutline } from '@mui/icons-material';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { classes } from 'http-status';

// const emails = ['username@gmail.com', 'user02@gmail.com'];

export function SimpleDialog(props) {
  const { onClose, open } = props;

  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleClose = () => {
    onClose();
  };

  //   const handleListItemClick = (value) => {
  //     onClose(value);
  //   };

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
        Application Status Change
      </DialogTitle>
      <DialogContent sx={{ background: '#FFF' }}>
        <Grid
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Grid item sx={{ paddingX: 0.5 }}>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '19px',
                textTransform: 'capitalize',
                color: '#000000',
                marginY: 0.5,
              }}
            >
              Change Status{' '}
              <IconButton>
                <HelpOutline sx={{ color: ' #0460A9' }} />
              </IconButton>
            </Typography>

            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>
                Awaiting Further Information{' '}
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={age}
                label='Awaiting Further Information '
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sx={{ paddingX: 0.5 }}>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '19px',
                textTransform: 'capitalize',
                color: '#000000',
                marginY: 0.5,
              }}
            >
              Internal Notes
            </Typography>
            <TextField sx={{ width: '390px' }} placeholder='-'></TextField>
          </Grid>
        </Grid>
        <Grid container my={2}>
          <Grid item>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '19px',
                textTransform: 'capitalize',
                color: '#000000',
                my: 1,
              }}
            >
              Customer Notes
            </Typography>
            <TextField
              sx={{ width: '450px' }}
              fullWidth
              placeholder='-'
            ></TextField>
            <Button
              size='large'
              sx={{
                background:
                  'linear-gradient(91.88deg, #4B65B2 2.83%, #13BBE6 100%)',
                borderRadius: '5px',
                marginX: 1,
                color: '#FFF',
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>

        <Table
          sx={{
            background: '#FFF',
            borderTop: '1px dashed #C4C4C4',
            borderBottom: '1px dashed #C4C4C4',
          }}
        >
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 700,
                  fontSize: '13px',
                  lineHeight: '17px',
                  textTransform: 'capitalize',
                  color: '#4B473E',
                }}
              >
                Status
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 700,
                  fontSize: '13px',
                  lineHeight: '17px',
                  textTransform: 'capitalize',
                  color: '#4B473E',
                }}
              >
                Updated By
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 700,
                  fontSize: '13px',
                  lineHeight: '17px',
                  textTransform: 'capitalize',
                  color: '#4B473E',
                }}
              >
                Internal Notes
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 700,
                  fontSize: '13px',
                  lineHeight: '17px',
                  textTransform: 'capitalize',
                  color: '#4B473E',
                }}
              >
                Customer Notes
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <List
                  sx={{
                    bgcolor: 'background.paper',
                  }}
                >
                  <ListItem>
                    <ListItemText
                      primary='Post Offer Processing'
                      secondary='21 Sep’22 12:39 PM'
                    />
                  </ListItem>
                </List>
              </TableCell>
              <TableCell>
                <List
                  sx={{
                    bgcolor: 'background.paper',
                  }}
                >
                  <ListItem>
                    <ListItemAvatar>
                      <Image
                        src='/images/Color.png'
                        width='40px'
                        height='40px'
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary='Glenn Cannon'
                      secondary='Relationship Manager'
                    />
                  </ListItem>
                </List>
              </TableCell>
              <TableCell>
                <Typography
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '175%',
                    color: '#232D42',
                  }}
                >
                  Duis proin eu sagittis fermentum eget pharetra libero augue
                  dui. Suscipit
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '175%',
                    color: '#232D42',
                  }}
                >
                  Duis proin eu sagittis fermentum eget pharetra libero augue
                  dui. Suscipit
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>

      <DialogActions sx={{ background: '#FFF' }}>
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
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  //   selectedValue: PropTypes.string.isRequired,
};

function AppStatusChangeDialog() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <Container maxWidth='lg'>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='stretch'
          spacing={3}
        >
          <Grid item xs={12}>
            <Button variant='outlined' onClick={handleClickOpen}>
              Application STatus change
            </Button>
            <SimpleDialog
              //   selectedValue={selectedValue}
              open={open}
              onClose={handleClose}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AppStatusChangeDialog;

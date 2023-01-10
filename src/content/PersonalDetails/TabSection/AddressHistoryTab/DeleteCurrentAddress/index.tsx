import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  DialogActions,
  DialogContent,
  Divider,
  Grid,
  IconButton,
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
import { DeleteOutline } from '@mui/icons-material';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

// const emails = ['username@gmail.com', 'user02@gmail.com'];

export function SimpleDialog(props) {
  const { onClose, open } = props;

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
          textAlign: 'center',
        }}
      >
        Delete Current Address
      </DialogTitle>
      <IconButton>
        <DeleteOutline sx={{ fontSize: '4.5em', color: ' #FF725E' }} />
      </IconButton>
      <DialogContent
        sx={{
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '24px',
          textAlign: 'center',
          color: '#263238',
        }}
      >
        Are you sure do you want to delete your current address?
      </DialogContent>
      <DialogActions>
        <Button
          sx={{
            background:
              'linear-gradient(91.88deg, #4B65B2 2.83%, #13BBE6 100%)',
            borderRadius: '5px',

            color: '#FFF',
          }}
        >
          Yes, Delete
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
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  //   selectedValue: PropTypes.string.isRequired,
};

function DeleteCurrentAddress() {
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
            <Button
              variant='outlined'
              onClick={handleClickOpen}
              sx={{ color: '#FFF' }}
            >
              Open simple dialog
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

export default DeleteCurrentAddress;

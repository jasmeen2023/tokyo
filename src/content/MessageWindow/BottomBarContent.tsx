import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import {
  Avatar,
  Box,
  Button,
  DialogActions,
  DialogContent,
  IconButton,
  InputBase,
  styled,
  TextareaAutosize,
  TextArea,
  Tooltip,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

const MessageInputWrapper = styled(InputBase)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(18)};
    padding: ${theme.spacing(1)};
    width: 100%;
`
);

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
        }}
      >
        Explain the purpose of this message
      </DialogTitle>
      <DialogContent>
        <InputBoxes
          minRows={10}
          style={{ width: 550 }}
          sx={{
            borderRadius: '4px',
          }}
        ></InputBoxes>
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
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  //   selectedValue: PropTypes.string.isRequired,
};

function BottomBarContent() {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg',
  };

  return (
    <Box
      sx={{
        //background: theme.colors.alpha.white[50],
        background: '#FFF',
        display: 'flex',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Box flexGrow={1} display='flex' alignItems='center'>
        <Avatar
          sx={{ display: { xs: 'none', sm: 'flex' }, mr: 1 }}
          alt={user.name}
          src={user.avatar}
        />
        <MessageInputWrapper
          autoFocus
          placeholder='Write your message here...'
          fullWidth
        />
      </Box>
      <Box>
        <Tooltip arrow placement='top' title='Choose an emoji'>
          <IconButton
            sx={{ fontSize: theme.typography.pxToRem(16) }}
            color='primary'
          >
            😀
          </IconButton>
        </Tooltip>
        <Input accept='image/*' id='messenger-upload-file' type='file' />
        <Tooltip arrow placement='top' title='Attach a file'>
          <label htmlFor='messenger-upload-file'>
            <IconButton sx={{ mx: 1 }} color='primary' component='span'>
              <AttachFileTwoToneIcon fontSize='small' />
            </IconButton>
          </label>
        </Tooltip>

        <Button
          startIcon={<SendTwoToneIcon />}
          onClick={handleClickOpen}
          variant='contained'
          sx={{
            background:
              'linear-gradient(90.07deg, #4B65B2 17.96%, #13BBE6 90.09%)',
            borderRadius: '8px',
            color: '#FFF',
          }}
        >
          Send
        </Button>
        <SimpleDialog
          //   selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
      </Box>
    </Box>
  );
}

export default BottomBarContent;

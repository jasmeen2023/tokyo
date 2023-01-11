import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputBase,
  styled,
  TextareaAutosize,
  Tooltip,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import SaveButtonDialog from './SaveButtonDialog';

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

function BottomBarContent() {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
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
        <SaveButtonDialog open={open} onClose={handleClose} />
      </Box>
    </Box>
  );
}

export default BottomBarContent;

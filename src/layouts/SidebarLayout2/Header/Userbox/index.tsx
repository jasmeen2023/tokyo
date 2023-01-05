import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Hidden,
  lighten,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAtom } from 'jotai';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { useCookies } from 'react-cookie';

import { userAtom } from '@/store/user';

const UserBoxButton = styled(Button)(
  ({ theme }) => `
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`
);

const MenuUserBox = styled(Box)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        padding: ${theme.spacing(2)};
`
);

const UserBoxText = styled(Box)(
  ({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`
);

const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        font-size: 13px;
        color: ${theme.palette.secondary.main};
        display: block;
`
);

const UserBoxDescription = styled(Typography)(
  ({ theme }) => `
        color: ${lighten(theme.palette.secondary.main, 0.5)};
        font-size: 10px;
`
);

const UserAvatar = styled(Avatar)(
  ({ theme }) => `
      width: ${theme.spacing(3.5)};
      height: ${theme.spacing(3.5)};
`
);

function HeaderUserbox() {
  const [cookies, setCookies, removeCookie] = useCookies();
  const [user, setUser] = useAtom(userAtom);
  const router = useRouter();

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <UserBoxButton color='secondary' ref={ref} onClick={handleOpen}>
        <UserAvatar variant='rounded' alt={user?.name} />
        <Hidden mdDown>
          <UserBoxText>
            <UserBoxLabel>{user?.name}</UserBoxLabel>
            <UserBoxDescription variant='body2'>
              {user?.role}
            </UserBoxDescription>
          </UserBoxText>
        </Hidden>
        <Hidden smDown>
          <ExpandMoreTwoToneIcon sx={{ ml: 1 }} />
        </Hidden>
      </UserBoxButton>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuUserBox sx={{ minWidth: 210 }} display='flex'>
          <Avatar variant='rounded' alt={user?.name} />
          <UserBoxText>
            <UserBoxLabel variant='body1'>{user?.name}</UserBoxLabel>
            <UserBoxDescription variant='body2'>
              {user?.role}
            </UserBoxDescription>
          </UserBoxText>
        </MenuUserBox>
        <Divider sx={{ mb: 0 }} />
        <List sx={{ p: 1 }} component='nav'>
          <NextLink href='/management/profile' passHref>
            <ListItem button>
              <AccountBoxTwoToneIcon fontSize='small' />
              <ListItemText primary='My Profile' />
            </ListItem>
          </NextLink>
          {/* <NextLink href='/applications/messenger' passHref>
            <ListItem button>
              <InboxTwoToneIcon fontSize='small' />
              <ListItemText primary='Messenger' />
            </ListItem>
          </NextLink> */}
          <NextLink href='/management/profile/settings' passHref>
            <ListItem button>
              <AccountTreeTwoToneIcon fontSize='small' />
              <ListItemText primary='Account Settings' />
            </ListItem>
          </NextLink>
        </List>
        <Divider />
        <Box sx={{ m: 1 }}>
          <Button
            color='primary'
            onClick={() => {
              removeCookie('refreshToken', { path: '/' });
              removeCookie('accessToken', { path: '/' });
              router.reload();
            }}
            fullWidth
          >
            <LockOpenTwoToneIcon sx={{ mr: 1 }} />
            Sign out
          </Button>
        </Box>
      </Popover>
    </>
  );
}

export default HeaderUserbox;

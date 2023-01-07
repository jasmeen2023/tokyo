import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  styled,
  useTheme,
} from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';

import Scrollbar from '@/components/Scrollbar';

import BottomBarContent from '@/content/Applications/Messenger/BottomBarContent';
import ChatContent from '@/content/Applications/Messenger/ChatContent';
import SidebarContent from '@/content/Applications/Messenger/SidebarContent';
import TopBarContent from '@/content/Applications/Messenger/TopBarContent';
import SidebarLayout from '@/layouts/SidebarLayout';
import SidebarLayout2 from '@/layouts/SidebarLayout2';

const RootWrapper = styled(Box)(
  ({ theme }) => `
       height: calc(100vh - ${theme.header.height});
       display: flex;
       background: white;
       
`
);

const Sidebar = styled(Box)(
  ({ theme }) => `
        width: 300px;
        background: ${theme.colors.alpha.white[100]};
        border-right: ${theme.colors.alpha.black[10]} solid 1px;
`
);

const ChatWindow = styled(Box)(
  () => `
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex: 1;
`
);

const ChatTopBar = styled(Box)(
  ({ theme }) => `
       background: '#F6F7F8';
        border-bottom: ${theme.colors.alpha.black[10]} solid 1px;
        padding: ${theme.spacing(2)};
        align-items: center;
`
);

const IconButtonToggle = styled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(4)};
  height: ${theme.spacing(4)};
  background: ${theme.colors.alpha.white[100]};
`
);

const DrawerWrapperMobile = styled(Drawer)(
  () => `
    width: 340px;
    flex-shrink: 0;

  & > .MuiPaper-root {
        width: 340px;
        z-index: 3;
  }
`
);

function ChatMessenger() {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <RootWrapper className='Mui-FixedWrapper' sx={{ margin: '20px' }}>
        <ChatWindow>
          <ChatTopBar
            sx={{
              display: {
                xs: 'flex',
                lg: 'inline-block',
              },
            }}
          >
            <IconButtonToggle
              sx={{
                display: { lg: 'none', xs: 'flex' },
                mr: 2,
              }}
              color='primary'
              onClick={handleDrawerToggle}
              size='small'
            >
              <MenuTwoToneIcon />
            </IconButtonToggle>
            <TopBarContent />
          </ChatTopBar>
          <Box flex={1}>
            <Scrollbar>
              <ChatContent />
            </Scrollbar>
          </Box>
          <Divider />
          <BottomBarContent />
        </ChatWindow>
      </RootWrapper>
    </>
  );
}

ChatMessenger.getLayout = (page) => <SidebarLayout2>{page}</SidebarLayout2>;

export default ChatMessenger;

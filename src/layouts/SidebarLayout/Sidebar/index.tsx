import { Box, darken, Divider, Drawer, styled, useTheme } from '@mui/material';
import { useAtom } from 'jotai';
import { useContext } from 'react';

import Logo from '@/components/LogoSign';
import LogoIcon from '@/components/LogoSign/LogoIcon';
import Scrollbar from '@/components/Scrollbar';

import { collapsedAtom } from '@/store/sideBar';

import { SidebarContext } from '@/contexts/SidebarContext';

import SidebarMenu from './SidebarMenu';

function Sidebar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const [collapsed, setCollapsed] = useAtom(collapsedAtom);
  const theme = useTheme<any>();

  const SidebarWrapper = styled(Box)(
    ({ theme }) => `
        width: ${collapsed ? theme.sidebar.width : '0px'};
        min-width: ${collapsed ? theme.sidebar.width : '80px'};
        color: ${theme.colors.alpha.trueWhite[70]};
        position: relative;
        z-index: 4;
        height: 100%;
        padding-bottom: 68px;
`
  );

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: 'none',
            lg: 'inline-block',
          },
          position: 'fixed',
          left: 0,
          top: 0,
          background:
            theme.palette.mode === 'dark'
              ? theme.colors.gradients.blue4
              : darken(theme.colors.alpha.black[100], 0.5),
          boxShadow:
            theme.palette.mode === 'dark' ? theme.sidebar.boxShadow : 'none',
        }}
      >
        <Scrollbar>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            mt={2}
          >
            <LogoIcon />
          </Box>
          <Divider
            sx={{
              mt: theme.spacing(2),
              mx: theme.spacing(2),
              background: theme.colors.alpha.trueWhite[10],
            }}
          />
          <SidebarMenu />
        </Scrollbar>
        <Divider
          sx={{
            background: theme.colors.alpha.trueWhite[10],
          }}
        />
        {/* <Box p={2}>
          <Button
            href='https://bloomui.com'
            target='_blank'
            rel='noopener noreferrer'
            variant='contained'
            color='success'
            size='small'
            fullWidth
          >
            Upgrade to PRO
          </Button>
        </Box> */}
      </SidebarWrapper>
      <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`,
        }}
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant='temporary'
        elevation={9}
      >
        <SidebarWrapper
          sx={{
            background:
              theme.palette.mode === 'dark'
                ? theme.colors.alpha.white[100]
                : darken(theme.colors.alpha.black[100], 0.5),
          }}
        >
          <Scrollbar>
            <Box mt={3}>
              <Box
                mx={2}
                sx={
                  {
                    // width: 52,
                  }
                }
              >
                <Logo />
              </Box>
            </Box>
            <Divider
              sx={{
                mt: theme.spacing(3),
                mx: theme.spacing(2),
                background: theme.colors.alpha.trueWhite[10],
              }}
            />
            <SidebarMenu />
          </Scrollbar>
        </SidebarWrapper>
      </Drawer>
    </>
  );
}

export default Sidebar;

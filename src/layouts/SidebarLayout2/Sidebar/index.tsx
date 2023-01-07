import { Box, darken, Divider, Drawer, styled, useTheme } from '@mui/material';
import { useAtom } from 'jotai';
import { useContext } from 'react';
import Scrollbar from '@/components/Scrollbar';
import { collapsedAtom } from '@/store/sideBar';
import { SidebarContext } from '@/contexts/SidebarContext';
import SidebarMenu2 from './SidebarMenu';

function Sidebar2() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const [collapsed, setCollapsed] = useAtom(collapsedAtom);
  const theme = useTheme<any>();

  const SidebarWrapper2 = styled(Box)(
    ({ theme }) => `
        width: ${collapsed ? theme.sidebar.width : '0px'};
        min-width: ${'350px'};
        color: ${theme.colors.alpha.trueWhite[70]};
        position: relative;
        top: ${theme.header.height};
        z-index: 0;
        height: 100%;
        padding-bottom: 68px;
`
  );

  return (
    <>
      <SidebarWrapper2
        sx={{
          display: {
            xs: 'none',
            lg: 'inline-block',
          },
          position: 'fixed',
          left: 0,
          top: '50px',
          // background:
          //   theme.palette.mode === 'dark'
          //     ? theme.colors.gradients.blue4
          //     : darken(theme.colors.alpha.black[100], 0.5),
          // boxShadow:
          //   theme.palette.mode === 'dark' ? theme.sidebar.boxShadow : 'none',
        }}
      >
        <Scrollbar>
          <SidebarMenu2 />
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
      </SidebarWrapper2>
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
        <SidebarWrapper2
          sx={{
            background:
              theme.palette.mode === 'dark'
                ? theme.colors.alpha.white[100]
                : darken(theme.colors.alpha.black[100], 0.5),
          }}
        >
          <Scrollbar>
            {/* <Box mt={3}>
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
            </Box> */}
            <Divider
              sx={{
                mt: theme.spacing(3),
                mx: theme.spacing(2),
                background: theme.colors.alpha.trueWhite[10],
              }}
            />
            <SidebarMenu2 />
          </Scrollbar>
        </SidebarWrapper2>
      </Drawer>
    </>
  );
}

export default Sidebar2;

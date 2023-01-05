import {
  alpha,
  Box,
  Container,
  lighten,
  Typography,
  useTheme,
} from '@mui/material';
import { useAtom } from 'jotai';
import PropTypes from 'prop-types';
import { FC, ReactNode } from 'react';

import Link from '@/components/Link';

import { collapsedAtom } from '@/store/sideBar';

import Header from './Header';
import Sidebar from './Sidebar';

interface SidebarLayoutProps {
  children?: ReactNode;
}

const SidebarLayout: FC<SidebarLayoutProps> = ({ children }) => {
  const [collapsed] = useAtom(collapsedAtom);
  const theme = useTheme();

  const breadcrumbs = [
    <Link
      underline='hover'
      key='1'
      color='inherit'
      href='/'
      onClick={undefined}
    >
      MUI
    </Link>,
    <Link
      underline='hover'
      key='2'
      color='inherit'
      href='/material-ui/getting-started/installation/'
      onClick={undefined}
    >
      Core
    </Link>,
    <Typography key='3' color='text.primary'>
      Breadcrumb
    </Typography>,
  ];

  return (
    <>
      <Box
        sx={{
          flex: 1,
          height: '100%',

          '.MuiPageTitle-wrapper': {
            background:
              theme.palette.mode === 'dark'
                ? theme.colors.secondary
                : theme.colors.secondary,
            marginBottom: `${theme.spacing(4)}`,
            boxShadow:
              theme.palette.mode === 'dark'
                ? `0 1px 0 ${alpha(
                    lighten(theme.colors.primary.main, 0.7),
                    0.15
                  )}, 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)`
                : `0px 2px 4px -3px ${alpha(
                    theme.colors.alpha.black[100],
                    0.1
                  )}, 0px 5px 12px -4px ${alpha(
                    theme.colors.alpha.black[100],
                    0.05
                  )}`,
          },
        }}
      >
        <Header />
        <Sidebar />
        <Box
          sx={{
            position: 'relative',
            zIndex: 5,
            mt: 3,
            display: 'block',
            pt: `${theme.header.height}`,
            [theme.breakpoints.up('lg')]: {
              ml: `${collapsed ? theme.sidebar.width : '80px'}`,
            },
          }}
        >
          <Container maxWidth='lg'>
            {/* <Breadcrumbs
              separator={<NavigateNext fontSize='small' />}
              aria-label='breadcrumb'
            >
              {breadcrumbs}
            </Breadcrumbs> */}
          </Container>
        </Box>

        <Box
          sx={{
            position: 'relative',
            zIndex: 5,
            mt: 3,
            display: 'block',
            flex: 1,
            [theme.breakpoints.up('lg')]: {
              ml: `${collapsed ? theme.sidebar.width : '80px'}`,
            },
          }}
        >
          <Box display='block'>{children}</Box>
        </Box>
      </Box>
    </>
  );
};

SidebarLayout.propTypes = {
  children: PropTypes.node,
};

export default SidebarLayout;

import {
  ArrowForward,
  BorderColor,
  Download,
  LabelImportant,
} from '@mui/icons-material';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import MenuIcon from '@mui/icons-material/Menu';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CancelIcon from '@mui/icons-material/Cancel';
import {
  alpha,
  Avatar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { useAtom } from 'jotai';
import { useContext } from 'react';

import { collapsedAtom } from '@/store/sideBar';

import { SidebarContext } from '@/contexts/SidebarContext';
import { colors } from '@/theme/schemes/DarkSpacesTheme';

import HeaderButtons from './Buttons';
import HeaderUserbox from './Userbox';
import Label from '@/components/Label';

function Header() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const [collapsed, setCollapsed] = useAtom(collapsedAtom);
  const theme = useTheme();

  const HeaderWrapper = styled(Box)(
    ({ theme }: any) => `
          height: ${theme.header.height};
          color: ${theme.header.textColor};
          padding: ${theme.spacing(0, 2)};
          
          right: 0;
          z-index: 1;
          background-color: ${alpha(colors.alpha.trueWhite[100], 0.95)};
          backdrop-filter: blur(3px);
          position: fixed;
          justify-content: space-between;
          width: 100%;
          @media (min-width: ${theme.breakpoints.values.lg}px) {
              left: ${'0'};
              width: auto;
          }
  `
  );

  return (
    <HeaderWrapper
      display='flex'
      alignItems='center'
      sx={{
        boxShadow:
          theme.palette.mode === 'dark'
            ? `0 1px 0 ${alpha(
                theme.colors.primary.main,
                0.15
              )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
            : `0px 2px 8px -3px ${alpha(
                theme.colors.alpha.black[100],
                0.2
              )}, 0px 5px 22px -4px ${alpha(
                theme.colors.alpha.black[100],
                0.1
              )}`,
        background: 'linear-gradient(90.07deg, #4B65B2 0%, #13BBE6 98.75%)',
        color: '#FFF',
      }}
    >
      <Box display='flex' alignItems='center'>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={() => setCollapsed((prev) => !prev)}
          edge='start'
          sx={{
            marginRight: 5,
            ...(collapsed && { display: 'none' }),
          }}
        >
          <MenuIcon fontSize='small' />
        </IconButton>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={() => setCollapsed((prev) => !prev)}
          edge='start'
          sx={{
            marginRight: 5,
            ...(!collapsed && { display: 'none' }),
          }}
        >
          <CancelIcon />
        </IconButton>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '29px',
            color: '#FFFFFF',
          }}
        >
          Case ID - 341543
        </Typography>
        <Typography
          sx={{
            background: '#8AE034',
            borderRadius: '40px',
            marginX: 2,
            padding: '5px 12px',
          }}
        >
          Pre Offer Processing
        </Typography>
      </Box>

      <Box display='flex' alignItems='center'>
        <List
        // sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems='flex-start' sx={{ color: '#FFF' }}>
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src='/images/Color.png' />
            </ListItemAvatar>
            <ListItemText
              primary='Applicant Name'
              secondary={
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='#FFF'
                >
                  Radhika Dhonwale
                </Typography>
              }
            />
          </ListItem>
        </List>
        <Button
          sx={{
            border: '1.5px solid #FFFFFF',
            borderRadius: '4px',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '19px',
            color: '#FFFFFF',

            padding: '0 12px',
            marginX: 2,
          }}
        >
          <IconButton>
            <Download sx={{ color: '#FFF' }} />
          </IconButton>
          Download
        </Button>
        <Button
          sx={{
            border: '1.5px solid #FFFFFF',
            borderRadius: '4px',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '19px',
            background: '#FFFFFF',
            padding: '0 12px',
            marginX: 2,
          }}
        >
          <IconButton>
            <BorderColor />
          </IconButton>
          Edit
        </Button>
        {/* <Box
          component='span'
          sx={{
            ml: 2,
            display: { lg: 'none', xs: 'inline-block' },
          }}
        >
          <Tooltip arrow title='Toggle Menu'>
            <IconButton color='primary' onClick={toggleSidebar}>
              {!sidebarToggle ? (
                <MenuTwoToneIcon fontSize='small' />
              ) : (
                <CloseTwoToneIcon fontSize='small' />
              )}
            </IconButton>
          </Tooltip>
        </Box> */}
      </Box>
    </HeaderWrapper>
  );
}

export default Header;

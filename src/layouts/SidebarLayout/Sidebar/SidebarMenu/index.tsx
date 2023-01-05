import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import { alpha, Box, Button, List, ListItem, styled } from '@mui/material';
import { useAtom } from 'jotai';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import { collapsedAtom } from '@/store/sideBar';
import { userAtom } from '@/store/user';

import { SidebarContext } from '@/contexts/SidebarContext';

import Diagram from '~/assets/svg/sidebar/diagram.svg';
import PeopleSvg from '~/assets/svg/sidebar/people.svg';
import Report from '~/assets/svg/sidebar/report.svg';
import Task from '~/assets/svg/sidebar/task.svg';
const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {


      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {


          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {

          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {


          .MuiBadge-root {
            position: absolute;

          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  'transform',
                  'opacity',
                ])};

                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
              }

              &.active,
              &:hover {

                &:before {

                  opacity: 100;
                }
              }
            }
          }
        }
      }
    }
`
);

function SidebarMenu() {
  const { closeSidebar, getMenu } = useContext(SidebarContext);
  const [collapsed, setCollapsed] = useAtom(collapsedAtom);
  const [user, setUser] = useAtom(userAtom);
  const router = useRouter();
  const currentRoute = router.pathname;
  const menu = getMenu();

  return (
    <MenuWrapper>
      {/* <List component='div'>
        <SubMenuWrapper>
          <List component='div'>
            <ListItem component='div'>
              <NextLink href='/' passHref>
                <Button
                  className={currentRoute === '="/' ? 'active' : ''}
                  disableRipple
                  component='a'
                  onClick={closeSidebar}
                  startIcon={<DesignServicesTwoTone />}
                >
                  Overview
                </Button>
              </NextLink>
            </ListItem>
          </List>
        </SubMenuWrapper>
      </List> */}
      <List
        component='div'
        // subheader={
        //   <ListSubheader component='div' disableSticky>
        //     Dashboards
        //   </ListSubheader>
        // }
      >
        <SubMenuWrapper>
          <List component='div'>
            {/* <ListItem component='div'>
              <NextLink href={route.path} passHref>
                <Button
                  className={currentRoute === route.path ? 'active' : ''}
                  disableRipple
                  component='a'
                  onClick={closeSidebar}
                  startIcon={<BrightnessLowTwoToneIcon />}
                >
                  {collapsed ? route.title : ''}
                </Button>
              </NextLink>
            </ListItem> */}
            {menu
              ?.find((route) => route.path === '/')
              ?.access.includes(user?.role as string) && (
              <ListItem component='div'>
                <NextLink href='/' passHref>
                  <Button
                    className={currentRoute === '/' ? 'active' : ''}
                    disableRipple
                    component='a'
                    onClick={closeSidebar}
                    startIcon={<Diagram />}
                  >
                    {collapsed ? 'Dashboard' : ''}
                  </Button>
                </NextLink>
              </ListItem>
            )}
            {menu
              ?.find((route) => route.path === '/cases')
              ?.access.includes(user?.role as string) && (
              <ListItem component='div'>
                <NextLink href='/cases' passHref>
                  <Button
                    className={currentRoute === '/cases' ? 'active' : ''}
                    disableRipple
                    component='a'
                    onClick={closeSidebar}
                    startIcon={<Report />}
                  >
                    {collapsed ? 'Cases' : ''}
                  </Button>
                </NextLink>
              </ListItem>
            )}
            {menu
              ?.find((route) => route.path === '/task')
              ?.access.includes(user?.role as string) && (
              <ListItem component='div'>
                <NextLink href='/task' passHref>
                  <Button
                    className={currentRoute === '/task' ? 'active' : ''}
                    disableRipple
                    component='a'
                    onClick={closeSidebar}
                    startIcon={<Task />}
                  >
                    {collapsed ? 'Task' : ''}
                  </Button>
                </NextLink>
              </ListItem>
            )}
            {menu
              ?.find((route) => route.path === '/rewards')
              ?.access.includes(user?.role as string) && (
              <ListItem component='div'>
                <NextLink href='/rewards' passHref>
                  <Button
                    className={currentRoute === '/rewards' ? 'active' : ''}
                    disableRipple
                    component='a'
                    onClick={closeSidebar}
                    startIcon={<PeopleSvg />}
                  >
                    {collapsed ? 'Rewards' : ''}
                  </Button>
                </NextLink>
              </ListItem>
            )}
            {menu
              ?.find((route) => route.path === '/fieldagents')
              ?.access.includes(user?.role as string) && (
              <ListItem component='div'>
                <NextLink href='/fieldagents' passHref>
                  <Button
                    className={currentRoute === '/fieldagents' ? 'active' : ''}
                    disableRipple
                    component='a'
                    onClick={closeSidebar}
                    startIcon={<MmsTwoToneIcon />}
                  >
                    {collapsed ? 'Field Agents' : ''}
                  </Button>
                </NextLink>
              </ListItem>
            )}
          </List>
        </SubMenuWrapper>
      </List>
      {/* <List
          component='div'
          // subheader={
          //   <ListSubheader component='div' disableSticky>
          //     Management
          //   </ListSubheader>
          // }
        >
          <SubMenuWrapper>
            <List component='div'>
              <ListItem component='div'>
                <NextLink href='/management/transactions' passHref>
                  <Button
                    className={
                      currentRoute === '/management/transactions'
                        ? 'active'
                        : ''
                    }
                    disableRipple
                    component='a'
                    onClick={closeSidebar}
                    startIcon={<TableChartTwoToneIcon />}
                  >
                    {collapsed ? 'Transactions List' : ''}
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List> */}
      <List
        component='div'
        // subheader={
        //   <ListSubheader component='div' disableSticky>
        //     Accounts
        //   </ListSubheader>
        // }
      >
        {/* <SubMenuWrapper>
            <List component='div'>
              <ListItem component='div'>
                <NextLink href='/management/profile' passHref>
                  <Button
                    className={
                      currentRoute === '/management/profile' ? 'active' : ''
                    }
                    disableRipple
                    component='a'
                    onClick={closeSidebar}
                    startIcon={<AccountCircleTwoToneIcon />}
                  >
                    {collapsed ? 'User Profile' : ''}
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component='div'>
                <NextLink href='/management/profile/settings' passHref>
                  <Button
                    className={
                      currentRoute === '/management/profile/settings'
                        ? 'active'
                        : ''
                    }
                    disableRipple
                    component='a'
                    onClick={closeSidebar}
                    startIcon={<DisplaySettingsTwoToneIcon />}
                  >
                    {collapsed ? 'Account Settings' : ''}
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper> */}
      </List>
      <List
        component='div'
        // subheader={
        //   <ListSubheader component='div' disableSticky>
        //     Components
        //   </ListSubheader>
        // }
      >
        {/* <SubMenuWrapper>
            <List component='div'>
              <ListItem component='div'>
                <NextLink href='/components/buttons' passHref>
                  <Button
                    className={
                      currentRoute === '/components/buttons' ? 'active' : ''
                    }
                    disableRipple
                    component='a'
                    onClick={closeSidebar}
                    startIcon={<BallotTwoToneIcon />}
                  >
                    {collapsed ? 'Buttons' : ''}
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component='div'>
                <NextLink href='/components/modals' passHref>
                  <Button
                    className={
                      currentRoute === '/components/modals' ? 'active' : ''
                    }
                    disableRipple
                    component='a'
                    onClick={closeSidebar}
                    startIcon={<BeachAccessTwoToneIcon />}
                  >
                    {collapsed ? 'Modals' : ''}
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component='div'>
                <NextLink href='/components/accordions' passHref>
                  <Button
                    className={
                      currentRoute === '/components/accordions' ? 'active' : ''
                    }
                    disableRipple
                    component='a'
                    onClick={closeSidebar}
                    startIcon={<EmojiEventsTwoToneIcon />}
                  >
                    {collapsed ? 'Accordions' : ''}
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component='div'>
                <NextLink href='/components/tabs' passHref>
                  <Button
                    className={
                      currentRoute === '/components/tabs' ? 'active' : ''
                    }
                    disableRipple
                    component='a'
                    onClick={closeSidebar}
                    startIcon={<FilterVintageTwoToneIcon />}
                  >
                    {collapsed ? 'Tabs' : ''}
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component='div'>
                <NextLink href='/components/badges' passHref>
                  <Button
                    className={
                      currentRoute === '/components/badges' ? 'active' : ''
                    }
                    disableRipple
                    component='a'
                    onClick={closeSidebar}
                    startIcon={<HowToVoteTwoToneIcon />}
                  >
                    {collapsed ? 'Badges' : ''}
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component='div'>
                <NextLink href='/components/tooltips' passHref>
                  <Button
                    className={
                      currentRoute === '/components/tooltips' ? 'active' : ''
                    }
                    disableRipple
                    component='a'
                    onClick={closeSidebar}
                    startIcon={<LocalPharmacyTwoToneIcon />}
                  >
                    {collapsed ? 'Tooltips' : ''}
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component='div'>
                <NextLink href='/components/avatars' passHref>
                  <Button
                    className={
                      currentRoute === '/components/avatars' ? 'active' : ''
                    }
                    disableRipple
                    component='a'
                    onClick={closeSidebar}
                    startIcon={<RedeemTwoToneIcon />}
                  >
                    {collapsed ? 'Avatars' : ''}
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component='div'>
                <NextLink href='/components/cards' passHref>
                  <Button
                    className={
                      currentRoute === '/components/cards' ? 'active' : ''
                    }
                    disableRipple
                    component='a'
                    onClick={closeSidebar}
                    startIcon={<SettingsTwoToneIcon />}
                  >
                    {collapsed ? 'Cards' : ''}
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component='div'>
                <NextLink href='/components/forms' passHref>
                  <Button
                    className={
                      currentRoute === '/components/forms' ? 'active' : ''
                    }
                    disableRipple
                    component='a'
                    onClick={closeSidebar}
                    startIcon={<TrafficTwoToneIcon />}
                  >
                    {collapsed ? 'Forms' : ''}
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper> */}
      </List>
      <List
        component='div'
        // subheader={
        //   <ListSubheader component='div' disableSticky>
        //     Extra Pages
        //   </ListSubheader>
        // }
      >
        {/* <SubMenuWrapper>
            <List component='div'>
              <ListItem component='div'>
                <NextLink href='/status/404' passHref>
                  <Button
                    className={currentRoute === '/status/404' ? 'active' : ''}
                    disableRipple
                    component='a'
                    onClick={closeSidebar}
                    startIcon={<CheckBoxTwoToneIcon />}
                  >
                    {collapsed ? 'Error 404' : ''}
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component='div'>
                <NextLink href='/status/500' passHref>
                  <Button
                    className={currentRoute === '/status/500' ? 'active' : ''}
                    disableRipple
                    component='a'
                    onClick={closeSidebar}
                    startIcon={<CameraFrontTwoToneIcon />}
                  >
                    {collapsed ? 'Error 500' : ''}
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component='div'>
                <NextLink href='/status/coming-soon' passHref>
                  <Button
                    className={
                      currentRoute === '/status/coming-soon' ? 'active' : ''
                    }
                    disableRipple
                    component='a'
                    onClick={closeSidebar}
                    startIcon={<ChromeReaderModeTwoToneIcon />}
                  >
                    {collapsed ? 'Coming Soon' : ''}
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component='div'>
                <NextLink href='/status/maintenance' passHref>
                  <Button
                    className={
                      currentRoute === '/status/maintenance' ? 'active' : ''
                    }
                    disableRipple
                    component='a'
                    onClick={closeSidebar}
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                  >
                    {collapsed ? 'Maintenance' : ''}
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper> */}
      </List>
    </MenuWrapper>
  );
}

export default SidebarMenu;

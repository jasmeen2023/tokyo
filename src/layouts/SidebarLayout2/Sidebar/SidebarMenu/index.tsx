import {
  alpha,
  Box,
  Card,
  Container,
  List,
  ListItem,
  styled,
  CardContent,
  CardHeader,
  Typography,
  IconButton,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import VerticalSidebarTabs from '../../../../content/VerticalSidebarTabs';
import NextFollowDialog from './NextFollowDialog';
import ApplicationStatusDialog from './ApplicationStatusDialog';

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

const SubMenuWrapper2 = styled(Box)(
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

function SidebarMenu2() {
  const [open, setOpen] = useState(false);
  const [openAppDialog, setOpenAppDialog] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenApp = () => {
    setOpenAppDialog(true);
  };

  const handleCloseApp = () => {
    setOpenAppDialog(false);
  };

  return (
    <MenuWrapper>
      <Container>
        <Card
          sx={{
            background: '#FFF',
            borderRadius: 0,
            boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
            marginY: 2,
          }}
        >
          <CardContent>
            <VerticalSidebarTabs />
          </CardContent>
        </Card>

        <Card
          sx={{
            background: '#FFF',
            borderRadius: 0,
            boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
            marginY: 2,
          }}
        >
          <CardHeader
            title='Application Status'
            action={
              <>
                <IconButton onClick={handleClickOpenApp}>
                  <DriveFileRenameOutlineIcon sx={{ color: '#4B65B2' }} />
                </IconButton>
                <ApplicationStatusDialog
                  open={openAppDialog}
                  onClose={handleCloseApp}
                />
              </>
            }
            sx={{ background: '#EEF7FE' }}
          />

          <List>
            <ListItem
              sx={{ padding: '12px 10px' }}
              secondaryAction={
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: '10px',
                    lineHeight: '24px',
                    letterSpacing: '0.01em',
                    color: '#979797',
                  }}
                >
                  SEP 10, 2022 12:30 PM
                </Typography>
              }
            >
              <ListItemAvatar sx={{ minWidth: '38px' }}>
                <Image
                  src='/images/green.png'
                  alt=''
                  width='25px'
                  height='25px'
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '19px',
                      display: 'flex',
                      alignItems: 'center',
                      textTransform: 'capitalize',
                      color: '#000000',
                    }}
                  >
                    New Lead
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      textTransform: 'capitalize',
                      color: '#8C8C8C',
                    }}
                  >
                    Glenn Cannon
                  </Typography>
                }
              />
            </ListItem>
            <ListItem
              sx={{ padding: '12px 10px' }}
              secondaryAction={
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: '10px',
                    lineHeight: '24px',
                    letterSpacing: '0.01em',
                    color: '#979797',
                  }}
                >
                  SEP 10, 2022 12:30 PM
                </Typography>
              }
            >
              <ListItemAvatar sx={{ minWidth: '38px' }}>
                <Image
                  src='/images/green.png'
                  alt=''
                  width='25px'
                  height='25px'
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '19px',
                      display: 'flex',
                      alignItems: 'center',
                      textTransform: 'capitalize',
                      color: '#000000',
                    }}
                  >
                    New Lead
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      textTransform: 'capitalize',
                      color: '#8C8C8C',
                    }}
                  >
                    Glenn Cannon
                  </Typography>
                }
              />
            </ListItem>
            <ListItem
              sx={{ padding: '12px 10px' }}
              secondaryAction={
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: '10px',
                    lineHeight: '24px',
                    letterSpacing: '0.01em',
                    color: '#979797',
                  }}
                >
                  SEP 10, 2022 12:30 PM
                </Typography>
              }
            >
              <ListItemAvatar sx={{ minWidth: '38px' }}>
                <Image
                  src='/images/green.png'
                  alt=''
                  width='25px'
                  height='25px'
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '19px',
                      display: 'flex',
                      alignItems: 'center',
                      textTransform: 'capitalize',
                      color: '#000000',
                    }}
                  >
                    New Lead
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      textTransform: 'capitalize',
                      color: '#8C8C8C',
                    }}
                  >
                    Glenn Cannon
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Card>

        <Card
          sx={{
            background: '#FFF',
            borderRadius: 0,
            boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
            marginY: 2,
          }}
        >
          <CardHeader
            title='Next Follow update'
            action={
              <>
                <IconButton onClick={handleClickOpen}>
                  <DriveFileRenameOutlineIcon sx={{ color: '#4B65B2' }} />
                </IconButton>
                <NextFollowDialog open={open} onClose={handleClose} />
              </>
            }
            sx={{
              background: '#EEF7FE',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '21px',
              display: 'flex',
              alignItems: 'flex-end',
              textTransform: 'capitalize',
              color: '#4B473E',
            }}
          />

          <CardContent>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '19px',
                display: 'flex',
                alignItems: 'flex-end',
                textTransform: 'capitalize',
                color: '#000000',
                marginBoottom: 1,
              }}
            >
              SEP 19, 2022 12:30 PM
            </Typography>
            <Typography
              sx={{
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '20px',
                letterSpacing: '0.01em',

                color: '#4B473E',
              }}
            >
              A case note is a summary and analysis of a single case, as opposed
              to an article,{' '}
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            background:
              'linear-gradient(90.07deg, #4B65B2 17.96%, #13BBE6 90.09%)',
            borderRadius: '8px',
            marginY: 2,
          }}
        >
          <CardContent>
            <List>
              <ListItem sx={{ padding: '20px 0px' }}>
                <ListItemAvatar>
                  <Image
                    src='/images/color.png'
                    alt=''
                    width='50px'
                    height='50px'
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '12px',
                        lineHeight: '16px',
                        textTransform: 'capitalize',
                        color: '#FFFFFF',
                      }}
                    >
                      Relationship Manager
                    </Typography>
                  }
                  secondary={
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: '17px',
                        lineHeight: '27px',
                        textTransform: 'capitalize',
                        color: '#FFFFFF',
                      }}
                    >
                      Glenn Cannon
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ padding: '20px 0px' }}>
                <ListItemAvatar>
                  <Image
                    src='/images/color.png'
                    alt=''
                    width='50px'
                    height='50px'
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '12px',
                        lineHeight: '16px',
                        textTransform: 'capitalize',
                        color: '#FFFFFF',
                      }}
                    >
                      Relationship Manager
                    </Typography>
                  }
                  secondary={
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: '17px',
                        lineHeight: '27px',
                        textTransform: 'capitalize',
                        color: '#FFFFFF',
                      }}
                    >
                      Glenn Cannon
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ padding: '20px 0px' }}>
                <ListItemAvatar>
                  <Image
                    src='/images/color.png'
                    alt=''
                    width='50px'
                    height='50px'
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '12px',
                        lineHeight: '16px',
                        textTransform: 'capitalize',
                        color: '#FFFFFF',
                      }}
                    >
                      Relationship Manager
                    </Typography>
                  }
                  secondary={
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: '17px',
                        lineHeight: '27px',
                        textTransform: 'capitalize',
                        color: '#FFFFFF',
                      }}
                    >
                      Glenn Cannon
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ padding: '20px 0px' }}>
                <ListItemAvatar>
                  <Image
                    src='/images/color.png'
                    alt=''
                    width='50px'
                    height='50px'
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '12px',
                        lineHeight: '16px',
                        textTransform: 'capitalize',
                        color: '#FFFFFF',
                      }}
                    >
                      Relationship Manager
                    </Typography>
                  }
                  secondary={
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: '17px',
                        lineHeight: '27px',
                        textTransform: 'capitalize',
                        color: '#FFFFFF',
                      }}
                    >
                      Glenn Cannon
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ padding: '20px 0px' }}>
                <ListItemAvatar>
                  <Image
                    src='/images/color.png'
                    alt=''
                    width='50px'
                    height='50px'
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '12px',
                        lineHeight: '16px',
                        textTransform: 'capitalize',
                        color: '#FFFFFF',
                      }}
                    >
                      Relationship Manager
                    </Typography>
                  }
                  secondary={
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: '17px',
                        lineHeight: '27px',
                        textTransform: 'capitalize',
                        color: '#FFFFFF',
                      }}
                    >
                      Glenn Cannon
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Container>
    </MenuWrapper>
  );
}

export default SidebarMenu2;

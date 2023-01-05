import {
  Avatar,
  Box,
  Card,
  CardHeader,
  styled,
  Typography,
} from '@mui/material';
import { CardContent, Divider } from '@mui/material';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

import ReceiptSVG from '~/assets/svg/receipt-item.svg';
import VectorSVG from '~/svg/Vector.svg';

const EditAvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(2)};
    height: ${theme.spacing(2)};
`
);
const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(6)};
    height: ${theme.spacing(6)};
`
);

function OrderSummary() {
  return (
    <Card
      sx={{ boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)', borderRadius: 0 }}
    >
      <CardHeader title='Invoice Summary'></CardHeader>
      <CardContent sx={{ background: '#F3F6F8' }}>
        <Grid container spacing={4} rowSpacing={4}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box display='flex' alignItems='center'>
              <Badge
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                overlap='circular'
              >
                <AvatarWrapper
                  alt='Ann Saris'
                  src='/static/images/avatars/3.jpg'
                />
              </Badge>
              <Box sx={{ ml: 2 }}>
                <Typography variant='h4' noWrap gutterBottom>
                  Harvey Alvarado
                </Typography>
                <Typography
                  variant='subtitle2'
                  fontSize={12}
                  component='h6'
                  noWrap
                >
                  Customer Details
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'end',
            }}
          >
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='end'
              alignItems='end'
              textAlign='end'
            >
              {/* <EditAvatarWrapper
                sx={{
                  backgroundColor: 'transparent',
                  color: 'black',
                }}
                variant='square'
              >
                <BorderColor fontSize='small' />
              </EditAvatarWrapper> */}
              <Box>
                <Typography variant='subtitle1' noWrap>
                  +971 - 399 345 678
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ boxShadow: 'none', p: 1 }}>
              <CardHeader title='List Of Products' />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item>
                    <Card
                      sx={{
                        background: '#FFF',
                        borderRadius: 1,
                        boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
                      }}
                    >
                      <Grid
                        item
                        container
                        sx={{
                          alignItems: 'center',
                          bgcolor: 'transparent',
                        }}
                      >
                        <Grid item xs>
                          <Grid
                            container
                            sx={{
                              px: 2,
                              py: 1,
                              alignItems: 'center',
                            }}
                            spacing={1}
                          >
                            <Grid item xs={2}>
                              <Image
                                src='/images/noattribute.png'
                                alt='attribute image'
                                width={45}
                                height={45}
                              />
                            </Grid>
                            <Grid item container xs>
                              <Grid item xs={12}>
                                <Typography>Product Order 1</Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant='subtitle2' fontSize={10}>
                                  Quantity:
                                </Typography>
                              </Grid>
                              <Grid item xs>
                                <Typography variant='subtitle2' fontSize={10}>
                                  1 items
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid item xs container sx={{ textAlign: 'end' }}>
                              <Grid item xs={12}>
                                <Typography>Dhs 6,400.00</Typography>
                              </Grid>
                              <Grid item xs>
                                <Typography variant='subtitle2' fontSize={10}>
                                  Dhs 5,400.00
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                  <Grid item>
                    <Card
                      sx={{
                        background: '#FFF',
                        borderRadius: 1,
                        boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
                      }}
                    >
                      <Grid
                        item
                        container
                        sx={{
                          alignItems: 'center',
                          bgcolor: 'transparent',
                        }}
                      >
                        <Grid item xs>
                          <Grid
                            container
                            sx={{
                              px: 2,
                              py: 1,
                              alignItems: 'center',
                            }}
                            spacing={1}
                          >
                            <Grid item xs={2}>
                              <Image
                                src='/images/noattribute.png'
                                alt='attribute image'
                                width={45}
                                height={45}
                              />
                            </Grid>
                            <Grid item container xs>
                              <Grid item xs={12}>
                                <Typography>Product Order 1</Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant='subtitle2' fontSize={10}>
                                  Quantity:
                                </Typography>
                              </Grid>
                              <Grid item xs>
                                <Typography variant='subtitle2' fontSize={10}>
                                  1 items
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid item xs container sx={{ textAlign: 'end' }}>
                              <Grid item xs={12}>
                                <Typography>Dhs 6,400.00</Typography>
                              </Grid>
                              <Grid item xs>
                                <Typography variant='subtitle2' fontSize={10}>
                                  Dhs 5,400.00
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                  <Grid item>
                    <Card
                      sx={{
                        background: '#FFF',
                        borderRadius: 1,
                        boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
                      }}
                    >
                      <Grid
                        item
                        container
                        sx={{
                          alignItems: 'center',
                          bgcolor: 'transparent',
                        }}
                      >
                        <Grid item xs>
                          <Grid
                            container
                            sx={{
                              px: 2,
                              py: 1,
                              alignItems: 'center',
                            }}
                            spacing={1}
                          >
                            <Grid item xs={2}>
                              <Image
                                src='/images/noattribute.png'
                                alt='attribute image'
                                width={45}
                                height={45}
                              />
                            </Grid>
                            <Grid item container xs>
                              <Grid item xs={12}>
                                <Typography>Product Order 1</Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant='subtitle2' fontSize={10}>
                                  Quantity:
                                </Typography>
                              </Grid>
                              <Grid item xs>
                                <Typography variant='subtitle2' fontSize={10}>
                                  1 items
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid item xs container sx={{ textAlign: 'end' }}>
                              <Grid item xs={12}>
                                <Typography>Dhs 6,400.00</Typography>
                              </Grid>
                              <Grid item xs>
                                <Typography variant='subtitle2' fontSize={10}>
                                  Dhs 5,400.00
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                </Grid>

                <Divider />
              </CardContent>

              <Card
                sx={{ boxShadow: 'none', p: 1, backgroundColor: '#F3F6F8' }}
              >
                <CardHeader title='Pricing Details' />
                <CardContent>
                  <Grid container rowGap={1}>
                    <Grid xs={6}>
                      <Typography variant='subtitle2'>
                        Product Cost (Approx.)
                      </Typography>
                    </Grid>
                    <Grid xs={6} sx={{ textAlign: 'end' }}>
                      <Typography variant='subtitle2'>DHS 12,059.00</Typography>
                    </Grid>
                    <Grid xs={6}>
                      <Typography variant='subtitle2'>GST</Typography>
                    </Grid>
                    <Grid xs={6} sx={{ textAlign: 'end' }}>
                      <Typography variant='subtitle2'>DHS 451.00</Typography>
                    </Grid>
                    <Grid xs={6}>
                      <Typography variant='subtitle2'>Disount</Typography>
                    </Grid>
                    <Grid xs={6} sx={{ textAlign: 'end' }}>
                      <Typography variant='subtitle2'>DHS 1205.00</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid
                      xs={6}
                      sx={{ display: 'flex', alignItems: 'center', my: 2 }}
                    >
                      <ReceiptSVG style={{ fontSize: 20 }} />
                      <Typography variant='subtitle1' ml={1}>
                        Total Cost
                      </Typography>
                    </Grid>
                    <Grid xs={6} sx={{ textAlign: 'end', my: 2 }}>
                      <Typography variant='h4'>DHS 12,600.00</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Card
                sx={{
                  boxShadow: 'none',
                  p: 1,
                  backgroundColor: '#F3F6F8',
                  mt: 2,
                }}
              >
                <CardHeader title='PAYMENT SUMMARY' />
                <CardContent>
                  <Grid container rowGap={1}>
                    <Grid xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
                      <VectorSVG style={{ fontSize: 25 }} />
                    </Grid>
                    <Grid xs={10}>
                      <Typography
                        variant='subtitle2'
                        fontSize={12}
                        color='success'
                      >
                        Your payment details have been updated. You have
                        transfered the amount on Sep’21 2022
                      </Typography>
                    </Grid>

                    <Grid
                      xs={6}
                      sx={{ display: 'flex', alignItems: 'center', my: 2 }}
                    >
                      <Grid item xs>
                        <Typography variant='subtitle2'>
                          Structure Ready
                        </Typography>
                        <Typography variant='subtitle2' fontSize={12}>
                          31 Aug’22 12:30 PM
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid xs={6} sx={{ textAlign: 'end', my: 2 }}>
                      <Typography variant='h4'>DHS 12,600.00</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid
                      xs={6}
                      sx={{ display: 'flex', alignItems: 'center', my: 2 }}
                    >
                      <ReceiptSVG style={{ fontSize: 20 }} />
                      <Typography variant='subtitle1' ml={1}>
                        Total Cost
                      </Typography>
                    </Grid>
                    <Grid xs={6} sx={{ textAlign: 'end', my: 2 }}>
                      <Typography variant='h4'>DHS 12,600.00</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default OrderSummary;

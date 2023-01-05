import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  styled,
  Typography,
} from '@mui/material';
import { CardContent, Divider, InputAdornment } from '@mui/material';
import Badge from '@mui/material/Badge';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';

import DiscountSVG from '~/assets/svg/discount-shape.svg';
import MoneySVG from '~/assets/svg/moneys.svg';
import ReceiptSVG from '~/assets/svg/receipt-item.svg';

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

function FieldAgent() {
  return (
    <Card
      sx={{ boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)', borderRadius: 0 }}
    >
      <CardHeader title='Customer Details'></CardHeader>
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
              alignItems: 'ens',
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
              <CardHeader title='*Enter Pricing Details' />
              <CardContent>
                <Typography variant='subtitle2' fontSize={12}>
                  Product Cost
                </Typography>

                <TextField
                  size='small'
                  fullWidth
                  defaultValue='12,059.00'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <EditAvatarWrapper
                          sx={{
                            backgroundColor: 'transparent',
                            fontSize: 20,
                            color: 'black',
                          }}
                          variant='square'
                        >
                          <MoneySVG />
                        </EditAvatarWrapper>
                      </InputAdornment>
                    ),
                    // <-- This is where the toggle button is added.
                    endAdornment: (
                      <InputAdornment position='end'>Dhs</InputAdornment>
                    ),
                  }}
                />
                {/* <Box display='flex' justifyContent='space-between'>
                  <Box display='flex'>
                    <EditAvatarWrapper
                      sx={{
                        backgroundColor: 'transparent',
                        color: 'black',
                      }}
                      variant='square'
                    >
                      <MoneySVG />
                    </EditAvatarWrapper>
                    <Typography variant='body2' fontSize={15}>
                      12,059.00
                    </Typography>
                  </Box>

                  <Typography variant='body2' fontSize={15}>
                    Dhs
                  </Typography>
                </Box> */}
                <Divider />
              </CardContent>
              <CardHeader title='Enter Discount' />
              <CardContent>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby='demo-row-radio-buttons-group-label'
                    name='row-radio-buttons-group'
                  >
                    <FormControlLabel
                      value='percentage'
                      control={<Radio size='small' />}
                      label='Percentage'
                    />
                    <FormControlLabel
                      value='price'
                      control={<Radio size='small' />}
                      label='Price'
                    />
                  </RadioGroup>
                </FormControl>

                <Typography variant='subtitle2' mt={2} fontSize={12}>
                  Discounted Price
                </Typography>

                <TextField
                  size='small'
                  fullWidth
                  defaultValue='10'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <EditAvatarWrapper
                          sx={{
                            backgroundColor: 'transparent',
                            fontSize: 20,
                            color: 'black',
                          }}
                          variant='square'
                        >
                          <DiscountSVG />
                        </EditAvatarWrapper>
                      </InputAdornment>
                    ),
                    // <-- This is where the toggle button is added.
                    endAdornment: (
                      <InputAdornment position='end'>Percentage</InputAdornment>
                    ),
                  }}
                />

                <Divider />
              </CardContent>
              <Card
                sx={{ boxShadow: 'none', p: 1, backgroundColor: '#F3F6F8' }}
              >
                <CardHeader title='Final Pricing Details' />
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
              <Button
                variant='contained'
                sx={{ my: 2, color: 'white', backgroundColor: '#122917' }}
                fullWidth
              >
                <Typography variant='button'>Update Customer</Typography>
              </Button>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default FieldAgent;

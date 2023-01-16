import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import Image from 'next/image';
import { Grid } from '@mui/material';
import {
  CreditCardOutlined,
  CreditScore,
  CurrencyPound,
} from '@mui/icons-material';

const cards = [
  {
    id: 1,
    sno: '1',
    relationship: 'child',
    age: 24,
  },
  {
    id: 2,
    sno: '2',
    relationship: 'father',
    age: 42,
  },
];

const sliderCredit = [
  {
    id: 1,
    icon1: <CreditScore sx={{ fontSize: 35, color: '#4B65B2' }} />,
    heading1: 'Yorkshire Bank',
    icon2: <CurrencyPound sx={{ fontSize: 35, color: '#4B65B2' }} />,
    heading2: '£4,500',
  },
  {
    id: 2,
    icon1: <CreditScore sx={{ fontSize: 35, color: '#4B65B2' }} />,
    heading1: 'Yorkshire Bank',
    icon2: <CurrencyPound sx={{ fontSize: 35, color: '#4B65B2' }} />,
    heading2: '£4,500',
  },
];

const sliderPersonalLoan = [
  {
    id: 1,
    icon1: <CreditScore sx={{ fontSize: 35, color: '#4B65B2' }} />,
    heading1: 'Lloyds Banking G..',
    icon2: <CurrencyPound sx={{ fontSize: 35, color: '#4B65B2' }} />,
    heading2: '£10,500',
  },
];

const carLoan = [
  {
    id: 1,
    icon1: <CreditScore sx={{ fontSize: 35, color: '#4B65B2' }} />,
    heading1: 'HSBC Banking',
    icon2: <CurrencyPound sx={{ fontSize: 35, color: '#4B65B2' }} />,
    heading2: '£10,500',
  },
];

const storeCard = [
  {
    id: 1,
    icon1: <CreditScore sx={{ fontSize: 35, color: '#4B65B2' }} />,
    heading1: 'HSBC Banking',
    icon2: <CurrencyPound sx={{ fontSize: 35, color: '#4B65B2' }} />,
    heading2: '£10,500',
  },
];

const CaseNotes = () => {
  return (
    <>
      <Card
        sx={{
          background: '#FFF',
          borderRadius: 0,
          boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
          marginY: 1,
        }}
      >
        <CardHeader
          title='Dependent Details'
          avatar={
            <Image src='/images/groupuser.png' width='42px' height='42px' />
          }
          sx={{
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '140.1%',
            color: '#263238',
          }}
        />

        <Card
          sx={{
            background: '#FFF',
            borderRadius: 0,
            boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
          }}
        >
          <CardContent>
            <Table sx={{ background: '#FFF' }}>
              <TableRow
                sx={{
                  background: '#EEF7FE',
                  border: '0.1px solid #979797',
                  borderRadius: '10px',
                  my: 1,
                }}
              >
                <TableCell>S: NO.</TableCell>
                <TableCell>Relationship</TableCell>
                <TableCell>Age</TableCell>
              </TableRow>
              <TableBody>
                {cards.map((card) => (
                  <TableRow key={card.id}>
                    <TableCell sx={{ borderBottom: '0.1px dashed #979797' }}>
                      {card.sno}
                    </TableCell>
                    <TableCell sx={{ borderBottom: '0.1px dashed #979797' }}>
                      {card.relationship}
                    </TableCell>
                    <TableCell sx={{ borderBottom: '0.1px dashed #979797' }}>
                      {card.age}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Card>

      <Card
        sx={{
          background: '#FFF',
          borderRadius: 0,
          boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
          marginY: 1,
        }}
      >
        <CardHeader
          title='Outstandings'
          // sx={{
          //   fontStyle: 'normal',
          //   fontWeight: 600,
          //   fontSize: '18px',
          //   lineHeight: '140.1%',
          //   color: '#263238',
          // }}
          avatar={
            <Image
              src='/images/outstandingicon.png'
              width='42px'
              height='42px'
            />
          }
        />

        <Card
          sx={{
            background: '#FFF',
            borderRadius: 0,
            boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
          }}
        >
          <CardContent>
            <CardHeader title='Credit Card' sx={{ paddingX: 0 }} />

            <Grid container>
              <Grid
                item
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                {sliderCredit.map((slide) => (
                  <Card
                    key={slide.id}
                    sx={{
                      background: 'url("/images/bgcard.png")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right bottom',
                      borderRadius: 1,
                      boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
                      margin: 1,
                    }}
                  >
                    <CardContent>
                      <IconButton sx={{ padding: 0 }}>{slide.icon1}</IconButton>
                      <Typography
                        sx={{
                          fontStyle: 'normal',
                          fontWeight: 600,
                          fontSize: '14px',
                          lineHeight: '16px',
                          color: '#263238',
                          marginY: 1,
                        }}
                      >
                        {slide.heading1}
                      </Typography>

                      <IconButton sx={{ padding: 0 }}>{slide.icon2}</IconButton>

                      <Typography
                        sx={{
                          fontStyle: 'normal',
                          fontWeight: 600,
                          fontSize: '14px',
                          lineHeight: '16px',
                          color: '#263238',
                          marginY: 1,
                        }}
                      >
                        {slide.heading2}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Grid>
            </Grid>

            <CardHeader title='Personal Loan' sx={{ paddingX: 0 }} />

            <Grid container>
              <Grid
                item
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                {sliderPersonalLoan.map((slide) => (
                  <Card
                    key={slide.id}
                    sx={{
                      background: 'url("/images/loanbgicon.png")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right bottom',
                      borderRadius: 1,
                      boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
                      margin: 1,
                    }}
                  >
                    <CardContent>
                      <IconButton sx={{ padding: 0 }}>{slide.icon1}</IconButton>
                      <Typography
                        sx={{
                          fontStyle: 'normal',
                          fontWeight: 600,
                          fontSize: '14px',
                          lineHeight: '16px',
                          color: '#263238',
                          marginY: 1,
                        }}
                      >
                        {slide.heading1}
                      </Typography>

                      <IconButton sx={{ padding: 0 }}>{slide.icon2}</IconButton>

                      <Typography
                        sx={{
                          fontStyle: 'normal',
                          fontWeight: 600,
                          fontSize: '14px',
                          lineHeight: '16px',
                          color: '#263238',
                          marginY: 1,
                        }}
                      >
                        {slide.heading2}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Grid>
            </Grid>

            <CardHeader title='Car Loan HP/PCP' sx={{ paddingX: 0 }} />

            <Grid container>
              <Grid
                item
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                {carLoan.map((slide) => (
                  <Card
                    key={slide.id}
                    sx={{
                      background: 'url("/images/carLoan.png")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right bottom',
                      borderRadius: 1,
                      boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
                      margin: 1,
                    }}
                  >
                    <CardContent>
                      <IconButton sx={{ padding: 0 }}>{slide.icon1}</IconButton>
                      <Typography
                        sx={{
                          fontStyle: 'normal',
                          fontWeight: 600,
                          fontSize: '14px',
                          lineHeight: '16px',
                          color: '#263238',
                          marginY: 1,
                        }}
                      >
                        {slide.heading1}
                      </Typography>

                      <IconButton sx={{ padding: 0 }}>{slide.icon2}</IconButton>

                      <Typography
                        sx={{
                          fontStyle: 'normal',
                          fontWeight: 600,
                          fontSize: '14px',
                          lineHeight: '16px',
                          color: '#263238',
                          marginY: 1,
                        }}
                      >
                        {slide.heading2}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Grid>
            </Grid>

            <CardHeader title='HP/PCP /Store card' sx={{ paddingX: 0 }} />

            <Grid container>
              <Grid
                item
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                {carLoan.map((slide) => (
                  <Card
                    key={slide.id}
                    sx={{
                      background: 'url("/images/bgcard.png")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right bottom',
                      borderRadius: 1,
                      boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
                      margin: 1,
                    }}
                  >
                    <CardContent>
                      <IconButton sx={{ padding: 0 }}>{slide.icon1}</IconButton>
                      <Typography
                        sx={{
                          fontStyle: 'normal',
                          fontWeight: 600,
                          fontSize: '14px',
                          lineHeight: '16px',
                          color: '#263238',
                          marginY: 1,
                        }}
                      >
                        {slide.heading1}
                      </Typography>

                      <IconButton sx={{ padding: 0 }}>{slide.icon2}</IconButton>

                      <Typography
                        sx={{
                          fontStyle: 'normal',
                          fontWeight: 600,
                          fontSize: '14px',
                          lineHeight: '16px',
                          color: '#263238',
                          marginY: 1,
                        }}
                      >
                        {slide.heading2}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Card>
    </>
  );
};

export default CaseNotes;

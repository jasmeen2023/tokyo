import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import {
  Button,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  styled,
  useTheme,
} from '@mui/material';
import { Divider, Grid } from '@mui/material';
import type { ApexOptions } from 'apexcharts';
import { useRef, useState } from 'react';

import { Chart } from '@/components/Chart';

const DotPrimaryLight = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.primary.lighter};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

const DotPrimary = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.primary.main};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

function ActiveCaseAnalytics() {
  const theme = useTheme();

  const barChartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      type: 'bar',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 6,
        columnWidth: '35%',
      },
    },
    colors: [
      function ({ value, seriesIndex, dataPointIndex, w }) {
        if (dataPointIndex == 0) {
          return '#33D69F';
        } else if (dataPointIndex == 1) {
          return '#FEBD40';
        } else if (dataPointIndex == 2) {
          return '#EFD75A';
        } else if (dataPointIndex == 3) {
          return '#8AE034';
        } else if (dataPointIndex == 4) {
          return '#8B72F8';
        } else if (dataPointIndex == 5) {
          return '#F95CCD';
        } else if (dataPointIndex == 6) {
          return '#FF7A00';
        } else if (dataPointIndex == 7) {
          return '#FF4C61';
        }
      },
    ],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    theme: {
      mode: theme.palette.mode,
    },
    stroke: {
      show: true,
      width: 3,
      colors: ['transparent'],
    },
    legend: {
      show: false,
    },
    labels: [
      'New Lead ',
      ['Awaiting Further', 'Information'] as unknown as string,
      ['Decision in', 'Principle'] as unknown as string,
      ['Pre Offer', 'Processing'] as unknown as string,
      'Offered',
      ['Post Offer', 'Processing'] as unknown as string,
      'Closed',
      'Rejected',
    ],
    grid: {
      strokeDashArray: 5,
      borderColor: theme.palette.divider,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        rotate: 0,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    yaxis: {
      tickAmount: 6,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      marker: {
        show: false,
      },
      y: {
        formatter: function (val) {
          return '$ ' + val + 'k';
        },
      },
      theme: 'dark',
    },
  };

  const barcChartData = [
    {
      name: 'Income',
      data: [28, 47, 41, 34, 69, 91, 49, 82],
    },
  ];

  const periods = [
    {
      value: 'today',
      text: 'Today',
    },
    {
      value: 'yesterday',
      text: 'Yesterday',
    },
    {
      value: 'last_month',
      text: 'Last month',
    },
    {
      value: 'last_year',
      text: 'Last year',
    },
  ];

  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>(periods[3].text);

  return (
    <Card
      sx={{
        background: '#FFF',
        borderRadius: 1,
        boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
      }}
    >
      <CardHeader
        title='Active Case Analytics'
        action={
          <Grid container>
            <Grid item xs={12}>
              <Button
                fullWidth
                size='small'
                variant='contained'
                color='primary'
                ref={actionRef1}
                onClick={() => setOpenMenuPeriod(true)}
                endIcon={<ExpandMoreTwoToneIcon fontSize='small' />}
              >
                {period}
              </Button>
              <Menu
                disableScrollLock
                anchorEl={actionRef1.current}
                onClose={() => setOpenMenuPeriod(false)}
                open={openPeriod}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                {periods.map((_period) => (
                  <MenuItem
                    key={_period.value}
                    onClick={() => {
                      setPeriod(_period.text);
                      setOpenMenuPeriod(false);
                    }}
                  >
                    {_period.text}
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
          </Grid>
        }
      />
      <Divider sx={{ mx: 2 }} />
      <Chart
        options={barChartOptions}
        series={barcChartData}
        type='bar'
        height={270}
      />
    </Card>
  );
}

export default ActiveCaseAnalytics;

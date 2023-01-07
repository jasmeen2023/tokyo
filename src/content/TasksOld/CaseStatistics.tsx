import {
  Box,
  Card,
  CardHeader,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { Divider, Grid } from '@mui/material';
import { BoxProps } from '@mui/system';
import type { ApexOptions } from 'apexcharts';

import { Chart } from '@/components/Chart';

export interface DivProps extends BoxProps {
  active: boolean;
}
const AreaFilterItem = styled(Box)<DivProps>(({ theme, active }) => ({
  backgroundColor: active ? '#13BBE6' : '#F4F7F9',
  color: active ? 'white' : '',
  fontSize: 10,
  lineHeight: 18,
  fontWeight: 600,
  height: 30,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  cursor: 'pointer',
}));

function CaseStatistics() {
  const theme = useTheme();

  const areaChartOptions: ApexOptions = {
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
    stroke: {
      show: true,
      width: 1.5,
    },
    grid: {
      strokeDashArray: 5,
      borderColor: theme.palette.divider,
    },
  };

  const areaChartData = [
    {
      name: 'Income',
      data: [28, 47, 41, 34, 69, 91, 49, 82],
    },
    {
      name: 'Income',
      data: [31, 47, 41, 34, 69, 91, 49, 102],
    },
  ];

  return (
    <Card
      sx={{
        background: '#FFF',
        borderRadius: 1,
        boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
      }}
    >
      <CardHeader
        title='Case Statistics'
        action={
          <Grid container spacing={0.5}>
            <Grid item xs>
              <AreaFilterItem active={false} sx={{ px: 1 }}>
                <Typography sx={{ fontSize: 10, lineHeight: 18, width: 70 }}>
                  New Lead
                </Typography>
              </AreaFilterItem>
            </Grid>
            <Grid item xs>
              <AreaFilterItem active={true} sx={{ px: 1 }}>
                <Typography sx={{ fontSize: 10, lineHeight: 18, width: 150 }}>
                  Awaiting Further Information
                </Typography>
              </AreaFilterItem>
            </Grid>
            <Grid item xs>
              <AreaFilterItem active={false} sx={{ px: 1 }}>
                <Typography sx={{ fontSize: 10, lineHeight: 18, width: 110 }}>
                  Decision in Principle
                </Typography>
              </AreaFilterItem>
            </Grid>
            <Grid item xs>
              <AreaFilterItem active={false} sx={{ px: 1 }}>
                <Typography sx={{ fontSize: 10, lineHeight: 18, width: 110 }}>
                  Pre Offer Processing
                </Typography>
              </AreaFilterItem>
            </Grid>
            <Grid item xs>
              <AreaFilterItem active={false} sx={{ px: 1 }}>
                <Typography sx={{ fontSize: 10 }}>Offered</Typography>
              </AreaFilterItem>
            </Grid>

            <Grid item xs>
              <AreaFilterItem active={false} sx={{ px: 1 }}>
                <Typography sx={{ fontSize: 10 }}>Closed</Typography>
              </AreaFilterItem>
            </Grid>
            <Grid item xs>
              <AreaFilterItem active={false} sx={{ px: 1 }}>
                <Typography sx={{ fontSize: 10 }}>Rejected</Typography>
              </AreaFilterItem>
            </Grid>
          </Grid>
        }
      />

      <Chart
        options={areaChartOptions}
        series={areaChartData}
        type='area'
        height={270}
      />
    </Card>
  );
}

export default CaseStatistics;

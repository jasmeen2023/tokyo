import {
  Box,
  Card,
  CardHeader,
  Container,
  styled,
  useTheme,
} from '@mui/material';
import { Divider } from '@mui/material';
import MuiGrid from '@mui/material/Grid';
import { ApexOptions } from 'apexcharts';
import { ChangeEvent, useState } from 'react';

import ActiveCaseAnalytics from '@/content/TasksOld/ActiveCaseAnalytics';
import CaseDetails from '@/content/TasksOld/CaseDetails';
import CaseStatistics from '@/content/TasksOld/CaseStatistics';
import TaskOverview from '@/content/TasksOld/TaskOverview';
import SidebarLayout from '@/layouts/SidebarLayout';
import { NextPageWithLayout } from '@/pages/_app';

const Grid = styled(MuiGrid)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
}));

const TabsContainerWrapper = styled(Box)(
  ({ theme }) => `
      padding: 0 ${theme.spacing(2)};
      position: relative;
      bottom: -1px;

      .MuiTabs-root {
        height: 44px;
        min-height: 44px;
      }

      .MuiTabs-scrollableX {
        overflow-x: auto !important;
      }

      .MuiTabs-indicator {
          min-height: 4px;
          height: 4px;
          box-shadow: none;
          bottom: -4px;
          background: none;
          border: 0;

          &:after {
            position: absolute;
            left: 50%;
            width: 28px;
            content: ' ';
            margin-left: -14px;
            background: ${theme.colors.primary.main};
            border-radius: inherit;
            height: 100%;
          }
      }

      .MuiTab-root {
          &.MuiButtonBase-root {
              height: 44px;
              min-height: 44px;
              background: ${theme.colors.alpha.white[50]};
              border: 1px solid ${theme.colors.alpha.black[10]};
              border-bottom: 0;
              position: relative;
              margin-right: ${theme.spacing(1)};
              font-size: ${theme.typography.pxToRem(14)};
              color: ${theme.colors.alpha.black['50']};
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;

              .MuiTouchRipple-root {
                opacity: .1;
              }

              &:after {
                position: absolute;
                left: 0;
                right: 0;
                width: 100%;
                bottom: 0;
                height: 1px;
                content: '';
                background: ${theme.colors.alpha.black[10]};
              }

              &:hover {
                color: ${theme.colors.alpha.black[100]};
              }
          }

          &.Mui-selected {
              color: ${theme.colors.alpha.black[100]};
              background: ${theme.colors.alpha.white[100]};
              border-bottom-color: ${theme.colors.alpha.white[100]};

              &:after {
                height: 0;
              }
          }
      }
  `
);

const DashboardTasks: NextPageWithLayout = () => {
  const theme = useTheme();

  const series = [44, 55, 41, 17];
  const options: ApexOptions = {
    chart: {
      type: 'donut',
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '80%',
        },
      },
    },
    labels: ['New Clients Assigned', 'Ongoing', 'Completed', 'Rejected'],
    responsive: [
      {
        breakpoint: 1280,
        options: {
          chart: {
            width: 400,
          },
          legend: {
            position: 'right',
          },
        },
      },
    ],
  };

  const [currentTab, setCurrentTab] = useState<string>('analytics');

  const tabs = [
    { value: 'analytics', label: 'Analytics Overview' },
    { value: 'taskSearch', label: 'Task Search' },
  ];

  const handleTabsChange = (_event: ChangeEvent<any>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <Container maxWidth='xl'>
      <Grid container spacing={2}>
        <Grid item container spacing={2} md={8}>
          <Grid item xs>
            <Card
              sx={{
                background: '#FFF',
                borderRadius: 1,
                boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
              }}
            >
              <CardHeader title='Customer Analytics' />

              <Container sx={{ py: 4 }}>
                <TaskOverview />
              </Container>
            </Card>
          </Grid>

          <Grid item xs={12} md={12}>
            <ActiveCaseAnalytics />
          </Grid>
          <Grid item xs={12} md={12}>
            <CaseStatistics />
          </Grid>
        </Grid>
        <Grid item container md={4}>
          <CaseDetails />
        </Grid>
      </Grid>
    </Container>
  );
};

DashboardTasks.getLayout = (page: any) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardTasks;

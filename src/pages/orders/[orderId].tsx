import { Box, Card, Container, Grid, styled, useTheme } from '@mui/material';
import { ApexOptions } from 'apexcharts';
import { ChangeEvent, useState } from 'react';

import FieldAgent from '@/content/Orders/Order/OrderSummary';
import TaskOverview from '@/content/Orders/Order/TaskOverview';
import TasksAnalytics from '@/content/Orders/Order/TasksAnalytics';
import SidebarLayout from '@/layouts/SidebarLayout';
import { NextPageWithLayout } from '@/pages/_app';

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
          size: '70%',
        },
      },
    },
    labels: ['New Clients Assigned', 'Ongoing', 'Completed', 'Rejected'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
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
    <Container
      maxWidth='lg'
      sx={{ marginY: theme.spacing(4) }}
      // sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}
    >
      <Card
        sx={{
          p: 4,
          background: '#FFF',
          borderRadius: 1,
          boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
        }}
      >
        <Grid container spacing={2}>
          <Grid item container spacing={4} md={7.5}>
            <Grid item xs={12}>
              <TaskOverview />
            </Grid>
            <Grid item xs={12} md={12}>
              <TasksAnalytics />
            </Grid>
          </Grid>
          <Grid item md={4.5}>
            <Grid item xs={12} sm={12} md={12}>
              <FieldAgent />
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

DashboardTasks.getLayout = (page: any) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardTasks;

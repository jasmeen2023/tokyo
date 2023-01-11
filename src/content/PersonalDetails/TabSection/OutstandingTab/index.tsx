import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
} from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import { SyntheticEvent, useState } from 'react';

import PageTitle from '@/components/PageTitle';
import PageTitleWrapper from '@/components/PageTitleWrapper';

import SidebarLayout from '@/layouts/SidebarLayout';

import { makeStyles, styled } from '@mui/styles';

import CreditCardTab from './CreditCardTab';
import PersonalLoanTab from './PersonalLoanTab';
import CarLoanTab from './CarLoanTab';
import StoreCardTab from './StoreCardTab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabsSelect = styled(Tabs)(({ theme }) => ({
  '& .MuiTab-root': {
    color: '#4B65B2',
    background: '#000',
    borderRadius: 0,
    borderBottom: '#4B65B2',
  },
  '& .Mui-selected': {
    color: '#4B65B2',
    background: '#f9f9f9',
    borderRadius: 0,
    borderBottom: '#4B65B2',
  },
}));

const useStyles = makeStyles((theme) => ({
  // tab_design: {
  //   background: '#f9f9f9',
  //   color: '#4B65B2',
  // },
}));

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function OutstandingTab() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='stretch'
    >
      <Grid item xs={12}>
        <TabsSelect
          variant='scrollable'
          scrollButtons='auto'
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab
            sx={{ background: 'transparent', borderRadius: 2 }}
            label='Credit Card'
            {...a11yProps(1)}
          />
          <Tab label='Personal Loan' {...a11yProps(2)} />
          <Tab label='Car Loan' {...a11yProps(3)} />
          <Tab label='Store Card' {...a11yProps(4)} />
        </TabsSelect>

        <TabPanel value={value} index={0}>
          <CreditCardTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PersonalLoanTab />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CarLoanTab />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <StoreCardTab />
        </TabPanel>
      </Grid>
    </Grid>
  );
}

export default OutstandingTab;

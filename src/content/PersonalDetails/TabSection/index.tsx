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
import PersonalDetailsTab from './PersonalDetailsTab';
import MortgageDetailTab from './AddressHistoryTab';
import OccupationTab from './OccupationTab';
import OutstandingTab from './OutstandingTab';
import DependentTab from './DependentTab';
import AddressHistoryTab from './AddressHistoryTab';
import { makeStyles, styled } from '@mui/styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabsSelect = styled(Tabs)(({ theme }) => ({
  '&.Mui-selected, &.Mui-selected': {
    color: '#4B65B2',
  },
  '&.Mui-selected, &.Mui-selected:hover': {
    color: '#4B65B2',
    zIndex: 5,
  },
  '&:hover': {
    // color: colors.alpha.trueWhite[70],
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

function TabSection() {
  const classes = useStyles();
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
            label='Personal Details'
            // className={classes.tab_design}
            {...a11yProps(0)}
          />
          <Tab label='Address History' {...a11yProps(1)} />
          <Tab label='Occupation' {...a11yProps(2)} />
          <Tab label='Outstanding' {...a11yProps(3)} />
          <Tab label='Dependents' {...a11yProps(4)} />
        </TabsSelect>
        <Divider sx={{ mb: 2 }} />

        <TabPanel value={value} index={0}>
          <PersonalDetailsTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AddressHistoryTab />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <OccupationTab />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <OutstandingTab />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <DependentTab />
        </TabPanel>
      </Grid>
    </Grid>
  );
}

export default TabSection;

import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  styled,
} from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { SyntheticEvent, useState } from 'react';
import PersonalDetailsTab from '../PersonalDetails/TabSection/PersonalDetailsTab';
import AddressHistoryTab from '../PersonalDetails/TabSection/AddressHistoryTab';
import OccupationTab from '../PersonalDetails/TabSection/OccupationTab';
import OutstandingTab from '../PersonalDetails/TabSection/OutstandingTab';
import DependentsTab from '../PersonalDetails/TabSection/DependentTab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabsSelect = styled(Tabs)(({ theme }) => ({
  '&.MuiTabs-vertical': {
    color: '#4B65B2',
  },
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

function VerticalSidebarTabs() {
  const [value, setValue] = useState(0);
  const router = useRouter();

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid item xs={12}>
      <Tabs
        orientation='vertical'
        //variant='scrollable'
        //scrollButtons='auto'
        value={value}
        onChange={handleChange}
        //aria-label='basic tabs example'
        sx={{
          minHeight: 200,
        }}
      >
        <Tab
          label='Application Details'
          onClick={() => {
            router?.push('/personaldetails');
          }}
          // className={classes.tab_design}
          {...a11yProps(0)}
        />
        <Tab
          label='Portfolio'
          onClick={() => {
            router?.push('/portfolio');
          }}
          {...a11yProps(1)}
        />
        <Tab
          label='Documents'
          onClick={() => {
            router?.push('/documents');
          }}
          {...a11yProps(2)}
        />
        <Tab
          label='Case Notes'
          onClick={() => {
            router?.push('/casenotes');
          }}
          {...a11yProps(3)}
        />
        <Tab
          label='Messages'
          onClick={() => {
            router?.push('/messages');
          }}
          {...a11yProps(4)}
        />
      </Tabs>
    </Grid>
  );
}

export default VerticalSidebarTabs;

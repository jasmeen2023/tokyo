import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
} from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { SyntheticEvent, useState } from 'react';
import { makeStyles, styled } from '@mui/styles';

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

function BankStatementTab() {
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
      <Grid item xs={12}></Grid>
    </Grid>
  );
}

export default BankStatementTab;

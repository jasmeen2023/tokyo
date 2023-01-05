import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
} from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import { SyntheticEvent, useState } from "react";

import PageTitle from "@/components/PageTitle";
import PageTitleWrapper from "@/components/PageTitleWrapper";

import SidebarLayout from "@/layouts/SidebarLayout";
import PersonalDetailsTab from "./PersonalDetailsTab";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabSection() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="xl">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item xs={12}>
          <Card
            sx={{
              background: "#FFF",
              borderRadius: 1,
              boxShadow: "0px 2px 5px 0px rgb(58 53 65 / 10%)",
            }}
          >
            <CardContent>
              <Box sx={{ width: "100%" }}>
                <Tabs
                  variant="scrollable"
                  scrollButtons="auto"
                  textColor="secondary"
                  indicatorColor="secondary"
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Personal Details" {...a11yProps(0)} />
                  <Tab label="Address History" {...a11yProps(1)} />
                  <Tab label="Occupation" {...a11yProps(2)} />
                  <Tab label="Outstanding" {...a11yProps(2)} />
                  <Tab label="Dependents" {...a11yProps(2)} />
                </Tabs>
                <Divider />
                <TabPanel value={value} index={0}>
                  <PersonalDetailsTab />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Address History
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Occupation
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Outstanding
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Dependents
                </TabPanel>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TabSection;

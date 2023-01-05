import { Container, Grid } from '@mui/material';
import Head from 'next/head';

import AllTasks from '@/content/Tasks/AllTasks';
import SidebarLayout from '@/layouts/SidebarLayout/index';

function ApplicationsTransactions() {
  return (
    <>
      <Head>
        <title>Admin - Cases</title>
      </Head>
      {/* <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper> */}
      <Container maxWidth='xl'>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <AllTasks />
          </Grid>
        </Grid>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

ApplicationsTransactions.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ApplicationsTransactions;

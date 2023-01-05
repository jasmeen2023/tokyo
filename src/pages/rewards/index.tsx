import { Container, Grid } from '@mui/material';
import Head from 'next/head';

import AllReward from '@/content/Rewards/AllReward';
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
            <AllReward />
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

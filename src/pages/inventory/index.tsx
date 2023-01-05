import { Container, Grid } from '@mui/material';
import Head from 'next/head';

import Inventory from '@/content/Inventory/Inventory';
import SidebarLayout from '@/layouts/SidebarLayout/index';

function ApplicationsTransactions() {
  return (
    <>
      <Head>
        <title>Transactions - Applications</title>
      </Head>
      {/* <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper> */}
      <Container maxWidth='lg'>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='stretch'
          spacing={3}
        >
          <Grid item xs={12}>
            <Inventory />
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

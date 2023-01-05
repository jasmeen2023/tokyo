import { Container, Grid } from '@mui/material';
import Head from 'next/head';

import Catalog from '@/content/Catalog/Cataloge';
import SidebarLayout from '@/layouts/SidebarLayout/index';

function CatalogPage() {
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
            <Catalog />
          </Grid>
        </Grid>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

CatalogPage.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default CatalogPage;

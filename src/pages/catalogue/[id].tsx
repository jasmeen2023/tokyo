import { Container, Grid } from '@mui/material';
import Head from 'next/head';

import UpdateCatalogueForm from '@/content/Catalog/UpdateCatalogueForm';
import SidebarLayout from '@/layouts/SidebarLayout/index';

function UpdateCatalogue() {
  return (
    <>
      <Head>
        <title>Update - Add</title>
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
            <UpdateCatalogueForm />
          </Grid>
        </Grid>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

UpdateCatalogue.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default UpdateCatalogue;

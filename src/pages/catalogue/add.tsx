import { Container, Grid } from '@mui/material';
import Head from 'next/head';

import AddCatalogueForm from '@/content/Catalog/AddCatalogueForm';
import SidebarLayout from '@/layouts/SidebarLayout/index';

function AddCatalogue() {
  return (
    <>
      <Head>
        <title>Catalogue - Add</title>
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
            <AddCatalogueForm />
          </Grid>
        </Grid>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

AddCatalogue.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default AddCatalogue;

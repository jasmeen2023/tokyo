import { Container, Grid } from '@mui/material';
import Head from 'next/head';

import AllCases from '@/content/Cases/AllCases';

import MessagesWindow from '@/content/MessageWindow';
import SidebarLayout2 from '@/layouts/SidebarLayout2';

function BoxChat() {
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
            <MessagesWindow />
          </Grid>
        </Grid>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

BoxChat.getLayout = (page) => <SidebarLayout2>{page}</SidebarLayout2>;

export default BoxChat;

import { Container, Grid } from '@mui/material';
import Head from 'next/head';

import AllCases from '@/content/Cases/AllCases';
import SidebarLayout from '@/layouts/SidebarLayout/index';
import MessagesWindow from '@/content/MessageWindow';

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

BoxChat.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default BoxChat;

import { Container, Grid } from '@mui/material';
import SidebarLayout2 from '@/layouts/SidebarLayout2';

import RecentDocuments from '@/content/Documents/AllDocuments';

function Document() {
  return (
    <Container maxWidth='xl'>
      <Grid container spacing={2}>
        <Grid item md={12} mb={2}>
          <RecentDocuments />
        </Grid>
      </Grid>
    </Container>
  );
}

Document.getLayout = (page) => <SidebarLayout2>{page}</SidebarLayout2>;

export default Document;

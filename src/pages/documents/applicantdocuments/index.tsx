import { Container, Grid } from '@mui/material';
import SidebarLayout2 from '@/layouts/SidebarLayout2';
import ApplicantDocuments from '@/content/Documents/ApplicantDocuments';

function Document() {
  return (
    <Container maxWidth='xl'>
      <Grid container spacing={2}>
        <Grid item md={12} mb={2}>
          <ApplicantDocuments />
        </Grid>
      </Grid>
    </Container>
  );
}

Document.getLayout = (page) => <SidebarLayout2>{page}</SidebarLayout2>;

export default Document;

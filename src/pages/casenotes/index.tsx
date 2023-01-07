import { Container, Grid } from '@mui/material';
import SidebarLayout2 from '@/layouts/SidebarLayout2';
import CaseNotesPage from '@/content/CaseNotesPage';

function CaseNotesDetails() {
  return (
    <Container maxWidth='xl'>
      <Grid container spacing={2}>
        <Grid item md={12} mb={2}>
          <CaseNotesPage />
        </Grid>
      </Grid>
    </Container>
  );
}

CaseNotesDetails.getLayout = (page) => <SidebarLayout2>{page}</SidebarLayout2>;

export default CaseNotesDetails;

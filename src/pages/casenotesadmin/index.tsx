import { Container, Grid } from '@mui/material';
import SidebarLayout2 from '@/layouts/SidebarLayout2';
import CaseNotesAdmin from '@/content/CaseNotesAdmin';

function CaseNotesDetails() {
  return (
    <Container maxWidth='xl'>
      <Grid container spacing={2}>
        <Grid item md={12} mb={2}>
          <CaseNotesAdmin />
        </Grid>
      </Grid>
    </Container>
  );
}

CaseNotesDetails.getLayout = (page) => <SidebarLayout2>{page}</SidebarLayout2>;

export default CaseNotesDetails;

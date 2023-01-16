import { Container, Grid } from '@mui/material';
import SidebarLayout2 from '@/layouts/SidebarLayout2';
import CaseNotes from '@/content/PersonalDetailsAdmin/CaseNotes';
import IndiviualApplicant from '@/content/PersonalDetailsAdmin/IndiviualApplicant';
import AddressAdmin from '@/content/PersonalDetailsAdmin/AddressAdmin';

function AdminApplicantDetails() {
  return (
    <Container maxWidth='xl'>
      <Grid container spacing={1}>
        <Grid item md={9}>
          <IndiviualApplicant />
          <AddressAdmin />
        </Grid>
        <Grid item md={3}>
          <CaseNotes />
        </Grid>
      </Grid>
    </Container>
  );
}

AdminApplicantDetails.getLayout = (page) => (
  <SidebarLayout2>{page}</SidebarLayout2>
);

export default AdminApplicantDetails;

import { Container, Grid } from "@mui/material";
import MortgageDetail from "@/content/PersonalDetails/MortgageDetails";
import CaseNotes from "@/content/PersonalDetails/CaseNotes";
import SidebarLayout2 from "@/layouts/SidebarLayout2";
import TabSection from "@/content/PersonalDetails/TabSection";

function ApplicantDetails() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid container item md={12} mb={2}>
          <TabSection />
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item container md={9}>
          <MortgageDetail />
        </Grid>
        <Grid item container md={3}>
          <CaseNotes />
        </Grid>
      </Grid>
    </Container>
  );
}

ApplicantDetails.getLayout = (page) => <SidebarLayout2>{page}</SidebarLayout2>;

export default ApplicantDetails;

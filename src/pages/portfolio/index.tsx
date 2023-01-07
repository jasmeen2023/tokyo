import { Container, Grid } from '@mui/material';
import MortgageDetail from '@/content/PersonalDetails/MortgageDetails';
import CaseNotes from '@/content/PersonalDetails/CaseNotes';
import SidebarLayout2 from '@/layouts/SidebarLayout2';
import TabSection from '@/content/PersonalDetails/TabSection';
import PortfolioTabData from '@/content/Portfolio';

function Portfolio() {
  return (
    <Container maxWidth='xl'>
      <Grid container spacing={2}>
        <Grid item md={12} mb={2}>
          <PortfolioTabData />
        </Grid>
      </Grid>
    </Container>
  );
}

Portfolio.getLayout = (page) => <SidebarLayout2>{page}</SidebarLayout2>;

export default Portfolio;

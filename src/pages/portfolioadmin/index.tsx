import { Container, Grid } from '@mui/material';
import SidebarLayout2 from '@/layouts/SidebarLayout2';
import PortfolioAdmin from '../../content/PortfolioAdmin/index';

function AdminPortfolio() {
  return (
    <Container maxWidth='xl'>
      <Grid container spacing={2}>
        <Grid item md={12} mb={2}>
          <PortfolioAdmin />
        </Grid>
      </Grid>
    </Container>
  );
}

AdminPortfolio.getLayout = (page) => <SidebarLayout2>{page}</SidebarLayout2>;

export default AdminPortfolio;

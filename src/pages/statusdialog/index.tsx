import AppStatusChangeDialog from '@/content/AppStatusChangeDialog';
import { Container, Grid } from '@mui/material';

function StatusDialog() {
  return (
    <>
      <Container maxWidth='lg'>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='stretch'
          spacing={3}
        >
          <Grid item xs={12}>
            <AppStatusChangeDialog />
          </Grid>
        </Grid>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

export default StatusDialog;

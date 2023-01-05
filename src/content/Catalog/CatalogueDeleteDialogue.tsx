import { ErrorOutline } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  DialogActions,
  DialogContent,
  Slide,
  styled,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import { TransitionProps } from '@mui/material/transitions';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { forwardRef, ReactElement, Ref } from 'react';

import { useDeleteSingleCatalogue } from '@/hooks/catalogue/useCatalogue';

import Label from '@/components/Label';

import { AgentFieldStatus } from '@/models/agentStatus';

import { Catalogue } from './Cataloge';

const DialogWrapper = styled(Dialog)(() => ({}));

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction='down' ref={ref} {...props} />;
});

const getStatusLabel = (AgentFieldStatus: AgentFieldStatus): JSX.Element => {
  const map = {
    active: {
      text: 'Active',
      color: 'success',
    },
    inactive: {
      text: 'In-active',
      color: 'warning',
    },
  };

  const { text, color }: any = map[AgentFieldStatus];

  return <Label color={color}>{text}</Label>;
};

const CatalogueDeleteDialogue = ({
  open,
  catalogue,
  handleClose,
}: {
  open: boolean;
  catalogue: Catalogue;
  handleClose: (value: boolean) => void;
}) => {
  const deleteSingleCatalogueHook = useDeleteSingleCatalogue();

  const deleteSingleCatalogue = async () => {
    const res: any = await deleteSingleCatalogueHook.mutateAsync({
      pathParams: {
        id: catalogue?._id,
      },
    });
    if (res?.status === 'success') {
      console.log(res);
    }
  };

  return (
    <DialogWrapper
      open={open}
      TransitionComponent={Transition}
      keepMounted
      maxWidth='xs'
      fullWidth
      scroll='paper'
      onClose={handleClose}
    >
      <DialogTitle>
        <Grid container spacing={1}>
          <Grid item sx={{ display: 'flex', alignItems: 'end' }}>
            <ErrorOutline color='error' />
          </Grid>
          <Grid item xs sx={{ display: 'flex', alignItems: 'end' }}>
            <Typography variant='h4'>Confirm - Delete Catalogue</Typography>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Card
          sx={{
            background: '#FFF',
            borderRadius: 1,
            boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
          }}
        >
          <CardHeader
            title={
              <>
                {getStatusLabel(catalogue?.status)}
                <Box display='flex'>
                  <Image src='/Vector.png' alt='' width='16.8' height='13.59' />
                  <Typography
                    paddingX={1}
                    fontSize={14}
                    fontWeight={500}
                    lineHeight={1}
                    sx={{ color: ' #8795AF' }}
                  >
                    {catalogue._id.slice(0, 4)}
                  </Typography>
                </Box>
              </>
            }
          />
          <CardContent>
            <Grid container>
              <Grid item marginRight={2} xs>
                <Image
                  src={
                    catalogue?.images.length
                      ? catalogue?.images[0]
                      : '/images/noattribute.png'
                  }
                  alt=''
                  width={70}
                  height={70}
                />
              </Grid>
              <Grid item xs={8}>
                <Typography
                  fontSize={18}
                  fontWeight={700}
                  lineHeight={2}
                  variant='body2'
                  sx={{ color: '#242C51' }}
                >
                  {catalogue?.name}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>

          <CardContent
            sx={{
              background: '#F8F9FB',
              borderRadius: 1,
              m: 1,
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs>
                <Typography
                  fontSize={14}
                  fontWeight={500}
                  sx={{ color: '#8795AF' }}
                >
                  No. Of Orders
                </Typography>
                <Typography
                  fontSize={20}
                  fontWeight={500}
                  sx={{ color: '#242C51' }}
                >
                  {145}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography
                  fontSize={14}
                  fontWeight={500}
                  sx={{ color: '#8795AF' }}
                >
                  Price
                </Typography>
                <Typography
                  fontSize={20}
                  fontWeight={500}
                  sx={{ color: '#242C51' }}
                >
                  {catalogue?.finalPrice}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <DialogActions
          sx={{
            mt: 3,
          }}
        >
          <Grid container spacing={2} justifyContent='flex-end'>
            <Grid item>
              <Button
                color='error'
                onClick={() => handleClose(open)}
                sx={{ minWidth: 100 }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <LoadingButton
                loading={deleteSingleCatalogueHook?.isLoading}
                color='error'
                variant='contained'
                sx={{ minWidth: 100 }}
                onClick={() => {
                  deleteSingleCatalogue();
                }}
              >
                Delete
              </LoadingButton>
            </Grid>
          </Grid>
        </DialogActions>
      </DialogContent>
    </DialogWrapper>
  );
};

CatalogueDeleteDialogue.propTypes = {
  open: PropTypes.bool.isRequired,
  catalogue: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default CatalogueDeleteDialogue;

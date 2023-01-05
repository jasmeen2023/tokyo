import { ErrorOutline } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Button,
  DialogActions,
  DialogContent,
  Slide,
  styled,
  Typography,
} from '@mui/material';
import { Card, CardContent, CardHeader } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import { TransitionProps } from '@mui/material/transitions';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { forwardRef, ReactElement, Ref } from 'react';

import { useDeleteSingleInventory } from '@/hooks/product/useProduct';

import Label from '@/components/Label';

import { Inventory } from '@/store/inventory';

import { AgentFieldStatus } from '@/models/agentStatus';

const DialogWrapper = styled(Dialog)(() => ({}));

const getStatusLabel = (
  AgentFieldStatus: AgentFieldStatus | undefined
): JSX.Element | undefined => {
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

  if (!AgentFieldStatus) {
    return;
  }

  const { text, color }: any = map[AgentFieldStatus];
  return <Label color={color}>{text}</Label>;
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction='down' ref={ref} {...props} />;
});

type InventoryDelete = Inventory | undefined;

interface InventoryDeleteDialogueProps {
  open: boolean;
  inventory: Inventory | undefined;
  handleClose: (inventory: InventoryDelete, value: boolean) => void;
}

const InventoryDeleteDialogue = ({
  open,
  inventory,
  handleClose,
}: InventoryDeleteDialogueProps) => {
  const deleteSingleInventoryHook = useDeleteSingleInventory();

  const deleteSingleCatalogue = async () => {
    const res: any = await deleteSingleInventoryHook.mutateAsync({
      pathParams: {
        id: inventory?._id,
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
      onClose={() => handleClose(undefined, false)}
    >
      <DialogTitle>
        <Grid container spacing={1}>
          <Grid item sx={{ display: 'flex', alignItems: 'end' }}>
            <ErrorOutline color='error' />
          </Grid>
          <Grid item xs sx={{ display: 'flex', alignItems: 'end' }}>
            <Typography variant='h4'>Confirm - Delete Inventory</Typography>
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
          <CardHeader title={<>{getStatusLabel(inventory?.status)}</>} />
          <CardContent>
            <Grid container>
              <Grid item marginRight={2}>
                <Image
                  src={inventory?.avatar || '/images/noattribute.png'}
                  alt=''
                  width={70}
                  height={70}
                />
              </Grid>
              <Grid item>
                <Typography
                  fontSize={18}
                  fontWeight={700}
                  lineHeight={2}
                  sx={{ color: '#242C51' }}
                >
                  {inventory?.name}
                </Typography>
                <Grid container direction='row'>
                  <Image src='/Vector.png' alt='' width='16.8' height='13.59' />

                  <Typography
                    paddingX={1}
                    fontSize={14}
                    fontWeight={500}
                    lineHeight={1}
                    sx={{ color: ' #8795AF' }}
                  >
                    SS185
                  </Typography>
                </Grid>
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
                  Attributes
                </Typography>
                <Typography
                  fontSize={20}
                  fontWeight={500}
                  sx={{ color: '#242C51' }}
                >
                  {inventory?.attributes}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography
                  fontSize={14}
                  fontWeight={500}
                  sx={{ color: '#8795AF' }}
                >
                  Sub Attributes
                </Typography>
                <Typography
                  fontSize={20}
                  fontWeight={500}
                  sx={{ color: '#242C51' }}
                >
                  {inventory?.subAttributes}
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
                onClick={() => handleClose(undefined, false)}
                sx={{ minWidth: 100 }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <LoadingButton
                loading={deleteSingleInventoryHook?.isLoading}
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

InventoryDeleteDialogue.propTypes = {
  open: PropTypes.bool.isRequired,
  inventory: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default InventoryDeleteDialogue;

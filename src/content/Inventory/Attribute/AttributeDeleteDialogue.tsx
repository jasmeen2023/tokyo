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
import { Card } from '@mui/material';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import { TransitionProps } from '@mui/material/transitions';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { forwardRef, ReactElement, Ref } from 'react';

import { useDeleteSingleAttribute } from '@/hooks/product/useProduct';

import { Attribute, SubAttribute } from '@/pages/inventory/[id]';

const DialogWrapper = styled(Dialog)(() => ({}));

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction='down' ref={ref} {...props} />;
});

type InventoryDelete = Attribute | undefined;

interface InventoryDeleteDialogueProps {
  open: boolean;
  attribute: Attribute | SubAttribute | undefined;
  handleClose: (inventory: InventoryDelete, value: boolean) => void;
}

const AttributeDeleteDialogue = ({
  open,
  attribute,
  handleClose,
}: InventoryDeleteDialogueProps) => {
  const deleteSingleAttributeHook = useDeleteSingleAttribute();

  const deleteSingleCatalogue = async () => {
    const res: any = await deleteSingleAttributeHook.mutateAsync({
      pathParams: {
        id: attribute?._id,
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
            <Typography variant='h4'>Confirm - Delete Attribute</Typography>
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
          <Grid
            item
            key={attribute?._id}
            container
            sx={{
              alignItems: 'center',
              bgcolor: 'transparent',
            }}
          >
            <Grid item xs>
              <Grid
                container
                sx={{
                  px: 2,
                  py: 1,
                  alignItems: 'center',
                }}
              >
                <Grid item xs={2.5}>
                  <Image
                    src={attribute?.avatar || '/images/noattribute.png'}
                    alt='attribute image'
                    width={45}
                    height={45}
                  />
                </Grid>
                <Grid item xs>
                  <Typography>{attribute?.name}</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Box
                    sx={{
                      width: 18,
                      height: 18,
                      bgcolor:
                        attribute?.status === 'active' ? '#00AB4D' : '#FFCA0B',
                      borderRadius: '50%',
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
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
                loading={deleteSingleAttributeHook?.isLoading}
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

AttributeDeleteDialogue.propTypes = {
  open: PropTypes.bool.isRequired,
  attribute: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AttributeDeleteDialogue;

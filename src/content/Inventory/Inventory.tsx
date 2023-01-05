import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import {
  Alert,
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
  InputAdornment,
  Snackbar,
  TextField,
  useTheme,
} from '@mui/material';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

import { useGetInventory } from '@/hooks/product/useProduct';

import { Inventory, openUpdateAtom } from '@/store/inventory';

import CreateInventory from './CreateInventory';
import InventoryCard from './InventoryCard';
import InventoryDeleteDialogue from './InventoryDeleteDialogue';
import UpdateInventory from './UpdateInventory';

const Inventory = () => {
  const theme = useTheme();
  const [inventory, setInventory] = useState<Inventory[]>();
  const [query, setQuery] = useState<any>({});
  const [openInventoryDelete, setOpenInventoryDelete] =
    useState<boolean>(false);
  const [inventoryDelete, setInventoryDelete] = useState<
    Inventory | undefined
  >();

  const [open, setOpen] = useState(false);
  const [openUpdate, setUpdateOpen] = useAtom(openUpdateAtom);
  const [snack, setSnack] = useState(false);
  const getInventoryHook = useGetInventory();

  const getInventory = async () => {
    const res: any = await getInventoryHook?.mutateAsync({
      query: query,
    });
    if (res?.status === 'success') {
      setInventory(res?.inventory);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDeleteInventory = (inventory, value) => {
    if (value && inventory) {
      setInventoryDelete(inventory);
      setOpenInventoryDelete(true);
    } else {
      setOpenInventoryDelete(false);
    }
  };

  const handleClose = (value) => {
    if (value) {
      setOpen(false);
      setSnack(true);
    } else {
      setOpen(false);
    }
  };
  const handleUpdateClose = (value) => {
    if (value) {
      setUpdateOpen(false);
      setSnack(true);
    } else {
      setUpdateOpen(false);
    }
  };

  const handleSnackClose = () => {
    setSnack(false);
  };

  useEffect(() => {
    getInventory();
  }, [query]);
  return (
    <>
      <Card
        sx={{
          background: '#FFF',
          borderRadius: 1,
          boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
        }}
      >
        <CardHeader
          action={
            <Grid container>
              <Grid item>
                <TextField
                  size='small'
                  onChange={(event) => {
                    if (event.target.value) {
                      setQuery((prev) => ({
                        ...prev,
                        name: event.target.value,
                      }));
                    } else {
                      setQuery((prev) => ({
                        ...Object.keys(prev)
                          .filter((key) => key !== 'name')
                          .reduce(
                            (prev, curr) => ({ ...prev, [curr]: query[curr] }),
                            {}
                          ),
                      }));
                    }
                  }}
                  placeholder='Search Inventory'
                  sx={{
                    marginRight: 1,
                    borderRadius: 7,
                    background: '#F8F9FB',
                    alignItems: 'center',
                    outlineColor: '#F8F9FB',
                    p: 0,
                  }}
                  //helperText='Some important text'
                  variant='outlined'
                  InputProps={{
                    style: { paddingRight: 0, borderRadius: 0 },
                    startAdornment: (
                      <InputAdornment position='start'>
                        <SearchTwoToneIcon
                          sx={{ color: theme.palette.grey[500] }}
                        />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position='end'
                        sx={{ m: 0, p: 0 }}
                        style={{ margin: 0, padding: 0 }}
                      >
                        <Button
                          variant='contained'
                          fullWidth
                          sx={{
                            background: '#122917',
                            height: 36,
                            color: 'white',
                            margin: 0,
                            borderRadius: 0,
                            borderTopRightRadius: 7,
                            borderBottomRightRadius: 7,
                          }}
                        >
                          Search
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    height: 36,
                  }}
                  variant='contained'
                  size='small'
                  onClick={handleClickOpen}
                >
                  Add Inventory
                </Button>
              </Grid>
            </Grid>
          }
          title={`Total Inventory: ${inventory?.length || '0'}`}
        />
        <Divider />
      </Card>

      <Grid container spacing={2} marginY={2}>
        {inventory?.map((item) => (
          <Grid key={item?._id} item lg={3}>
            <InventoryCard
              inventory={item}
              handleDelete={(inventory) =>
                handleDeleteInventory(inventory, true)
              }
            />
          </Grid>
        ))}
      </Grid>
      <CreateInventory snack={snack} open={open} onClose={handleClose} />
      <UpdateInventory
        snack={snack}
        open={openUpdate}
        onClose={handleUpdateClose}
      />
      <InventoryDeleteDialogue
        open={openInventoryDelete}
        inventory={inventoryDelete}
        handleClose={handleDeleteInventory}
      />
      <Snackbar open={snack} autoHideDuration={6000} onClose={handleSnackClose}>
        <Alert
          onClose={handleSnackClose}
          variant='filled'
          severity='success'
          sx={{ width: '100%' }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Inventory;

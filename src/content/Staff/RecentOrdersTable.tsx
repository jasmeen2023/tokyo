import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import {
  Alert,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  SelectChangeEvent,
  Snackbar,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, useState } from 'react';
import { useEffect } from 'react';

import { useGetStaff } from '@/hooks/user/useUser';

import Label from '@/components/Label';

import { User, UserStatus } from '@/store/user';

import CreateUser from './CreateUser';

dayjs.extend(localizedFormat);
const emails = ['username@gmail.com', 'user02@gmail.com'];

const CustomTableCell = styled(TableCell)(
  () => `
  
    
    color: #FFFFFF;
`
);

interface Filters {
  status?: UserStatus;
}

const getStatusLabel = (status: UserStatus): JSX.Element => {
  const map = {
    failed: {
      text: 'Failed',
      color: 'error',
    },
    completed: {
      text: 'Completed',
      color: 'success',
    },
    pending: {
      text: 'Pending',
      color: 'warning',
    },
    notinitialized: {
      test: 'Not Initialized',
      color: 'warning',
    },
  };

  const { text, color }: any = map[status];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (staff: User[], filters: Filters): User[] => {
  return staff?.filter((user) => {
    let matches = true;

    if (filters.status && user?.role !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  staff: User[],
  page: number,
  limit: number
): User[] => {
  return staff?.slice(page * limit, page * limit + limit);
};

const RecentOrdersTable: FC = () => {
  const [value, setValue] = useState<Dayjs | null>(null);
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  const [selectedStaff, setSelectedStaff] = useState<string[]>([]);

  const [open, setOpen] = useState(false);
  const [snack, setSnack] = useState(false);
  const [staff, setStaff] = useState<User[]>([]);
  const getStaffHook = useGetStaff();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    if (value) {
      setOpen(false);
      setSnack(true);
    } else {
      setOpen(false);
    }
  };

  const handleSnackClose = () => {
    setSnack(false);
  };

  const selectedBulkActions = selectedStaff.length > 0;
  const [query, setQuery] = useState<any>({
    role: ['admin', 'agent'],
  });
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: undefined,
  });

  const statusOptions = [
    {
      id: 'all',
      name: 'All',
    },
    {
      id: 'completed',
      name: 'Completed',
    },
    {
      id: 'pending',
      name: 'Pending',
    },
    {
      id: 'failed',
      name: 'Failed',
    },
  ];

  const handleStatusChange = (e: SelectChangeEvent<string>): void => {
    let value: UserStatus = 'inactive';

    if (e.target.value !== 'all') {
      value = e.target.value as UserStatus;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value,
    }));
  };

  const handleSelectAllStaff = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedStaff(
      event.target.checked ? staff?.map((user) => user?._id) : []
    );
  };

  const handleSelectOneStaff = (
    _event: ChangeEvent<HTMLInputElement>,
    staffId: string
  ): void => {
    if (!selectedStaff.includes(staffId)) {
      setSelectedStaff((prevSelected) => [...prevSelected, staffId]);
    } else {
      setSelectedStaff((prevSelected) =>
        prevSelected.filter((id) => id !== staffId)
      );
    }
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredStaff = applyFilters(staff!, filters);
  const paginatedStaff = applyPagination(filteredStaff, page, limit);
  const selectedSomeStaff =
    selectedStaff.length > 0 && selectedStaff.length < staff?.length;
  const selectedAllStaff = selectedStaff.length === staff?.length;
  const theme = useTheme();
  const router = useRouter();

  const getStaff = async () => {
    const res: any = await getStaffHook.mutateAsync({
      query: query,
    });
    if (res?.status === 'success') {
      setStaff(res?.users);
    }
  };

  useEffect(() => {
    getStaff();
  }, [query]);

  return (
    <Card
      sx={{
        backgroundColor: 'transparent',
        borderRadius: 1,
        boxShadow: 'none',
      }}
    >
      <CardHeader
        sx={{
          background: '#FFF',
          borderRadius: 1,
          boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
        }}
        action={
          <Grid container sx={{ alignItems: 'center' }}>
            <Grid item>
              <TextField
                size='small'
                onChange={(event) => {
                  if (event.target.value) {
                    setQuery((prev) => ({ ...prev, name: event.target.value }));
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
                placeholder='Search Staff'
                sx={{
                  marginRight: 1,
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
                sx={{ height: 36 }}
                variant='contained'
                size='small'
                onClick={handleClickOpen}
              >
                Add User
              </Button>
            </Grid>
          </Grid>
        }
        title={
          <Grid container direction='row' spacing={1}>
            <Grid item>
              <Button
                onClick={() => {
                  if (query.role.includes('admin')) {
                    setQuery((prev) => ({
                      ...prev,
                      role: prev.role.filter((role) => role !== 'admin'),
                    }));
                  } else {
                    const role = query.role;
                    role.push('admin');
                    setQuery((prev) => ({
                      ...prev,
                      role,
                    }));
                  }
                }}
                sx={{ height: 36 }}
                variant={
                  query.role.includes('admin') ? 'contained' : 'outlined'
                }
                size='small'
              >
                Admin
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => {
                  if (query.role.includes('agent')) {
                    setQuery((prev) => ({
                      ...prev,
                      role: prev.role.filter((role) => role !== 'agent'),
                    }));
                  } else {
                    const role = query.role;
                    role.push('agent');
                    setQuery((prev) => ({
                      ...prev,
                      role,
                    }));
                  }
                }}
                sx={{ height: 36 }}
                variant={
                  query.role.includes('agent') ? 'contained' : 'outlined'
                }
                size='small'
              >
                Field Agent
              </Button>
            </Grid>
          </Grid>
        }
      />
      <Divider />
      <TableContainer
        sx={{
          marginY: 2,

          background: '#FFF',
          borderRadius: 1,
          boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
        }}
      >
        <Table>
          <TableHead sx={{ background: '#242C51' }}>
            <TableRow sx={{ color: '#FFF' }}>
              {/* <TableCell padding='checkbox'>
                <Checkbox
                  color='primary'
                  checked={selectedAllStaff}
                  indeterminate={selectedSomeStaff}
                  onChange={handleSelectAllStaff}
                />
              </TableCell> */}
              <CustomTableCell>Field Agent&apos;s Name</CustomTableCell>
              <CustomTableCell>Role</CustomTableCell>
              <CustomTableCell>Created Date & Time</CustomTableCell>
              <CustomTableCell>Last Active Date & Time</CustomTableCell>

              <CustomTableCell align='right'>Status</CustomTableCell>
              <CustomTableCell align='right'>Actions</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedStaff?.map((staff) => {
              const isStaffSelected = selectedStaff.includes(staff?._id);
              return (
                <TableRow
                  hover
                  key={staff?._id}
                  selected={isStaffSelected}
                  onClick={() => {
                    router?.push(`/fieldagents/${staff?._id}`);
                  }}
                >
                  <TableCell>
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {staff.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {staff.role === 'agent'
                        ? _.capitalize('field agent')
                        : _.capitalize(staff.role)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {dayjs(staff?.createdAt).format('LL')}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant='body2'
                      color='text.primary'
                      fontWeight='bold'
                      noWrap
                    >
                      {dayjs(staff?.createdAt).format('LL')}
                    </Typography>
                  </TableCell>
                  <TableCell align='right'>
                    {/* {getStatusLabel(staff?.status)} */}
                  </TableCell>
                  <TableCell align='right'>
                    <IconButton color='primary' sx={{ p: 0.5 }}>
                      <MoreHorizTwoToneIcon />
                    </IconButton>
                    {/* <Tooltip title='Edit Order' arrow>
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary,
                          },
                          color: theme.palette.primary.main,
                        }}
                        color='inherit'
                        size='small'
                      >
                        <EditTwoTone fontSize='small' />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title='Delete Order' arrow>
                      <IconButton
                        sx={{
                          '&:hover': { background: theme.colors.error.lighter },
                          color: theme.palette.error.main,
                        }}
                        color='inherit'
                        size='small'
                      >
                        <DeleteTwoTone fontSize='small' />
                      </IconButton>
                    </Tooltip> */}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <CreateUser snack={snack} open={open} onClose={handleClose} />
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
      <Box p={2}>
        <TablePagination
          component='div'
          count={filteredStaff?.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
  );
};

RecentOrdersTable.propTypes = {};

RecentOrdersTable.defaultProps = {};

export default RecentOrdersTable;

import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  SelectChangeEvent,
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
import { DatePicker } from 'antd';
import { format } from 'date-fns';
import { Dayjs } from 'dayjs';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { ChangeEvent, FC, useState } from 'react';

import Label from '@/components/Label';

import { CryptoOrder, CryptoOrderStatus } from '@/models/crypto_order';

interface RecentOrdersTableProps {
  className?: string;
  cryptoOrders: CryptoOrder[];
}

const CustomTableCell = styled(TableCell)(
  () => `
  
    
    color: #FFFFFF;
`
);

interface Filters {
  status?: CryptoOrderStatus;
}

const getStatusLabel = (cryptoOrderStatus: CryptoOrderStatus): JSX.Element => {
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

  const { text, color }: any = map[cryptoOrderStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (
  cryptoOrders: CryptoOrder[],
  filters: Filters
): CryptoOrder[] => {
  return cryptoOrders.filter((cryptoOrder) => {
    let matches = true;

    if (filters.status && cryptoOrder.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  cryptoOrders: CryptoOrder[],
  page: number,
  limit: number
): CryptoOrder[] => {
  return cryptoOrders.slice(page * limit, page * limit + limit);
};

const RecentOrdersTable: FC<RecentOrdersTableProps> = ({ cryptoOrders }) => {
  const [value, setValue] = useState<Dayjs | null>(null);
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
    []
  );
  const selectedBulkActions = selectedCryptoOrders.length > 0;
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
    let value: CryptoOrderStatus = 'notinitialized';

    if (e.target.value !== 'all') {
      value = e.target.value as CryptoOrderStatus;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value,
    }));
  };

  const handleSelectAllCryptoOrders = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedCryptoOrders(
      event.target.checked
        ? cryptoOrders.map((cryptoOrder) => cryptoOrder.id)
        : []
    );
  };

  const handleSelectOneCryptoOrder = (
    _event: ChangeEvent<HTMLInputElement>,
    cryptoOrderId: string
  ): void => {
    if (!selectedCryptoOrders.includes(cryptoOrderId)) {
      setSelectedCryptoOrders((prevSelected) => [
        ...prevSelected,
        cryptoOrderId,
      ]);
    } else {
      setSelectedCryptoOrders((prevSelected) =>
        prevSelected.filter((id) => id !== cryptoOrderId)
      );
    }
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredCryptoOrders = applyFilters(cryptoOrders, filters);
  const paginatedCryptoOrders = applyPagination(
    filteredCryptoOrders,
    page,
    limit
  );
  const selectedSomeCryptoOrders =
    selectedCryptoOrders.length > 0 &&
    selectedCryptoOrders.length < cryptoOrders.length;
  const selectedAllCryptoOrders =
    selectedCryptoOrders.length === cryptoOrders.length;
  const theme = useTheme();
  const router = useRouter();

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
          <Grid container>
            <Grid item>
              <TextField
                size='small'
                placeholder='Search Customer name'
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
              <DatePicker style={{ height: 36 }}></DatePicker>
            </Grid>
          </Grid>
        }
        title='Total Order : 126'
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
                  checked={selectedAllCryptoOrders}
                  indeterminate={selectedSomeCryptoOrders}
                  onChange={handleSelectAllCryptoOrders}
                />
              </TableCell> */}
              <CustomTableCell>Customer Name</CustomTableCell>
              <CustomTableCell>Product Type</CustomTableCell>
              <CustomTableCell>Requet Date & Time</CustomTableCell>
              <CustomTableCell>Product Name</CustomTableCell>

              <CustomTableCell align='right'>Product Price</CustomTableCell>
              <CustomTableCell>Field Agent</CustomTableCell>
              <CustomTableCell align='right'>Status</CustomTableCell>
              <CustomTableCell align='right'>Actions</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCryptoOrders.map((cryptoOrder) => {
              const isCryptoOrderSelected = selectedCryptoOrders.includes(
                cryptoOrder.id
              );
              return (
                <TableRow
                  hover
                  key={cryptoOrder.id}
                  selected={isCryptoOrderSelected}
                  onClick={() => {
                    router?.push(`/orders/${cryptoOrder?.id}`);
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
                      {cryptoOrder.customerName}
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
                      {cryptoOrder.productType}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant='body2'
                      color='text.primary'
                      fontWeight='bold'
                      noWrap
                    >
                      {format(cryptoOrder.orderDate, 'dd/MM/yyyy hh:mm:ss')}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant='body2'
                      color='text.primary'
                      fontWeight='bold'
                      noWrap
                    >
                      {cryptoOrder.productName}
                    </Typography>
                  </TableCell>

                  <TableCell align='right'>
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {cryptoOrder.cryptoCurrency} {cryptoOrder.amountCrypto}
                    </Typography>
                    {/* <Typography variant='body2' color='text.secondary' noWrap>
                      {numeral(cryptoOrder.amount).format(
                        `${cryptoOrder.currency}0,0.00`
                      )}
                    </Typography> */}
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {cryptoOrder.fieldAgent}
                    </Typography>
                  </TableCell>
                  <TableCell align='right'>
                    {getStatusLabel(cryptoOrder.status)}
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
      <Box p={2}>
        <TablePagination
          component='div'
          count={filteredCryptoOrders.length}
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

RecentOrdersTable.propTypes = {
  cryptoOrders: PropTypes.array.isRequired,
};

RecentOrdersTable.defaultProps = {
  cryptoOrders: [],
};

export default RecentOrdersTable;

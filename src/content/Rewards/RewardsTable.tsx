import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import {
  Box,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormLabel,
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
import { Avatar, Button, Grid } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { format } from 'date-fns';
import { Dayjs } from 'dayjs';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { ChangeEvent, FC, useState } from 'react';

import Label from '@/components/Label';
import OutLinedLabel from '@/components/OutLinedLabel';

import { Reward } from '@/models/reward';
import { RewardStatus } from '@/models/reward';
import SearchIcon from '@mui/icons-material/Search';
import { ModeEditOutlineOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

interface RecentOrdersTableProps {
  className?: string;
  rewards: Reward[];
}

const CustomTableCell = styled(TableCell)(() => ({
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '175%',
  color: '#263238',
  textTransform: 'none',
}));

interface Filters {
  status?: RewardStatus;
}

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(2.345)};
    height: ${theme.spacing(2)};
`
);

const getStatusLabel = (RewardStatus: RewardStatus): JSX.Element => {
  const map = {
    registered: { text: 'Registered', color: '#8AE034' },
    expired: { text: 'Expired', color: '#FEBD40' },
    invited: { text: 'Invited', color: '#FF4C61' },
  };

  const { text, color }: any = map[RewardStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (reports: Reward[], filters: Filters): Reward[] => {
  return reports.filter((singleReport) => {
    let matches = true;

    if (filters.status && singleReport.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  Rewards: Reward[],
  page: number,
  limit: number
): Reward[] => {
  return Rewards.slice(page * limit, page * limit + limit);
};

const useStyles = makeStyles((theme) => ({
  cell_short: {
    // width: '100%',
    borderRight: '2px solid rgba(196, 196, 196, 0.4)',
  },
  // row_border: {
  //   borderBottom: '2px dashed rgba(151, 151, 151, 0.24)',
  // },
}));
const Input = styled('input')({
  display: 'none',
});

const InputBoxes = styled(TextField)(({ theme }) => ({
  background: '#FFFFFF',
  borderRadius: '4px',
}));

export function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog fullWidth onClose={handleClose} open={open}>
      <DialogTitle
        sx={{
          fontWeight: 600,
          fontSize: '18px',
          lineHeight: '24px',
          textAlign: 'left',
          background: '#FFF',
        }}
      >
        Invite
      </DialogTitle>
      <DialogContent sx={{ background: '#FFF' }}>
        <Box
          component='form'
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete='off'
        >
          <TextField id='email' label='Email' defaultValue='Email' />
          <TextField id='name' label='Name' defaultValue='Name' />
          <TextField
            id='manager'
            label='Relationship Manager'
            defaultValue='Relationship Manager'
          />
          <TextField id='mobile' label='Mobile No.' defaultValue='Mobile No.' />
        </Box>
      </DialogContent>

      <DialogActions sx={{ background: '#FFF' }}>
        <Button
          sx={{
            background:
              'linear-gradient(91.88deg, #4B65B2 2.83%, #13BBE6 100%)',
            borderRadius: '5px',

            color: '#FFF',
          }}
        >
          Invite
        </Button>
        <Button
          onClick={handleClose}
          sx={{
            background:
              'linear-gradient(91.88deg, #4B65B2 2.83%, #13BBE6 100%)',
            borderRadius: '5px',

            color: '#FFF',
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  //   selectedValue: PropTypes.string.isRequired,
};

const RewardsTable: FC<RecentOrdersTableProps> = ({ rewards }) => {
  const [value, setValue] = useState<Dayjs | null>(null);
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  const [selectedRewards, setSelectedRewards] = useState<string[]>([]);
  const selectedBulkActions = selectedRewards.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: undefined,
  });

  const handleStatusChange = (e: SelectChangeEvent<string>): void => {
    let value: RewardStatus = 'invited';

    if (e.target.value !== 'all') {
      value = e.target.value as RewardStatus;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value,
    }));
  };

  const handleSelectAllRewards = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedRewards(
      event.target.checked
        ? rewards.map((singleReward: Reward) => singleReward.id)
        : []
    );
  };

  const handleSelectOneReward = (
    _event: ChangeEvent<HTMLInputElement>,
    singleReward: string
  ): void => {
    if (!selectedRewards.includes(singleReward)) {
      setSelectedRewards((prevSelected) => [...prevSelected, singleReward]);
    } else {
      setSelectedRewards((prevSelected) =>
        prevSelected.filter((id) => id !== singleReward)
      );
    }
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredRewards = applyFilters(rewards, filters);
  const paginatedRewards = applyPagination(filteredRewards, page, limit);
  const selectedSomeRewards =
    selectedRewards.length > 0 && selectedRewards.length < rewards.length;
  const selectedAllRewards = selectedRewards.length === rewards.length;
  const theme = useTheme();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [selectedValue, setSelectedValue] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <Card
      sx={{
        backgroundColor: 'transparent',
        borderRadius: 1,
        boxShadow: 'none',
      }}
    >
      <Grid container>
        <Grid item xs={9}>
          <Grid
            spacing={2}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '175%',
                color: '#263238',
                marginX: 1,
              }}
            >
              Date Range
            </Typography>
          </Grid>
          <Grid sx={{ display: 'flex', alignItems: 'center', marginY: 1 }}>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '19px',
                textTransform: 'capitalize',
                color: '#2C2937',
                background: '#FFFFFF',
                border: '1px solid #4B65B2',
                borderRadius: '20px',
                padding: '5px 15px',
                margin: 0.5,
              }}
            >
              Created One
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={3}>
          <Grid
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <TextField
              id='standard-basic'
              variant='standard'
              placeholder='Search postcode, Name'
              sx={{ borderBottom: '0.5px solid #979797' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              size='medium'
              onClick={handleClickOpen}
              sx={{
                background:
                  'linear-gradient(275.52deg, #13BBE6 17.29%, #4B65B2 82.37%)',
                borderRadius: '4px',
                marginTop: 1,
                color: '#FFF',
                paddingX: 4,
              }}
            >
              Invite
            </Button>
            <SimpleDialog
              //   selectedValue={selectedValue}
              open={open}
              onClose={handleClose}
            />
          </Grid>
        </Grid>
      </Grid>

      <TableContainer
        sx={{
          marginY: 2,
          background: '#FFF',
          borderRadius: 1,
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding='checkbox'>
                <Checkbox
                  color='primary'
                  checked={selectedAllRewards}
                  indeterminate={selectedSomeRewards}
                  onChange={handleSelectAllRewards}
                />
              </TableCell>
              <CustomTableCell>Date</CustomTableCell>
              <CustomTableCell>Relationship Manager</CustomTableCell>
              <CustomTableCell>Originator Name</CustomTableCell>
              <CustomTableCell>Originator Contact</CustomTableCell>
              <CustomTableCell>Friend Name</CustomTableCell>
              <CustomTableCell>Phone Number</CustomTableCell>
              <CustomTableCell>Email ID</CustomTableCell>
              <CustomTableCell>Case ID</CustomTableCell>
              <CustomTableCell>Status</CustomTableCell>
              <CustomTableCell align='right'>Actions</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRewards.map((singleReward) => {
              const isRewardSelected = selectedRewards.includes(
                singleReward.id
              );
              return (
                <TableRow
                  hover
                  key={singleReward.id}
                  selected={isRewardSelected}
                >
                  <TableCell padding='checkbox'>
                    <Checkbox
                      color='primary'
                      checked={isRewardSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneReward(event, singleReward.id)
                      }
                      value={isRewardSelected}
                    />
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleReward?.id}`);
                    }}
                  >
                    <Typography
                      variant='body2'
                      color='text.primary'
                      fontWeight='bold'
                      noWrap
                    >
                      {format(singleReward.date, 'dd/MM/yyyy hh:mm:ss')}
                    </Typography>
                  </TableCell>

                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleReward?.id}`);
                    }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleReward.relationshipManager}
                    </Typography>
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleReward?.id}`);
                    }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleReward.originatorName}
                    </Typography>
                  </TableCell>

                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleReward?.id}`);
                    }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleReward.originatorContact}
                    </Typography>
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleReward?.id}`);
                    }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleReward.friendName}
                    </Typography>
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleReward?.id}`);
                    }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleReward.phoneNumber}
                    </Typography>
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleReward?.id}`);
                    }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleReward.emailId}
                    </Typography>
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleReward?.id}`);
                    }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleReward.caseId}
                    </Typography>
                  </TableCell>

                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleReward?.id}`);
                    }}
                  >
                    {getStatusLabel(singleReward.status)}
                  </TableCell>
                  <TableCell
                    align='right'
                    sx={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                    }}
                  >
                    <IconButton color='primary' sx={{ p: 0.5 }}>
                      <MoreHorizTwoToneIcon />
                    </IconButton>
                    <IconButton color='primary' sx={{ p: 1 }}>
                      <AvatarWrapper
                        src='/assets/svg/eye.svg'
                        variant='square'
                      />
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
          count={filteredRewards.length}
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

RewardsTable.propTypes = {
  rewards: PropTypes.array.isRequired,
};

RewardsTable.defaultProps = {
  rewards: [],
};

export default RewardsTable;

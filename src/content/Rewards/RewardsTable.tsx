import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import {
  Box,
  Card,
  IconButton,
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

interface RecentOrdersTableProps {
  className?: string;
  rewards: Reward[];
}

const CustomTableCell = styled(TableCell)(() => ({
  fontWeight: 400,
  fontSize: 11,
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

  return (
    <Card
      sx={{
        backgroundColor: 'transparent',
        borderRadius: 1,
        boxShadow: 'none',
      }}
    >
      <Grid container>
        <Grid item container xs={9}>
          <Grid item container xs>
            <Grid item xs={12}>
              <Typography>Date Filter</Typography>
            </Grid>
            <Grid item>
              <OutLinedLabel color='#4B65B2'>Created Date</OutLinedLabel>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs></Grid>
        <Grid item xs={2}>
          <Grid item container xs>
            <Grid item xs>
              <TextField size='small' />
            </Grid>
            <Grid item xs>
              <Button variant='contained' size='small'>
                Invite
              </Button>
            </Grid>
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

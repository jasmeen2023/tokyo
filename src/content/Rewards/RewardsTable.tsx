import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import {
  Box,
  Card,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
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
import { Button, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { format } from 'date-fns';
import { Dayjs } from 'dayjs';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { ChangeEvent, FC, useState } from 'react';
import Label from '@/components/Label';
import { Reward } from '@/models/reward';
import { RewardStatus } from '@/models/reward';
import SearchIcon from '@mui/icons-material/Search';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import RewardsDialog from './RewardsDialog';
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

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    color: 'rgba(0, 0, 0, 0.87)',
    background: '#FFFFFF',
    boxShadow: '0px 0px 11px rgba(0, 0, 0, 0.25)',
  },
}));

interface Filters {
  status?: RewardStatus;
}

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

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openEditMenu, setOpenEditMenu] = useState(null);

  const dummyMenuItems = [
    {
      title: 'View Reward',
    },
  ];

  const menuItems = [
    {
      title: 'View menu',
    },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickMenu = (e) => {
    setOpenEditMenu(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
    setOpenEditMenu(null);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <Card
      sx={{
        backgroundColor: 'transparent',
        borderRadius: 1,
        boxShadow: 'none',
      }}
    >
      <Grid container xs={12}>
        <Grid container item xs={8} alignItems='end'>
          <Grid item>
            <Typography
              sx={{
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '175%',
                color: '#263238',
              }}
            >
              Date Range
            </Typography>
            <Grid sx={{ display: 'flex', alignItems: 'center' }}>
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
                  padding: '7px 16px',
                  margin: 0.5,
                }}
              >
                Created Date
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          item
          xs={4}
          display='flex'
          justifyContent='end'
          alignItems='end'
          spacing={1}
        >
          <Grid item>
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
              onClick={handleClickOpen}
              sx={{
                background:
                  'linear-gradient(275.52deg, #13BBE6 17.29%, #4B65B2 82.37%)',
                borderRadius: '4px',
                marginX: 2,
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#FFFFFF',
                width: '143px',
                height: '36px',
              }}
            >
              Invite
            </Button>
            <RewardsDialog open={open} onClose={handleClose} />
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
          <TableHead sx={{ border: '1px solid #D7D7D7' }}>
            <TableRow>
              {/* <TableCell padding='checkbox'>
                <Checkbox
                  color='primary'
                  checked={selectedAllRewards}
                  indeterminate={selectedSomeRewards}
                  onChange={handleSelectAllRewards}
                />
              </TableCell> */}
              <CustomTableCell>Date</CustomTableCell>
              <CustomTableCell>Relationship Manager</CustomTableCell>
              <CustomTableCell>Originator Name</CustomTableCell>
              <CustomTableCell>Originator Contact</CustomTableCell>
              <CustomTableCell>Friend Name</CustomTableCell>
              <CustomTableCell>Phone Number</CustomTableCell>
              <CustomTableCell>Email ID</CustomTableCell>
              <CustomTableCell>Case ID</CustomTableCell>
              <CustomTableCell>Status</CustomTableCell>
              <CustomTableCell>Actions</CustomTableCell>
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
                  sx={{
                    background: '#FFFFFF',
                    border: '1px solid #D7D7D7',
                  }}
                >
                  {/* <TableCell padding='checkbox'>
                    <Checkbox
                      color='primary'
                      checked={isRewardSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneReward(event, singleReward.id)
                      }
                      value={isRewardSelected}
                    />
                  </TableCell> */}
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
                    // onClick={() => {
                    //   router?.push(`/quotations/${singleReward?.id}`);
                    // }}
                    sx={{ display: 'flex', alignItems: 'center' }}
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
                    {/* <LightTooltip
                      title={
                        <Box>
                          <Grid
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                          >
                            <Typography
                              sx={{
                                fontWeight: 600,
                                fontSize: '14px',
                                lineHeight: '26px',
                                color: '#292D32',
                              }}
                            >
                              Case ID
                            </Typography>
                            <IconButton color='secondary' sx={{ p: 0.5 }}>
                              <Close
                                sx={{
                                  background: '#DDD',
                                  borderRadius: '50%',
                                  padding: 0.5,
                                }}
                              />
                            </IconButton>
                          </Grid>

                          <TextField size='small' placeholder='-'></TextField>

                          <Grid
                            display='flex'
                            alignItems='center'
                            justifyContent='flex-end'
                          >
                            <Button
                              size='small'
                              sx={{
                                background:
                                  'linear-gradient(275.52deg, #13BBE6 17.29%, #4B65B2 82.37%)',
                                borderRadius: '4px',
                                color: '#FFF',
                                my: 1,
                              }}
                            >
                              Update
                            </Button>
                          </Grid>
                        </Box>
                      }
                    >
                      <IconButton color='primary' sx={{ p: 0.5 }}>
                        <EditTwoToneIcon />
                      </IconButton>
                    </LightTooltip> */}
                    <IconButton color='primary' sx={{ p: 0.5 }}>
                      <EditTwoToneIcon onClick={handleClickMenu} />
                    </IconButton>
                    <Menu
                      id='simple-menu'
                      // openEditMenu={openEditMenu}
                      keepMounted
                      open={Boolean(openEditMenu)}
                      onClose={handleClose}
                      sx={{ borderRadius: 1 }}
                    >
                      {menuItems.map((item) => (
                        <MenuItem
                          onClick={handleClose}
                          key={item.title}
                          value={item.title}
                        >
                          {item.title}
                        </MenuItem>
                      ))}
                    </Menu>
                  </TableCell>

                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleReward?.id}`);
                    }}
                  >
                    {getStatusLabel(singleReward.status)}
                  </TableCell>
                  <TableCell>
                    <IconButton color='primary' sx={{ p: 0.5 }}>
                      <MoreHorizTwoToneIcon onClick={handleClick} />
                    </IconButton>
                    <Menu
                      id='simple-menu'
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      sx={{ borderRadius: 1 }}
                    >
                      {dummyMenuItems.map((item) => (
                        <MenuItem
                          onClick={handleClose}
                          key={item.title}
                          value={item.title}
                        >
                          {item.title}
                        </MenuItem>
                      ))}
                    </Menu>
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

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

import { Task } from '@/models/task';
import { TaskStatus } from '@/models/task';

interface RecentOrdersTableProps {
  className?: string;
  tasks: Task[];
}

const CustomTableCell = styled(TableCell)(() => ({
  fontWeight: 400,
  fontSize: 11,
}));

interface Filters {
  status?: TaskStatus;
}

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(2.345)};
    height: ${theme.spacing(2)};
`
);

const getStatusLabel = (TaskStatus: TaskStatus): JSX.Element => {
  const map = {
    completed: { text: 'Completed', color: '#8AE034' },
    inprogress: { text: 'In Progress', color: '#FEBD40' },
    pending: { text: 'Pending', color: '#FF4C61' },
  };

  const { text, color }: any = map[TaskStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (tasks: Task[], filters: Filters): Task[] => {
  return tasks.filter((singleTask) => {
    let matches = true;

    if (filters.status && singleTask.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  Tasks: Task[],
  page: number,
  limit: number
): Task[] => {
  return Tasks.slice(page * limit, page * limit + limit);
};

const TasksTable: FC<RecentOrdersTableProps> = ({ tasks }) => {
  const [value, setValue] = useState<Dayjs | null>(null);
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
  const selectedBulkActions = selectedTasks.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: undefined,
  });

  const handleStatusChange = (e: SelectChangeEvent<string>): void => {
    let value: TaskStatus = 'pending';

    if (e.target.value !== 'all') {
      value = e.target.value as TaskStatus;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value,
    }));
  };

  const handleSelectAllTasks = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedTasks(
      event.target.checked ? tasks.map((singleTask: Task) => singleTask.id) : []
    );
  };

  const handleSelectOneTask = (
    _event: ChangeEvent<HTMLInputElement>,
    singleTask: string
  ): void => {
    if (!selectedTasks.includes(singleTask)) {
      setSelectedTasks((prevSelected) => [...prevSelected, singleTask]);
    } else {
      setSelectedTasks((prevSelected) =>
        prevSelected.filter((id) => id !== singleTask)
      );
    }
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredTasks = applyFilters(tasks, filters);
  const paginatedTasks = applyPagination(filteredTasks, page, limit);
  const selectedSomeTasks =
    selectedTasks.length > 0 && selectedTasks.length < tasks.length;
  const selectedAllTasks = selectedTasks.length === tasks.length;
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
                Add Task
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
                  checked={selectedAllTasks}
                  indeterminate={selectedSomeTasks}
                  onChange={handleSelectAllTasks}
                />
              </TableCell>
              <CustomTableCell>Due Date</CustomTableCell>
              <CustomTableCell>Case ID</CustomTableCell>
              <CustomTableCell>Assigned By</CustomTableCell>
              <CustomTableCell>ANote</CustomTableCell>
              <CustomTableCell>Status</CustomTableCell>
              <CustomTableCell align='right'>Actions</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedTasks.map((singleTask) => {
              const isTaskSelected = selectedTasks.includes(singleTask.id);
              return (
                <TableRow hover key={singleTask.id} selected={isTaskSelected}>
                  <TableCell padding='checkbox'>
                    <Checkbox
                      color='primary'
                      checked={isTaskSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneTask(event, singleTask.id)
                      }
                      value={isTaskSelected}
                    />
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleTask?.id}`);
                    }}
                  >
                    <Typography
                      variant='body2'
                      color='text.primary'
                      fontWeight='bold'
                      noWrap
                    >
                      {format(singleTask.dueDate, 'dd/MM/yyyy hh:mm:ss')}
                    </Typography>
                  </TableCell>

                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleTask?.id}`);
                    }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleTask.caseId}
                    </Typography>
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleTask?.id}`);
                    }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleTask.assignedBy}
                    </Typography>
                  </TableCell>

                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleTask?.id}`);
                    }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleTask.name}
                    </Typography>
                  </TableCell>

                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleTask?.id}`);
                    }}
                  >
                    {getStatusLabel(singleTask.status)}
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
          count={filteredTasks.length}
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

TasksTable.propTypes = {
  tasks: PropTypes.array.isRequired,
};

TasksTable.defaultProps = {
  tasks: [],
};

export default TasksTable;

import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import {
  Box,
  Card,
  DialogActions,
  DialogContent,
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
  TextareaAutosize,
  Typography,
  useTheme,
} from '@mui/material';
import { Avatar, Button, Grid } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { format } from 'date-fns';
import { Dayjs } from 'dayjs';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, useState } from 'react';

import Label from '@/components/Label';
import OutLinedLabel from '@/components/OutLinedLabel';

import { Task } from '@/models/task';
import { TaskStatus } from '@/models/task';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { PersonSearch } from '@mui/icons-material';
interface RecentOrdersTableProps {
  className?: string;
  tasks: Task[];
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

const Input = styled('input')({
  display: 'none',
});

const InputBoxes = styled(TextareaAutosize)(({ theme }) => ({
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
          fontSize: '16px',
          lineHeight: '24px',
          textAlign: 'left',
          background: '#FFF',
        }}
      >
        Next Follow Up
      </DialogTitle>
      <DialogContent sx={{ background: '#FFF' }}>
        <Grid
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginY: 1,
          }}
        >
          <Grid item>
            <FormLabel
              sx={{
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '21px',
                textTransform: 'capitalize',
                color: '#4B473E',
              }}
            >
              Select Follow-up
            </FormLabel>
            <TextField
              size='small'
              sx={{ marginY: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <IconButton>
                      <CalendarMonthIcon sx={{ color: '#4B65B2' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              placeholder='SEP 10, 2022'
            ></TextField>
          </Grid>
          <Grid item>
            <FormLabel
              sx={{
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '21px',
                textTransform: 'capitalize',
                color: '#4B473E',
              }}
            >
              Assign
            </FormLabel>
            <TextField
              size='small'
              sx={{ marginY: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <IconButton>
                      <PersonSearch sx={{ color: '#4B65B2' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              placeholder='Assign BRM/PO'
            ></TextField>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Grid item>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '21px',
                textTransform: 'capitalize',
                color: '#4B473E',
              }}
            >
              Note
            </Typography>
          </Grid>
          <Grid item>
            <InputBoxes
              minRows={10}
              style={{ width: 450 }}
              sx={{
                borderRadius: '4px',
              }}
            ></InputBoxes>
          </Grid>
        </Grid>
        <DialogActions sx={{ background: '#FFF' }}>
          <Button
            sx={{
              background:
                'linear-gradient(91.88deg, #4B65B2 2.83%, #13BBE6 100%)',
              borderRadius: '5px',

              color: '#FFF',
            }}
          >
            Submit
          </Button>
        </DialogActions>

        <Table sx={{ background: '#FFF' }}>
          <TableBody sx={{ background: '#FFF' }}>
            <TableRow sx={{ background: '#FFF' }}>
              <TableCell
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '13px',
                  lineHeight: '17px',
                  color: '#4B473E',
                  borderBottom: '1px dashed #C4C4C4',
                }}
              >
                Date & time
              </TableCell>
              <TableCell
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '13px',
                  lineHeight: '17px',
                  color: '#4B473E',
                  borderBottom: '1px dashed #C4C4C4',
                }}
              >
                Followup Summary
              </TableCell>
            </TableRow>
            <TableRow sx={{ background: '#FFF' }}>
              <TableCell
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '13px',
                  lineHeight: '17px',
                  color: '#4B473E',
                  borderBottom: '1px dashed #C4C4C4',
                }}
              >
                2 Sep’22 12:39 PM
              </TableCell>
              <TableCell
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '13px',
                  lineHeight: '17px',
                  color: '#4B473E',
                  borderBottom: '1px dashed #C4C4C4',
                }}
              >
                Duis proin eu sagittis fermentum eget pharetra libero augue dui.
                Suscipit volutpat fames tincidunt.
              </TableCell>
            </TableRow>
            <TableRow sx={{ background: '#FFF' }}>
              <TableCell
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '13px',
                  lineHeight: '17px',
                  color: '#4B473E',
                  borderBottom: '1px dashed #C4C4C4',
                }}
              >
                12 Sep’22 12:39 PM
              </TableCell>
              <TableCell
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '13px',
                  lineHeight: '17px',
                  color: '#4B473E',
                  borderBottom: '1px dashed #C4C4C4',
                }}
              >
                Duis proin eu sagittis fermentum eget pharetra libero augue dui.
                Suscipit volutpat fames tincidunt.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>

      <DialogActions sx={{ background: '#FFF' }}>
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
              Assign Task
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

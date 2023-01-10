import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import {
  Box,
  Card,
  FormControl,
  IconButton,
  Input,
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
import SearchIcon from '@mui/icons-material/Search';

import { Case } from '@/models/case';
import { CaseStatus } from '@/models/case';
import Image from 'next/image';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

interface RecentOrdersTableProps {
  className?: string;
  cases: Case[];
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
  status?: CaseStatus;
}

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(2.345)};
    height: ${theme.spacing(2)};
`
);

const getStatusLabel = (CaseStatus: CaseStatus): JSX.Element => {
  const map = {
    AFI: { text: 'Awaiting Further Information ', color: '#FEBD40' },
    NL: { text: 'New Lead ', color: '#33D69F' },
    offered: { text: 'Offered', color: '#8B72F8' },
    PreOP: { text: 'Pre Offer Processing', color: '#8AE034' },
    PosOP: { text: 'Post Offer Processing', color: '#F95CCD' },
    closed: { text: 'Closed', color: '#FF7A00' },
    rejected: { text: 'Rejected', color: '#FF4C61' },
  };

  const { text, color }: any = map[CaseStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (cases: Case[], filters: Filters): Case[] => {
  return cases.filter((singleCase) => {
    let matches = true;

    if (filters.status && singleCase.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  Cases: Case[],
  page: number,
  limit: number
): Case[] => {
  return Cases.slice(page * limit, page * limit + limit);
};

const CasesTable: FC<RecentOrdersTableProps> = ({ cases }) => {
  const [value, setValue] = useState<Dayjs | null>(null);
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  const [selectedCases, setSelectedCases] = useState<string[]>([]);
  const selectedBulkActions = selectedCases.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: undefined,
  });

  const handleStatusChange = (e: SelectChangeEvent<string>): void => {
    let value: CaseStatus = 'offered';

    if (e.target.value !== 'all') {
      value = e.target.value as CaseStatus;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value,
    }));
  };

  const handleSelectAllCases = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedCases(
      event.target.checked ? cases.map((singleCase: Case) => singleCase.id) : []
    );
  };

  const handleSelectOneCase = (
    _event: ChangeEvent<HTMLInputElement>,
    singleCase: string
  ): void => {
    if (!selectedCases.includes(singleCase)) {
      setSelectedCases((prevSelected) => [...prevSelected, singleCase]);
    } else {
      setSelectedCases((prevSelected) =>
        prevSelected.filter((id) => id !== singleCase)
      );
    }
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredCases = applyFilters(cases, filters);
  const paginatedCases = applyPagination(filteredCases, page, limit);
  const selectedSomeCases =
    selectedCases.length > 0 && selectedCases.length < cases.length;
  const selectedAllCases = selectedCases.length === cases.length;
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
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Grid
            container
            spacing={2}
            sx={{
              display: 'flex',
              alignItems: 'center',
              margin: 1,
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
              Case Filters
            </Typography>

            <Typography
              sx={{
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '175%',
                color: '#263238',
                marginLeft: 44,
              }}
            >
              Application
            </Typography>

            <Typography
              sx={{
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '175%',
                color: '#263238',
                marginLeft: 8,
              }}
            >
              Data Range
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
                padding: '4px 4px',
                margin: 0.5,
              }}
            >
              Introducers
            </Typography>

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
                padding: '4px 4px',
                margin: 0.5,
              }}
            >
              Lenders
            </Typography>

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
                padding: '4px 4px',
                margin: 0.5,
              }}
            >
              Relationship Manager
            </Typography>
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
                padding: '4px 4px',
                margin: 0.5,
              }}
            >
              Process Officer
            </Typography>
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
                padding: '2px 5px',
                margin: 0.5,
              }}
            >
              Lead Type
            </Typography>
            <Image src='/images/line.png' alt='' width='2px' height='28px' />
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
                padding: '2px 5px',
                margin: 0.5,
              }}
            >
              Status
            </Typography>
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
                padding: '2px 5px',
                margin: 0.5,
              }}
            >
              Status Date
            </Typography>
            <Image src='/images/line.png' alt='' width='2px' height='28px' />
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
                padding: '2px 5px',
                margin: 0.5,
              }}
            >
              Created Date
            </Typography>
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
                padding: '2px 5px',
                margin: 0.5,
              }}
            >
              Follow up date
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={4}>
          <Button
            size='small'
            sx={{
              background:
                'linear-gradient(275.52deg, #13BBE6 17.29%, #4B65B2 82.37%)',
              borderRadius: '4px',
              marginX: 2,
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#FFFFFF',
            }}
          >
            Download Report
          </Button>
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

          <Grid
            sx={{
              display: 'flex',
              alignItems: 'center',
              // justifyContent: 'space-between',
            }}
          >
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '14px',
                color: '#292D32',
              }}
            >
              Case Status
            </Typography>
            <Grid
              sx={{
                background: '#FFF',
                borderRadius: 1,
                boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
                border: '0.2px solid #979797',
                display: 'flex',
                alignItems: 'center',
                padding: '5px 10px',
                margin: 1,
              }}
            >
              <Typography
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#000000',
                  borderRight: '0.2px solid #979797',
                  padding: '3px 5px ',
                }}
              >
                Active
              </Typography>
              <Typography
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#000000',
                  borderRight: '0.2px solid #979797',
                  padding: '3px 5px ',
                }}
              >
                Unsigned
              </Typography>
              <Typography
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#000000',
                  padding: '3px 5px ',
                }}
              >
                Completed
              </Typography>
            </Grid>
            <Button
              size='small'
              sx={{
                background:
                  'linear-gradient(275.52deg, #13BBE6 17.29%, #4B65B2 82.37%)',
                borderRadius: '4px',

                color: '#FFF',
              }}
            >
              <IconButton size='small' sx={{ color: '#FFF', padding: 0 }}>
                <AddCircleOutlineIcon />
              </IconButton>
              Add Case
            </Button>
            <Button
              size='small'
              sx={{
                background: '#EBEBEB',
                borderRadius: '4px',
                marginX: 0.5,
                color: '#999999',
              }}
            >
              <IconButton size='small' sx={{ color: '#999999', padding: 0 }}>
                <AddCircleOutlineIcon />
              </IconButton>
              Add Case
            </Button>
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
                  checked={selectedAllCases}
                  indeterminate={selectedSomeCases}
                  onChange={handleSelectAllCases}
                />
              </TableCell>
              <CustomTableCell>Created Date</CustomTableCell>
              <CustomTableCell>Case Reference Number</CustomTableCell>
              <CustomTableCell>Originator</CustomTableCell>

              <CustomTableCell>Applicant Name(1st)</CustomTableCell>
              <CustomTableCell>Postcode</CustomTableCell>
              <CustomTableCell>Mortgage Product Type</CustomTableCell>
              <CustomTableCell>Relationship Manager</CustomTableCell>
              <CustomTableCell>Process Officer</CustomTableCell>
              <CustomTableCell>Application Status</CustomTableCell>
              <CustomTableCell align='right'>Actions</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCases.map((singleCase) => {
              const isCaseSelected = selectedCases.includes(singleCase.id);
              return (
                <TableRow hover key={singleCase.id} selected={isCaseSelected}>
                  <TableCell padding='checkbox'>
                    <Checkbox
                      color='primary'
                      checked={isCaseSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneCase(event, singleCase.id)
                      }
                      value={isCaseSelected}
                    />
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleCase?.id}`);
                    }}
                  >
                    <Typography
                      variant='body2'
                      color='text.primary'
                      fontWeight='bold'
                      noWrap
                    >
                      {format(singleCase.createdDate, 'dd/MM/yyyy hh:mm:ss')}
                    </Typography>
                  </TableCell>

                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleCase?.id}`);
                    }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleCase.caseReferenceNumber}
                    </Typography>
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleCase?.id}`);
                    }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleCase.originatorName}
                    </Typography>
                  </TableCell>

                  <TableCell
                    align='right'
                    onClick={() => {
                      router?.push(`/quotations/${singleCase?.id}`);
                    }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleCase.firstApplicantName}
                      {singleCase.secondApplicantName}
                    </Typography>
                    {/* <Typography variant='body2' color='text.secondary' noWrap>
                      {numeral(singleCase.amount).format(
                        `${singleCase.currency}0,0.00`
                      )}
                    </Typography> */}
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleCase?.id}`);
                    }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleCase.postalCode}
                    </Typography>
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleCase?.id}`);
                    }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleCase.mortgageProductType}
                    </Typography>
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleCase?.id}`);
                    }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleCase.relationalManager}
                    </Typography>
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleCase?.id}`);
                    }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleCase.processOfficer}
                    </Typography>
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleCase?.id}`);
                    }}
                  >
                    {getStatusLabel(singleCase.status)}
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
          count={filteredCases.length}
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

CasesTable.propTypes = {
  cases: PropTypes.array.isRequired,
};

CasesTable.defaultProps = {
  cases: [],
};

export default CasesTable;

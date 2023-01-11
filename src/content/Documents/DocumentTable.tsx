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
import { format } from 'date-fns';
import { Dayjs } from 'dayjs';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { ChangeEvent, FC, useState } from 'react';
import Label from '@/components/Label';
import { DocumentStatus, Document } from '@/models/document';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface RecentDocumentsTableProps {
  className?: string;
  documents: Document[];
}

const CustomTableCell = styled(TableCell)(() => ({
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '150%',
  color: '#FFFFFF',
  textTransform: 'none',
  border: '2px solid rgba(196, 196, 196, 0.4)',
}));

interface Filters {
  status?: DocumentStatus;
}

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(2.345)};
    height: ${theme.spacing(2)};
`
);

const getStatusLabel = (DocumentStatus: DocumentStatus): JSX.Element => {
  const map = {
    AFI: { text: 'Awaiting Further Information ', color: '#FEBD40' },
    NL: { text: 'New Lead ', color: '#33D69F' },
    offered: { text: 'Offered', color: '#8B72F8' },
    PreOP: { text: 'Pre Offer Processing', color: '#8AE034' },
    PosOP: { text: 'Post Offer Processing', color: '#F95CCD' },
    closed: { text: 'Closed', color: '#FF7A00' },
    rejected: { text: 'Rejected', color: '#FF4C61' },
  };

  const { text, color }: any = map[DocumentStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (documents: Document[], filters: Filters): Document[] => {
  return documents.filter((singleDocument) => {
    let matches = true;
    if (filters.status && singleDocument.status !== filters.status) {
      matches = false;
    }
    return matches;
  });
};

const applyPagination = (
  documents: Document[],
  page: number,
  limit: number
): Document[] => {
  return documents.slice(page * limit, page * limit + limit);
};

const DocumentTable: FC<RecentDocumentsTableProps> = ({ documents }) => {
  const [value, setValue] = useState<Dayjs | null>(null);
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  const [selectedDocuments, setSelectedDocuments] = useState<string[]>([]);
  const selectedBulkActions = selectedDocuments.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: undefined,
  });

  const handleStatusChange = (e: SelectChangeEvent<string>): void => {
    let value: DocumentStatus = 'offered';

    if (e.target.value !== 'all') {
      value = e.target.value as DocumentStatus;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value,
    }));
  };

  const handleSelectAllDocuments = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedDocuments(
      event.target.checked
        ? documents.map((singleDocument: Document) => singleDocument.id)
        : []
    );
  };

  const handleSelectOneDocument = (
    _event: ChangeEvent<HTMLInputElement>,
    singleDocument: string
  ): void => {
    if (!selectedDocuments.includes(singleDocument)) {
      setSelectedDocuments((prevSelected) => [...prevSelected, singleDocument]);
    } else {
      setSelectedDocuments((prevSelected) =>
        prevSelected.filter((id) => id !== singleDocument)
      );
    }
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredDocuments = applyFilters(documents, filters);
  const paginatedDocuments = applyPagination(filteredDocuments, page, limit);
  const selectedSomeDocuments =
    selectedDocuments.length > 0 && selectedDocuments.length < documents.length;
  const selectedAllDocuments = selectedDocuments.length === documents.length;
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
      <TableContainer
        sx={{
          marginY: 2,
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ background: '#4B65B2' }}>
              {/* <TableCell padding='checkbox'>
                <Checkbox
                  color='primary'
                  checked={selectedAllDocuments}
                  indeterminate={selectedSomeDocuments}
                  onChange={handleSelectAllDocuments}
                />
              </TableCell> */}
              <CustomTableCell>Uploaded Date</CustomTableCell>
              <CustomTableCell>Document Type</CustomTableCell>

              <CustomTableCell sx={{ display: 'flex', alignItems: 'center' }}>
                Applicant 1 Name{' '}
                <Box
                  sx={{
                    background: '#4B65B2',
                    border: '1px solid #FFFFFF',
                    borderRadius: '4px',
                    width: '120px',
                    height: ' 40px',
                    padding: 1,
                    marginX: 1,
                  }}
                >
                  Carole Demas
                </Box>
                <IconButton sx={{ padding: 0, color: '#FFF' }}>
                  <MoreVertIcon />
                </IconButton>
              </CustomTableCell>
              <CustomTableCell>Status</CustomTableCell>
              <CustomTableCell sx={{ display: 'flex', alignItems: 'center' }}>
                Applicant 2 Name{' '}
                <Box
                  sx={{
                    background: '#4B65B2',
                    border: '1px solid #FFFFFF',
                    borderRadius: '4px',
                    width: '120px',
                    height: ' 40px',
                    padding: 1,
                    marginX: 1,
                  }}
                >
                  Carole Demas
                </Box>
                <IconButton sx={{ padding: 0, color: '#FFF' }}>
                  <MoreVertIcon />
                </IconButton>
              </CustomTableCell>
              <CustomTableCell>Status</CustomTableCell>
              <CustomTableCell>Actions</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documents.map((singleDocument) => {
              const isDocumentselected = selectedDocuments.includes(
                singleDocument.id
              );
              return (
                <TableRow
                  hover
                  key={singleDocument.id}
                  selected={isDocumentselected}
                  sx={{ background: '#FFF' }}
                >
                  {/* <TableCell padding='checkbox'>
                    <Checkbox
                      color='primary'
                      checked={isDocumentselected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneDocument(event, singleDocument.id)
                      }
                      value={isDocumentselected}
                    />
                  </TableCell> */}
                  <TableCell
                    // onClick={() => {
                    //   router?.push(`/quotations/${singleDocument?.id}`);
                    // }}
                    sx={{ border: '2px solid rgba(196, 196, 196, 0.4)' }}
                  >
                    <Typography
                      variant='body2'
                      color='text.primary'
                      fontWeight='bold'
                      noWrap
                    >
                      {format(
                        singleDocument.uploadedDate,
                        'dd/MM/yyyy hh:mm:ss'
                      )}
                    </Typography>
                  </TableCell>

                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleDocument?.id}`);
                    }}
                    sx={{ border: '2px solid rgba(196, 196, 196, 0.4)' }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleDocument.documentType}
                    </Typography>
                  </TableCell>

                  <TableCell
                    align='left'
                    onClick={() => {
                      router?.push(`/quotations/${singleDocument?.id}`);
                    }}
                    sx={{ border: '2px solid rgba(196, 196, 196, 0.4)' }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleDocument.applicant1Name}
                    </Typography>

                    {/* <Typography variant='body2' color='text.secondary' noWrap>
                      {numeral(singleDocument.amount).format(
                        `${singleDocument.currency}0,0.00`
                      )}
                    </Typography> */}
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleDocument?.id}`);
                    }}
                    sx={{ border: '2px solid rgba(196, 196, 196, 0.4)' }}
                  >
                    {getStatusLabel(singleDocument.status)}
                  </TableCell>
                  <TableCell
                    align='left'
                    onClick={() => {
                      router?.push(`/quotations/${singleDocument?.id}`);
                    }}
                    sx={{ border: '2px solid rgba(196, 196, 196, 0.4)' }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleDocument.applicant2Name}
                    </Typography>

                    {/* <Typography variant='body2' color='text.secondary' noWrap>
                      {numeral(singleDocument.amount).format(
                        `${singleDocument.currency}0,0.00`
                      )}
                    </Typography> */}
                  </TableCell>
                  {/* <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleDocument?.id}`);
                    }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleDocument.postalCode}
                    </Typography>
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleDocument?.id}`);
                    }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleDocument.mortgageProductType}
                    </Typography>
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleDocument?.id}`);
                    }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleDocument.relationalManager}
                    </Typography>
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleDocument?.id}`);
                    }}
                  >
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      color='text.primary'
                      gutterBottom
                      noWrap
                    >
                      {singleDocument.processOfficer}
                    </Typography>
                  </TableCell> */}
                  <TableCell
                    onClick={() => {
                      router?.push(`/quotations/${singleDocument?.id}`);
                    }}
                    sx={{ border: '2px solid rgba(196, 196, 196, 0.4)' }}
                  >
                    {getStatusLabel(singleDocument.status)}
                  </TableCell>
                  <TableCell
                    sx={{ border: '2px solid rgba(196, 196, 196, 0.4)' }}
                    // align='right'
                    // sx={{
                    //   justifyContent: 'center',
                    //   alignItems: 'center',
                    //   display: 'flex',
                    // }}
                  >
                    <IconButton color='primary' sx={{ p: 0.5 }}>
                      <MoreHorizTwoToneIcon />
                    </IconButton>
                    {/* <IconButton color='primary' sx={{ p: 1 }}>
                      <AvatarWrapper
                        src='/assets/svg/eye.svg'
                        variant='square'
                      />
                    </IconButton> */}
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
          count={filteredDocuments.length}
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

DocumentTable.propTypes = {
  documents: PropTypes.array.isRequired,
};

DocumentTable.defaultProps = {
  documents: [],
};

export default DocumentTable;

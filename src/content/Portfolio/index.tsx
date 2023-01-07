import {
  Button,
  Container,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  tableRowClasses,
  styled,
} from '@mui/material';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';

// const addCatalogue = Yup.object().shape({
//   name: Yup.string().required("Required"),
//   category: Yup.string().required("Required"),
//   discountApplicable: Yup.string().required("Required"),
//   color: Yup.string().required("Required"),
//   price: Yup.number().required("Required"),
//   status: Yup.string().required("Required"),
// });
// const {
//   register,
//   handleSubmit,
//   formState: { errors },
// } = useForm({
//   resolver: yupResolver(addCatalogue),
//   mode: "onChange",
// });

// const [currency, setCurrency] = useState("EUR");
// const [imageUrl, setImageUrl] = useState<string[]>();

// const handleChange = (event) => {
//   setCurrency(event.target.value);
// };

// const onSubmit = async (data) => {
//   const res: any = await createCatalogueHook.mutateAsync({
//     body: {
//       ...data,
//       discountApplicable:
//         data?.discountApplicable === "reremortgage" ? true : false,
//       images: imageUrl,
//     },
//   });
//   if (res?.status === "success") {
//     // handleClose(true);
//   }
// };

const InputBoxes = styled(TextField)(({ theme }) => ({
  background: '#FFFFFF',
  borderRadius: '4px',
}));

const InputSelect = styled(Select)(({ theme }) => ({
  background: '#FFFFFF',
}));

const CustomTableCell = styled(TableCell)(() => ({
  background: '#EEF7FE',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  color: '#263238',
}));

const applicants = [
  {
    employementStatus: 'Employed',
    leave: 'Carole',
    company: '-',
    jobTitle: 'Demas',
    employeType: 'carole.demas@hotmail.com',
    employeName: '+41 6744589624',
    employeAddress: '02-02-1989',
    currentSalary: 'British',
    getPaid: 'Married',
    kindEmploye: 'Tier 1, 2 Work Permit',
    contractor: 'Employed',
    additionalIncome: '£ 20000',
    getPaidOften: '27 Old Gloucester Street',
  },
  {
    employementStatus: 'Employed',
    leave: 'Carole',
    company: '-',
    jobTitle: 'Demas',
    employeType: 'carole.demas@hotmail.com',
    employeName: '+41 6744589624',
    employeAddress: '02-02-1989',
    currentSalary: 'British',
    getPaid: 'Married',
    kindEmploye: 'Tier 1, 2 Work Permit',
    contractor: 'Employed',
    additionalIncome: '£ 20000',
    getPaidOften: '27 Old Gloucester Street',
  },
];

const rowdata = [
  {
    id: 1,
    name: 'Flat or apartment number',
  },
  {
    id: 2,
    name: 'Housing or building name',
  },
  {
    id: 3,
    name: 'Street',
  },
  {
    id: 4,
    name: 'City',
  },
  {
    id: 5,
    name: 'Postcode*',
  },
  {
    id: 6,
    name: 'Who owns the property',
  },
  {
    id: 7,
    name: 'Mortgage Balance',
  },
  {
    id: 8,
    name: 'Remaining term of mortgage',
  },
  {
    id: 9,
    name: 'Mortgage Expiry Date',
  },
  {
    id: 10,
    name: 'Approximate Property Value',
  },
  {
    id: 11,
    name: 'Mortgage Lender Name*',
  },
  {
    id: 12,
    name: 'Monthly mortgage repayment amount',
  },
  {
    id: 13,
    name: 'Mortgage account number',
  },
  {
    id: 14,
    name: 'Select your repayment type',
  },
  {
    id: 15,
    name: 'Do you want to release equity from this property?',
  },
  {
    id: 16,
    name: 'What do you plan to do with this property ?',
  },
  {
    id: 17,
    name: 'Monthly rental income',
  },
  {
    id: 18,
    name: 'Amount required to release',
  },
  {
    id: 19,
    name: 'Is this mortgage is managed by Freedom Circle',
  },
];

const additionalDataTitle = [
  {
    id: 1,
    name: 'Number of bedrooms',
  },
  {
    id: 2,
    name: 'Garage',
  },
  {
    id: 3,
    name: 'Type of property',
  },
  {
    id: 4,
    name: 'Built year of the property',
  },
];

const additionalData = [
  {
    incomeSource: '-',
    incomeAmout: '1000000',
  },
  {
    incomeSource: '-',
    incomeAmout: '1000000',
  },
  {
    incomeSource: '-',
    incomeAmout: '1000000',
  },
];

const tableData = rowdata?.map((row, index) => ({
  ...row,
  data: applicants
    //.filter((applicant, ai) => index === ai)
    .map((applicant, i) => applicant[Object.keys(applicant)[index]]),
}));

console.log(tableData);

const additionalTableData = additionalDataTitle?.map((row, index) => ({
  ...row,
  data: additionalData
    //.filter((applicant, ai) => index === ai)
    .map(
      (incomedetails, i) => incomedetails[Object.keys(incomedetails)[index]]
    ),
}));

console.log(additionalTableData);

const useStyles = makeStyles((theme) => ({
  cell_short_blue_bg: {
    width: '20%',
  },
  cell_short: {
    width: '25%',
    borderRight: '2px solid rgba(196, 196, 196, 0.4)',
    textAlign: 'center',
  },
  // row_border: {
  //   borderBottom: '2px dashed rgba(151, 151, 151, 0.24)',
  // },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // border_row: {
  //   borderBottom: '3px solid blue',
  // },
}));

const PortfolioTabData = () => {
  const classes = useStyles();
  return (
    <>
      <Table
        sx={{
          background: '#FFF',
          borderSpacing: '0',
        }}
      >
        <TableRow sx={{ background: '#4B65B2', borderRadius: '4px' }}>
          <TableCell sx={{ padding: 0.5 }}></TableCell>
          <TableCell sx={{ padding: 0.5 }}>
            <TableRow sx={{ background: 'transparent', color: 'white' }}>
              <TableCell sx={{ padding: 0.5 }}>Property Type</TableCell>
              <TableCell sx={{ padding: 0.5 }}>
                <Box
                  sx={{
                    background: '#4B65B0.5',
                    border: '1px solid #FFFFFF',
                    borderRadius: '4px',
                    padding: '8px 70px 8px 10px',
                  }}
                >
                  Current Residence
                </Box>
              </TableCell>
              <TableCell sx={{ padding: 0.5 }}>
                <IconButton size='small'>
                  <MoreVertIcon style={{ color: '#FFF' }}></MoreVertIcon>
                </IconButton>
              </TableCell>
            </TableRow>
          </TableCell>
          <TableCell sx={{ padding: 0.5 }}>
            <TableRow sx={{ background: 'transparent', color: 'white' }}>
              <TableCell sx={{ padding: 0.5 }}>Property Type</TableCell>
              <TableCell sx={{ padding: 0.5 }}>
                <Box
                  sx={{
                    background: '#4B65B0.5',
                    border: '1px solid #FFFFFF',
                    borderRadius: '4px',
                    padding: '8px 70px 8px 10px',
                  }}
                >
                  Buy to let 1
                </Box>
              </TableCell>
              <TableCell sx={{ padding: 0.5 }}>
                <IconButton size='small'>
                  <MoreVertIcon style={{ color: '#FFF' }}></MoreVertIcon>
                </IconButton>
              </TableCell>
            </TableRow>
          </TableCell>
          <TableCell sx={{ padding: 0.5 }}>
            <TableRow sx={{ background: 'transparent', color: 'white' }}>
              <TableCell sx={{ padding: 0.5 }}>
                <Box
                  sx={{
                    background: '#4B65B0.5',
                    border: '1px solid #FFFFFF',
                    borderRadius: '4px',
                    padding: '5px 20px 5px 10px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <IconButton size='small'>
                    <AddCircleOutlineIcon
                      style={{ color: '#FFF' }}
                    ></AddCircleOutlineIcon>
                  </IconButton>
                  <Typography>Add Property</Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ padding: 0.5 }}></TableCell>
            </TableRow>
          </TableCell>
        </TableRow>
        {tableData.map((row) => (
          <StyledTableRow key={row.id}>
            <CustomTableCell className={classes.cell_short_blue_bg}>
              {row.name}
            </CustomTableCell>
            {row.data.map((applicant) => (
              <TableCell
                key={applicant}
                className={classes.cell_short}
                sx={{
                  borderBottom: '2px dashed rgba(196, 196, 196, 0.4)',
                }}
              >
                <InputBoxes
                  defaultValue={applicant}
                  fullWidth
                  sx={{
                    borderRadius: '4px',
                  }}
                ></InputBoxes>
              </TableCell>
            ))}
            <TableCell
              sx={{ borderBottom: '2px dashed rgba(196, 196, 196, 0.4)' }}
            ></TableCell>
          </StyledTableRow>
        ))}
        <TableRow sx={{ background: '#A6ACBE' }}>
          <TableCell
            sx={{
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '24px',
              textTransform: 'capitalize',
              color: '#FFFFFF',
              background: '#A6ACBE',
            }}
          >
            Property Description
          </TableCell>
          <TableCell
            sx={{
              fontWeight: 500,
              fontSize: '13px',
              lineHeight: '24px',
              textTransform: 'capitalize',
              color: '#FFFFFF',
              background: '#A6ACBE',
            }}
          >
            (If release equity from this property is “YES”)
          </TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
        {additionalTableData.map((adddata) => (
          <TableRow key={adddata.id}>
            <CustomTableCell className={classes.cell_short_blue_bg}>
              {adddata.name}
            </CustomTableCell>
            {adddata.data.map((incomedetails) => (
              <TableCell
                key={incomedetails}
                className={classes.cell_short}
                sx={{
                  borderBottom: '2px dashed rgba(196, 196, 196, 0.4)',
                }}
              >
                <InputBoxes
                  defaultValue={incomedetails}
                  fullWidth
                  sx={{
                    borderRadius: '4px',
                  }}
                ></InputBoxes>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </Table>
    </>
  );
};

PortfolioTabData.propTypes = {
  cases: PropTypes.array.isRequired,
};

PortfolioTabData.defaultProps = {
  cases: [],
};

export default PortfolioTabData;

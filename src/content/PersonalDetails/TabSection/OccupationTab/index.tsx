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
    name: 'What’s your employment Status*',
  },
  {
    id: 2,
    name: 'Are you on parental leave right now?',
  },
  {
    id: 3,
    name: 'Do you own shares in your company?',
  },
  {
    id: 4,
    name: 'What’s your job title?',
  },
  {
    id: 5,
    name: 'What kind of employee are you are?',
  },
  {
    id: 6,
    name: 'Employer Name',
  },
  {
    id: 7,
    name: 'Employer Address',
  },
  {
    id: 8,
    name: 'What is your current salary/income?',
  },
  {
    id: 9,
    name: 'How often do you get paid?',
  },
  {
    id: 10,
    name: 'What kind of employee are you are?',
  },
  {
    id: 11,
    name: 'What type of contractor you are?',
  },
  {
    id: 12,
    name: 'What is the source of additi-onal income?',
  },
  {
    id: 13,
    name: 'Additional income amount',
  },
  {
    id: 14,
    name: 'How often do you get paid?',
  },
];

const additionalDataTitle = [
  {
    id: 1,
    name: 'What is the source of additional income',
  },
  {
    id: 2,
    name: 'Additional income amount',
  },
  {
    id: 3,
    name: 'Additional income amount',
  },
  {
    id: 4,
    name: 'Additional income amount',
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

const OccupationTab = () => {
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
              <TableCell sx={{ padding: 0.5 }}>Applicant 1 Name</TableCell>
              <TableCell sx={{ padding: 0.5 }}>
                <Box
                  sx={{
                    background: '#4B65B0.5',
                    border: '1px solid #FFFFFF',
                    borderRadius: '4px',
                    padding: '8px 70px 8px 10px',
                  }}
                >
                  Carlo
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
              <TableCell sx={{ padding: 0.5 }}>Applicant 2 Name</TableCell>
              <TableCell sx={{ padding: 0.5 }}>
                <Box
                  sx={{
                    background: '#4B65B0.5',
                    border: '1px solid #FFFFFF',
                    borderRadius: '4px',
                    padding: '8px 70px 8px 10px',
                  }}
                >
                  Carlo
                </Box>
              </TableCell>
              <TableCell sx={{ padding: 0.5 }}>
                <IconButton size='small'>
                  <MoreVertIcon style={{ color: '#FFF' }}></MoreVertIcon>
                </IconButton>
              </TableCell>
            </TableRow>
          </TableCell>
          <TableCell sx={{ padding: 0.5 }}></TableCell>
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
            Additional Income Details
          </TableCell>
          <TableCell></TableCell>
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

        <TableRow>
          <TableCell
            sx={{
              border: '1.5px solid #4B65B2',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              padding: 0,
              width: '55%',
              margin: 2,
            }}
          >
            <IconButton>
              <AddCircleOutlineIcon sx={{ color: '#4B65B2' }} />
            </IconButton>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '19px',
                color: '#4B65B2',
              }}
            >
              Additional Income
            </Typography>
          </TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </Table>
    </>
  );
};

OccupationTab.propTypes = {
  cases: PropTypes.array.isRequired,
};

OccupationTab.defaultProps = {
  cases: [],
};

export default OccupationTab;

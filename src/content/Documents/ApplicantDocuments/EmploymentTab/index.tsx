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
  Menu,
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

const dummyMenuItems = [
  {
    title: 'Remove Applicant',
  },
];

const EmploymentTab = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Table
        sx={{
          background: '#FFF',
          borderSpacing: '0',
        }}
      ></Table>
    </>
  );
};

EmploymentTab.propTypes = {
  cases: PropTypes.array.isRequired,
};

EmploymentTab.defaultProps = {
  cases: [],
};

export default EmploymentTab;

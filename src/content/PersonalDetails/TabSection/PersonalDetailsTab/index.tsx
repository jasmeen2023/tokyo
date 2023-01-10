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

// import { useCreateCatalogue } from "@/hooks/catalogue/useCatalogue";

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
    title: 'Mrs',
    firstName: 'Carole',
    middleName: '-',
    surName: 'Demas',
    email: 'carole.demas@hotmail.com',
    phoneNumber: '+41 6744589624',
    dateofBirth: '02-02-1989',
    nationality: 'British',
    maritalStatus: 'Married',
    visaType: 'Tier 1, 2 Work Permit',
    employmentStatus: 'Employed',
    salary: '£ 20000',
    addressHistory: '27 Old Gloucester Street',
    occupation: 'Occupation name1',
    outstanding: '£ 4850.00',
    dependence: '2',
  },
  {
    title: 'Mr',
    firstName: 'Carole',
    middleName: '-',
    surName: 'Demas',
    email: 'carole.demas@hotmail.com',
    phoneNumber: '+41 6744589624',
    dateofBirth: '02-02-1989',
    nationality: 'British',
    maritalStatus: 'Married',
    visaType: 'Tier 1, 2 Work Permit',
    employmentStatus: 'Employed',
    salary: '£ 20000',
    addressHistory: '27 Old Gloucester Street',
    occupation: 'Occupation name1',
    outstanding: '£ 4850.00',
    dependence: '2',
  },
];

const rowdata = [
  {
    id: 1,
    name: 'Title',
  },
  {
    id: 2,
    name: 'First Name *',
  },
  {
    id: 3,
    name: 'Middle Name',
  },
  {
    id: 4,
    name: 'Surname *',
  },
  {
    id: 5,
    name: 'Email *',
  },
  {
    id: 6,
    name: 'Phone Number',
  },
  {
    id: 7,
    name: 'Date of Birth',
  },
  {
    id: 8,
    name: 'Nationality',
  },
  {
    id: 9,
    name: 'Marital Status',
  },
  {
    id: 10,
    name: 'VISA Type',
  },
  {
    id: 11,
    name: 'Employment Status',
  },
  {
    id: 12,
    name: 'Salary',
  },
  {
    id: 13,
    name: 'Address History',
  },
  {
    id: 14,
    name: 'Occupation',
  },
  {
    id: 15,
    name: 'Outstanding',
  },
  {
    id: 16,
    name: 'Dependence',
  },
];

const tableData = rowdata?.map((row, index) => ({
  ...row,
  data: applicants
    //.filter((applicant, ai) => index === ai)
    .map((applicant, i) => applicant[Object.keys(applicant)[index]]),
}));

console.log(tableData);

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

const PersonalDetailsTab = () => {
  const classes = useStyles();

  const dummyMenuItems = [
    {
      title: 'Remove Applicant',
    },
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const nativeOnChange = (e) => {
    const detail = {
      selectedIndex: e.target.selectedIndex,
    };
    e.target.selectedIndex = 0;

    e.target.dispatchEvent(new CustomEvent('itemClick', { detail }));
  };

  const itemClick = (e) => {
    console.log('Item Clicked ' + e.detail);
  };

  return (
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
                <MoreVertIcon
                  style={{ color: '#FFF' }}
                  onClick={handleClick}
                ></MoreVertIcon>
              </IconButton>
              <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
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
                <MoreVertIcon
                  style={{ color: '#FFF' }}
                  onClick={handleClick}
                ></MoreVertIcon>
              </IconButton>
              <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
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
                <Typography>Add</Typography>
              </Box>
            </TableCell>
            <TableCell sx={{ padding: 0.5 }}>Applicant 3 Name</TableCell>
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
    </Table>
  );
};

PersonalDetailsTab.propTypes = {
  cases: PropTypes.array.isRequired,
};

PersonalDetailsTab.defaultProps = {
  cases: [],
};

export default PersonalDetailsTab;

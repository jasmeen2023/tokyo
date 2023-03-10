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
import Modals from './DeleteCurrentAddress';
import DeleteCurrentAddress from './DeleteCurrentAddress';

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
    addressType: 'Current',
    flatNo: '12J - 4th Level',
    housingName: 'Winchester Villas',
    street: ' 27 Old Gloucester Street',
    city: 'London',
    postCode: 'WC1N 3AX',
    livingDate: '02-02-1998',
    occupant: '-',
  },
  {
    addressType: 'Current',
    flatNo: '12J - 4th Level',
    housingName: 'Winchester Villas',
    street: ' 27 Old Gloucester Street',
    city: 'London',
    postCode: 'WC1N 3AX',
    livingDate: '02-02-1998',
    occupant: '-',
  },
];

const rowdata = [
  {
    id: 1,
    name: 'Address Type',
  },
  {
    id: 2,
    name: 'Flat or apartment number',
  },
  {
    id: 3,
    name: 'Housing or building name',
  },
  {
    id: 4,
    name: 'Street',
  },
  {
    id: 5,
    name: 'City',
  },
  {
    id: 6,
    name: 'Postcode',
  },
  {
    id: 7,
    name: 'When did you start living at this address?',
  },
  {
    id: 8,
    name: 'What type of occupant are you?',
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

const dummyMenuItems = [
  {
    title: 'Remove Applicant',
  },
];

const deleteAddressMenu = [
  {
    title: 'Delete Current Address',
  },
];

const AddressHistoryTab = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteAddress, setdeleteAddress] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setdeleteAddress(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setdeleteAddress(null);
  };

  // const nativeOnChange = (e) => {
  //   const detail = {
  //     selectedIndex: e.target.selectedIndex,
  //   };
  //   e.target.selectedIndex = 0;

  //   e.target.dispatchEvent(new CustomEvent('itemClick', { detail }));
  // };

  // const nativeOnChanges = (e) => {
  //   const detail = {
  //     selectedIndex: e.target.selectedIndex,
  //   };
  //   e.target.selectedIndex = 0;

  //   e.target.dispatchEvent(new CustomEvent('itemClick', { detail }));
  // };

  // const itemClick = (e) => {
  //   console.log('Item Clicked ' + e.detail);
  // };

  return (
    <>
      <Table
        sx={{
          background: '#FFF',
          borderSpacing: '0',
        }}
      >
        <TableRow sx={{ background: '#4B65B2', borderRadius: '4px' }}>
          <TableCell sx={{ padding: 0.5 }}>
            {' '}
            <IconButton size='small'>
              <MoreVertIcon
                style={{ color: '#FFF' }}
                //onClick={Modals}
              ></MoreVertIcon>
            </IconButton>
            {/* <Menu
              id='simple-menu-address'
              deleteAddress={deleteAddress}
              keepMounted
              open={Boolean(deleteAddress)}
              onClose={handleClose}
            >
              {deleteAddressMenu.map((item) => (
                <MenuItem
                  onClick={handleClose}
                  key={item.title}
                  value={item.title}
                >
                  {item.title}
                </MenuItem>
              ))}
            </Menu> */}
          </TableCell>
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
            {' '}
            <DeleteCurrentAddress />
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

        <TableRow>
          <Button
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
              Add Address
            </Typography>
          </Button>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </Table>
    </>
  );
};

AddressHistoryTab.propTypes = {
  cases: PropTypes.array.isRequired,
};

AddressHistoryTab.defaultProps = {
  cases: [],
};

export default AddressHistoryTab;

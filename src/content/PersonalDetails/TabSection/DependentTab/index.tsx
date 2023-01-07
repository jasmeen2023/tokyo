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
    creditCard: 'Current',
    currentBalance: '12J - 4th Level',
    month: 'Winchester Villas',
    repaid: ' 27 Old Gloucester Street',
  },
  {
    creditCard: 'Current',
    currentBalance: '12J - 4th Level',
    month: 'Winchester Villas',
    repaid: ' 27 Old Gloucester Street',
  },
  {
    creditCard: 'Current',
    currentBalance: '12J - 4th Level',
    month: 'Winchester Villas',
    repaid: ' 27 Old Gloucester Street',
  },
  {
    creditCard: 'Current',
    currentBalance: '12J - 4th Level',
    month: 'Winchester Villas',
    repaid: ' 27 Old Gloucester Street',
  },
];

const rowdata = [
  {
    id: 1,

    name: 'Credit card provider',
  },
  {
    id: 2,

    name: 'What’s your current balance of this card?',
  },
  {
    id: 3,

    name: 'Repaid in full every month',
  },
  {
    id: 4,

    name: 'Will this be repaid before the start of the mortgage?',
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

const DependentsTab = () => {
  const classes = useStyles();
  return (
    <>
      <Table
        sx={{
          background: '#FFF',
          borderSpacing: '0',
          border: '2px dashed rgba(196, 196, 196, 0.4)',
        }}
      >
        <TableRow
          sx={{
            background: '#EEF7FE',
          }}
        >
          <TableCell
            sx={{
              fontStyle: 'normal',
              fontWeight: 800,
              fontSize: '14px',
              lineHeight: '140.1%',
              color: '#263238',
              textAlign: 'left',
            }}
          >
            S.No.
          </TableCell>
          <TableCell
            sx={{
              fontStyle: 'normal',
              fontWeight: 800,
              fontSize: '14px',
              lineHeight: '140.1%',
              color: '#263238',
              textAlign: 'left',
            }}
          >
            Relationship
          </TableCell>
          <TableCell
            sx={{
              fontStyle: 'normal',
              fontWeight: 800,
              fontSize: '14px',
              lineHeight: '140.1%',
              color: '#263238',
              textAlign: 'left',
            }}
          >
            Age
          </TableCell>
          <TableCell
            sx={{
              fontStyle: 'normal',
              fontWeight: 800,
              fontSize: '14px',
              lineHeight: '140.1%',
              color: '#263238',
              textAlign: 'left',
            }}
          >
            Name
          </TableCell>
          <TableCell
            sx={{
              fontStyle: 'normal',
              fontWeight: 800,
              fontSize: '14px',
              lineHeight: '140.1%',
              color: '#263238',
              textAlign: 'left',
            }}
          >
            action
          </TableCell>
        </TableRow>
        {tableData.map((row) => (
          <StyledTableRow key={row.id}>
            {row.data.map((applicant) => (
              <>
                <TableCell key={applicant} className={classes.cell_short}>
                  <InputBoxes
                    defaultValue={applicant}
                    fullWidth
                    sx={{
                      borderRadius: '4px',
                    }}
                  ></InputBoxes>
                </TableCell>
              </>
            ))}
          </StyledTableRow>
        ))}
      </Table>
    </>
  );
};

DependentsTab.propTypes = {
  cases: PropTypes.array.isRequired,
};

DependentsTab.defaultProps = {
  cases: [],
};

export default DependentsTab;

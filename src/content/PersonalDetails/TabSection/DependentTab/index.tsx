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

const rowdata = [
  {
    id: 1,
    sno: 1,
    relationship: 'Father',
    age: '64',
    name: 'Morise',
    action: 'close',
  },
  {
    id: 2,
    sno: 2,
    relationship: 'Mother',
    age: '63',
    name: 'Morise',
    action: 'close',
  },
];

const useStyles = makeStyles((theme) => ({
  cell_short_blue_bg: {
    width: '5%',
  },
  cell_short: {
    width: '25%',

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
          border: '2px solid rgba(196, 196, 196, 0.4)',
        }}
      >
        <TableBody>
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
                textAlign: 'center',
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
                textAlign: 'center',
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
                textAlign: 'center',
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
                textAlign: 'center',
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
                textAlign: 'center',
              }}
            >
              action
            </TableCell>
          </TableRow>
          {rowdata.map((row) => (
            <StyledTableRow key={row.id}>
              <>
                <TableCell className={classes.cell_short_blue_bg}>
                  {row.sno}
                </TableCell>
                <TableCell className={classes.cell_short}>
                  <InputBoxes
                    fullWidth
                    defaultValue={row.relationship}
                    placeholder={row.relationship}
                    sx={{
                      borderRadius: '4px',
                    }}
                  >
                    {row.relationship}
                  </InputBoxes>
                </TableCell>
                <TableCell className={classes.cell_short}>
                  <InputBoxes
                    fullWidth
                    defaultValue={row.age}
                    placeholder={row.age}
                    sx={{
                      borderRadius: '4px',
                    }}
                  >
                    {row.age}
                  </InputBoxes>
                </TableCell>
                <TableCell className={classes.cell_short}>
                  <InputBoxes
                    fullWidth
                    defaultValue={row.name}
                    placeholder={row.name}
                    sx={{
                      borderRadius: '4px',
                    }}
                  >
                    {row.name}
                  </InputBoxes>
                </TableCell>
                <TableCell className={classes.cell_short_blue_bg}>
                  {row.action}
                </TableCell>
              </>
            </StyledTableRow>
          ))}
        </TableBody>
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

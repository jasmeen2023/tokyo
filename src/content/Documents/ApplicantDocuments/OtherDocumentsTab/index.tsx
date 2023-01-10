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
  Card,
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
import { CardContent } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import Image from 'next/image';

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
    img: '/images/applicantindentity.png',
  },
];

const OtherDocumentsTab = () => {
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
    <Card
      sx={{
        background: '#FFF',
        borderRadius: 1,
        boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
      }}
    >
      <CardContent>
        <Grid
          container
          spacing={2}
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='column'
        >
          <Grid item>
            <Image
              src='/images/otherdoc.png'
              alt='other-documents'
              width='200px'
              height='200px'
            />
          </Grid>
          <Grid item>
            <Typography
              sx={{
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '26px',
                color: '#292D32',
              }}
            >
              Upload the documents as per required
            </Typography>
          </Grid>
          <Grid item>
            <Button
              sx={{
                border: '1.5px solid #4B65B2',
                borderRadius: '4px',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '19px',
                color: '#4B65B2',
              }}
            >
              Upload Document
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

OtherDocumentsTab.propTypes = {
  cases: PropTypes.array.isRequired,
};

OtherDocumentsTab.defaultProps = {
  cases: [],
};

export default OtherDocumentsTab;

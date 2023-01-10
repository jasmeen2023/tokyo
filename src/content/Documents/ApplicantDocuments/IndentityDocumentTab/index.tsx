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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
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
import { Add, DeleteOutline } from '@mui/icons-material';
import { message, Modal, Upload, UploadProps } from 'antd';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload';
import LoadingButton from '@mui/lab/LoadingButton';
import { useImageUploadToAWS } from '@/hooks/miscellaneous/image/useImage';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
  {
    id: 2,
    img: '/images/applicantindentity.png',
  },
];

export function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  //   const handleListItemClick = (value) => {
  //     onClose(value);
  //   };

  return (
    <Dialog fullWidth onClose={handleClose} open={open}>
      <DialogTitle
        sx={{
          fontWeight: 600,
          fontSize: '18px',
          lineHeight: '24px',
          textAlign: 'center',
        }}
      >
        Delete Document
      </DialogTitle>
      <IconButton>
        <DeleteOutline sx={{ fontSize: '4.5em', color: ' #FF725E' }} />
      </IconButton>
      <DialogContent
        sx={{
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '24px',
          textAlign: 'center',
          color: '#263238',
        }}
      >
        Are you sure do you want to delete the document?
      </DialogContent>
      <DialogActions>
        <Button
          sx={{
            background:
              'linear-gradient(91.88deg, #4B65B2 2.83%, #13BBE6 100%)',
            borderRadius: '5px',

            color: '#FFF',
          }}
        >
          Yes, Delete
        </Button>
        <Button
          onClick={handleClose}
          sx={{
            background:
              'linear-gradient(91.88deg, #4B65B2 2.83%, #13BBE6 100%)',
            borderRadius: '5px',

            color: '#FFF',
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  //   selectedValue: PropTypes.string.isRequired,
};

const IndentityDocumentTab = () => {
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

  const [open, setOpen] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [snack, setSnack] = useState(false);
  const [imageUrl, setImageUrl] = useState<string[]>();
  const uploadImage = useImageUploadToAWS();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1)
    );
  };

  const handleChange: UploadProps['onChange'] = async (
    info: UploadChangeParam<UploadFile>
  ) => {
    const isJpgOrPng =
      info.file.type === 'image/jpeg' || info.file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }

    if (info.file.status === 'uploading') {
      return;
    }

    if (info.file) {
      // eslint-disable-next-line prefer-const
      let formData = new FormData();
      formData.append('image', info.file as RcFile);

      const res: any = await uploadImage.mutateAsync({ body: formData });
      // Get this url from response in real world.
      if (res?.status === 'success') {
        setSnack(true);
        if (!imageUrl?.length) {
          setImageUrl([res?.uri]);
        } else {
          setImageUrl((prev) => [...(prev as string[]), res?.uri]);
        }
      }
    }
  };

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
          justifyContent='flex-end'
        >
          <Grid item>
            <Button
            // sx={{
            //   border: '1.5px solid #4B65B2',
            //   borderRadius: '4px',
            //   fontStyle: 'normal',
            //   fontWeight: 600,
            //   fontSize: '14px',
            //   lineHeight: '19px',
            //   color: '#4B65B2',
            // }}
            >
              <Upload
                name='avatar'
                fileList={fileList}
                listType='picture-card'
                onPreview={handlePreview}
                // className='avatar-uploader'
                showUploadList={false}
                beforeUpload={() => false}
                maxCount={6}
                onChange={handleChange}
              >
                <LoadingButton
                  loading={uploadImage?.isLoading}
                  type='button'
                  fullWidth
                  sx={{
                    my: 2.6,
                    p: 1.4,
                    flexDirection: 'column',
                    width: '150px',
                    height: '35px',
                    marginInlineEnd: '0px',
                    marginBottom: '0px',
                    textAlign: 'center',
                    verticalAlign: 'top',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    border: '0',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'border-color 0.3s',
                  }}
                  variant='text'
                >
                  <Add /> Upload Document
                </LoadingButton>
              </Upload>
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={handleClickOpen}
              sx={{
                border: '1px solid #FF4C61',
                borderRadius: '4px',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '19px',
                color: '#FF4C61',
              }}
            >
              <IconButton sx={{ padding: '0px 1px 0px 1px', color: '#FF4C61' }}>
                <CancelIcon />
              </IconButton>
              Delete
            </Button>
            <SimpleDialog
              //   selectedValue={selectedValue}
              open={open}
              onClose={handleClose}
            />
          </Grid>
        </Grid>

        <Grid container item alignItems='center' justifyContent='center'>
          {rowdata.map((data) => (
            <Box key={data.id}>
              <Image
                src={data.img}
                alt='document'
                width='564px'
                height='732px'
              />
            </Box>
          ))}
          {/* <Stack spacing={2}>
            <Pagination
              {...rowdata.map((data) => (
                <Box key={data.id}>
                  <Image
                    src={data.img}
                    alt='document'
                    width='564px'
                    height='732px'
                  />
                </Box>
              ))}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                />
              )}
            />
          </Stack> */}
          {/* <Stack spacing={2}>
          {...rowdata.map((data) => (
                <Box key={data.id}>
                  <Image
                    src={data.img}
                    alt='document'
                    width='564px'
                    height='732px'
                  />
                </Box>
              ))}
      <Pagination count={10}  onChange={handleChange} />
    </Stack> */}
        </Grid>
      </CardContent>
    </Card>
  );
};

IndentityDocumentTab.propTypes = {
  cases: PropTypes.array.isRequired,
};

IndentityDocumentTab.defaultProps = {
  cases: [],
};

export default IndentityDocumentTab;

import AddIcon from '@mui/icons-material/Add';
import {
  Alert,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Snackbar,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import AttributeRow from './AttributeRow';
import CreateAttribute from './CreateAttribute';
const AttributeList = ({
  attributes,
  id,
  currentAttribute,
  setCurrentAttribute,
}) => {
  const [openCreate, setOpenCreate] = useState(false);

  const handleClickOpenCreate = () => {
    setOpenCreate(true);
  };

  const handleCloseCreate = (value) => {
    if (value) {
      setOpenCreate(false);
      setSnack(true);
    } else {
      setOpenCreate(false);
    }
  };

  const [snack, setSnack] = useState(false);

  const handleSnackClose = () => {
    setSnack(false);
  };

  useEffect(() => {
    if (attributes.length && !currentAttribute) {
      setCurrentAttribute(attributes[0]?._id);
    }
  });

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader
        title='Attributes'
        action={
          <IconButton onClick={handleClickOpenCreate}>
            <AddIcon></AddIcon>
          </IconButton>
        }
      ></CardHeader>
      <CardContent sx={{ px: 0 }}>
        <Grid container>
          {attributes &&
            attributes?.map((attribute) => (
              <AttributeRow
                key={attribute?._id}
                id={id}
                attribute={attribute}
                currentAttribute={currentAttribute}
                setCurrentAttribute={setCurrentAttribute}
              />
            ))}
        </Grid>
      </CardContent>
      <CreateAttribute
        snack={snack}
        open={openCreate}
        onClose={handleCloseCreate}
        product={id as string}
      />

      <Snackbar open={snack} autoHideDuration={6000} onClose={handleSnackClose}>
        <Alert
          onClose={handleSnackClose}
          variant='filled'
          severity='success'
          sx={{ width: '100%' }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </Card>
  );
};

AttributeList.propTypes = {
  attributes: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  currentAttribute: PropTypes.string.isRequired,
  setCurrentAttribute: PropTypes.func.isRequired,
};

export default AttributeList;

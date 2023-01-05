import { Alert, CardActionArea, Grid, Snackbar } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import { useState } from 'react';

import { Attribute } from '@/pages/inventory/[id]';

import AttributeDeleteDialogue from './AttributeDeleteDialogue';
import InventoryAttributeMenu from './InventoryAttributeMenu';
import UpdateAttribute from './UpdateAttribute';

const AttributeRow = ({
  id,
  attribute,
  currentAttribute,
  setCurrentAttribute,
}) => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [updateId, setUpdateId] = useState(false);
  const [openAttributeDelete, setOpenAttributeDelete] =
    useState<boolean>(false);
  const [attributeDelete, setAttributeDelete] = useState<
    Attribute | undefined
  >();

  const handleClickOpenUpdate = (id) => {
    setOpenUpdate(true);
    setUpdateId(id);
  };

  const handleDeleteAttribute = (attribute, value) => {
    if (value && attribute) {
      setAttributeDelete(attribute);
      setOpenAttributeDelete(true);
    } else {
      setOpenAttributeDelete(false);
    }
  };

  const [snack, setSnack] = useState(false);

  const handleSnackClose = () => {
    setSnack(false);
  };

  const handleCloseUpdate = (value) => {
    if (value) {
      setOpenUpdate(false);
      setSnack(true);
    } else {
      setOpenUpdate(false);
    }
  };
  return (
    <Grid
      item
      key={attribute?._id}
      container
      sx={{
        alignItems: 'center',
        bgcolor:
          currentAttribute === attribute?._id ? '#EAECF0' : 'transparent',
      }}
    >
      <Grid item xs>
        <CardActionArea onClick={() => setCurrentAttribute(attribute?._id)}>
          <Grid
            container
            sx={{
              px: 2,
              py: 1,
              alignItems: 'center',
            }}
          >
            <Grid item xs={2.5}>
              <Image
                src={attribute?.avatar || '/images/noattribute.png'}
                alt='attribute image'
                width={45}
                height={45}
              />
            </Grid>
            <Grid item xs>
              <Typography>{attribute?.name}</Typography>
            </Grid>
            <Grid item xs={1}>
              <Box
                sx={{
                  width: 18,
                  height: 18,
                  bgcolor:
                    attribute?.status === 'active' ? '#00AB4D' : '#FFCA0B',
                  borderRadius: '50%',
                }}
              />
            </Grid>
          </Grid>
        </CardActionArea>
      </Grid>
      <Grid item xs={2}>
        <InventoryAttributeMenu
          id={id}
          attribute={attribute}
          handleDelete={(attribute) => handleDeleteAttribute(attribute, true)}
          handleClickOpenUpdate={handleClickOpenUpdate}
        />
      </Grid>
      <UpdateAttribute
        open={openUpdate}
        onClose={handleCloseUpdate}
        product={id as string}
        attribute={attribute}
      />
      <AttributeDeleteDialogue
        open={openAttributeDelete}
        attribute={attributeDelete}
        handleClose={handleDeleteAttribute}
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
    </Grid>
  );
};

AttributeRow.propTypes = {
  id: PropTypes.string.isRequired,
  attribute: PropTypes.object.isRequired,
  currentAttribute: PropTypes.string.isRequired,
  setCurrentAttribute: PropTypes.func.isRequired,
};

export default AttributeRow;

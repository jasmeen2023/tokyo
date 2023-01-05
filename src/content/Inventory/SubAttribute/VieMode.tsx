import { Card, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { Dispatch, useState } from 'react';

import { SubAttribute } from '@/pages/inventory/[id]';

import InventorySubAttributeMenu from './InventorySubAttributeMenu';
import AttributeDeleteDialogue from '../Attribute/AttributeDeleteDialogue';

interface VieModeProps {
  subAttribute: SubAttribute;
  edit: SubAttribute[];
  setEdit: Dispatch<React.SetStateAction<SubAttribute[]>>;
}

const VieMode = ({ subAttribute, setEdit, edit }: VieModeProps) => {
  const [openSubAttributeDelete, setOpenAttributeDelete] =
    useState<boolean>(false);
  const [subAttributeDelete, setAttributeDelete] = useState<
    SubAttribute | undefined
  >();

  const handleDeleteAttribute = (attribute, value) => {
    if (value && attribute) {
      setAttributeDelete(attribute);
      setOpenAttributeDelete(true);
    } else {
      setOpenAttributeDelete(false);
    }
  };
  return (
    <Card>
      <Box sx={{ px: 2, py: 1 }}>
        <Grid
          container
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid item xs>
            <Typography>{subAttribute?.name}</Typography>
          </Grid>
          <Grid
            item
            xs
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image
              src={subAttribute?.avatar || '/images/noattribute.png'}
              alt='attribute image'
              width={45}
              height={45}
            />
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: 18,
                  height: 18,
                  bgcolor:
                    subAttribute?.status === 'active' ? '#00AB4D' : '#FFCA0B',
                  borderRadius: '50%',
                  mr: 1,
                }}
              ></Box>
              {subAttribute?.status === 'active' ? 'Active' : 'In Active'}
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              justifyContent: 'end',
              textAlign: 'end',
              pr: 2,
            }}
          >
            <InventorySubAttributeMenu
              subAttribute={subAttribute}
              edit={edit}
              setEdit={setEdit}
              handleDelete={(attribute) =>
                handleDeleteAttribute(attribute, true)
              }
            />
          </Grid>
        </Grid>
      </Box>
      <AttributeDeleteDialogue
        open={openSubAttributeDelete}
        attribute={subAttributeDelete}
        handleClose={handleDeleteAttribute}
      />
    </Card>
  );
};

VieMode.propTypes = {
  subAttribute: PropTypes.object.isRequired,
  setEdit: PropTypes.func.isRequired,
};

export default VieMode;

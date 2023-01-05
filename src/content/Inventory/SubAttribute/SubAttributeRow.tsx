import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Dispatch } from 'react';

import { Attribute, SubAttribute } from '@/pages/inventory/[id]';

import EditMode from './EditMode';
import VieMode from './VieMode';

interface SubAttributeRowProps {
  edit: SubAttribute[];
  setEdit: Dispatch<React.SetStateAction<SubAttribute[]>>;
  attributes: Attribute[];
  currentAttribute: string;
}

function SubAttributeRow({
  edit,
  setEdit,
  attributes,
  currentAttribute,
}: SubAttributeRowProps): JSX.Element {
  return (
    <Grid container item spacing={2} xs={12}>
      {attributes
        ?.find((pattribute) => pattribute?._id == currentAttribute)
        ?.subAttributes?.map((attribute) => (
          <Grid item key={attribute?._id} xs={12}>
            {edit?.find(
              (subAttribute) => subAttribute?._id === attribute?._id
            ) ? (
              <EditMode
                subAttribute={attribute}
                edit={edit}
                setEdit={setEdit}
              />
            ) : (
              <VieMode subAttribute={attribute} edit={edit} setEdit={setEdit} />
            )}
          </Grid>
        ))}
    </Grid>
  );
}

SubAttributeRow.propTypes = {
  edit: PropTypes.array.isRequired,
  attributes: PropTypes.array.isRequired,
  currentAttribute: PropTypes.string.isRequired,
  setEdit: PropTypes.func.isRequired,
};
export default SubAttributeRow;

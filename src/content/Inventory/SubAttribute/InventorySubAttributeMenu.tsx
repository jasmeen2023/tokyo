import { MoreVert } from '@mui/icons-material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import { Dispatch, useRef, useState } from 'react';

import { SubAttribute } from '@/pages/inventory/[id]';

interface InventorySubAttributeMenuProps {
  subAttribute: SubAttribute;
  edit: SubAttribute[];
  setEdit: Dispatch<React.SetStateAction<SubAttribute[]>>;
  handleDelete: (attribute: SubAttribute, open: boolean) => void;
}

const InventorySubAttributeMenu = ({
  subAttribute,
  edit,
  setEdit,
  handleDelete,
}: InventorySubAttributeMenuProps) => {
  const actionRef1 = useRef<HTMLButtonElement>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);

  const periods = [
    {
      value: 'edit',
      text: 'Edit Sub-Attribute',
      onClick: () => {
        setEdit((prev) => [...prev, { _id: subAttribute?._id }]);
        setOpenMenuPeriod(false);
      },
    },
    {
      value: 'delete',
      text: 'Delete',
      onClick: () => {
        setOpenMenuPeriod(false);
        handleDelete(subAttribute, true);
      },
    },
  ];

  return (
    <Box>
      <IconButton ref={actionRef1} onClick={() => setOpenMenuPeriod(true)}>
        <MoreVert />
      </IconButton>
      <Menu
        disableScrollLock
        anchorEl={actionRef1.current}
        onClose={() => {
          setOpenMenuPeriod(false);
        }}
        open={openPeriod}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {periods
          .filter((_period) =>
            edit?.find(
              (subEditAttribute) => subEditAttribute?._id === subAttribute?._id
            )
              ? _period.value !== 'edit'
              : true
          )
          .map((_period) => (
            <MenuItem key={_period.value} onClick={_period.onClick}>
              {_period.text}
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );
};

InventorySubAttributeMenu.propTypes = {
  subAttribute: PropTypes.object.isRequired,
  setEdit: PropTypes.func.isRequired,
  edit: PropTypes.array.isRequired,
};

export default InventorySubAttributeMenu;

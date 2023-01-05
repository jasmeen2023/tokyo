import { MoreVert } from '@mui/icons-material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

import { Attribute } from '@/pages/inventory/[id]';

interface InventoryAttributeMenuProps {
  id: string;
  attribute: Attribute;
  handleClickOpenUpdate: (id: string) => void;
  handleDelete: (attribute: Attribute, open: boolean) => void;
}

const InventoryAttributeMenu = ({
  id,
  attribute,
  handleClickOpenUpdate,
  handleDelete,
}: InventoryAttributeMenuProps) => {
  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);

  const periods = [
    {
      value: 'edit',
      text: 'Edit Attribute',
      onClick: () => {
        handleClickOpenUpdate(attribute?._id);
        setOpenMenuPeriod(false);
      },
    },
    {
      value: 'delete',
      text: 'Delete',
      onClick: () => {
        setOpenMenuPeriod(false);
        handleDelete(attribute, true);
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
        open={openPeriod}
        onClose={() => {
          setOpenMenuPeriod(false);
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {periods.map((_period) => (
          <MenuItem key={_period.value} onClick={_period.onClick}>
            {_period.text}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

InventoryAttributeMenu.propTypes = {
  id: PropTypes.string.isRequired,
  attribute: PropTypes.object.isRequired,
  handleClickOpenUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
export default InventoryAttributeMenu;

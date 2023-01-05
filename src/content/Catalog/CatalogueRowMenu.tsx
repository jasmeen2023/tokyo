import { MoreVert } from '@mui/icons-material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Dispatch, SetStateAction, useRef, useState } from 'react';

import { Catalogue } from './Cataloge';

const CatalogueRowMenu = ({
  catalogue,
  setOpenDelete,
}: {
  catalogue: Catalogue;
  setOpenDelete: Dispatch<SetStateAction<boolean>>;
}) => {
  const actionRef1 = useRef<HTMLButtonElement>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const router = useRouter();

  const periods = [
    {
      value: 'edit',
      text: 'Edit Catalogue',
      onClick: () => {
        router?.push(`/catalogue/${catalogue?._id}`);
        setOpenMenuPeriod(false);
      },
    },
    {
      value: 'delete',
      text: 'Delete',
      onClick: () => {
        setOpenDelete(true);
        setOpenMenuPeriod(false);
        return;
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
        {periods.map((_period) => (
          <MenuItem key={_period.value} onClick={_period.onClick}>
            {_period.text}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

CatalogueRowMenu.propTypes = {
  catalogue: PropTypes.object.isRequired,
  setOpenDelete: PropTypes.func.isRequired,
};

export default CatalogueRowMenu;

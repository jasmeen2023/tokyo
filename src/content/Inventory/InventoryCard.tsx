import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
  Menu,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useAtom } from 'jotai';
import Image from 'next/image';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import { useRef, useState } from 'react';

import Label from '@/components/Label';

import {
  Inventory,
  openUpdateAtom,
  updateInventoryAtom,
} from '@/store/inventory';

import { AgentFieldStatus } from '@/models/agentStatus';

const getStatusLabel = (AgentFieldStatus: AgentFieldStatus): JSX.Element => {
  const map = {
    active: {
      text: 'Active',
      color: 'success',
    },
    inactive: {
      text: 'In-active',
      color: 'warning',
    },
  };

  const { text, color }: any = map[AgentFieldStatus];
  return <Label color={color}>{text}</Label>;
};

interface InventoryCardProps {
  inventory: Inventory;
  handleDelete: (inventory: Inventory, open: boolean) => void;
}

function InventoryCard({ inventory, handleDelete }: InventoryCardProps) {
  const actionRef1 = useRef<any>(null);
  const [openUpdate, setUpdateOpen] = useAtom(openUpdateAtom);
  const [updateProduct, setUpdateProduct] = useAtom(updateInventoryAtom);

  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const router = useRouter();

  const periods = [
    {
      value: 'edit',
      text: 'Edit Product',
      onClick: () => {
        setOpenMenuPeriod(false);
        setUpdateOpen(true);
        setTimeout(() => {
          setUpdateProduct(inventory);
        }, 1000);
      },
    },
    {
      value: 'manage',
      text: 'Manage Attributes',
      onClick: () => {
        setOpenMenuPeriod(false);
        router.push(`/inventory/${inventory?._id}`);
      },
    },
    {
      value: 'delete',
      text: 'Delete',
      onClick: () => {
        setOpenMenuPeriod(false);
        handleDelete(inventory, true);
      },
    },
  ];

  return (
    <Card
      sx={{
        background: '#FFF',
        borderRadius: 1,
        boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
      }}
    >
      <CardHeader
        title={<>{getStatusLabel(inventory?.status)}</>}
        action={
          <>
            <IconButton
              ref={actionRef1}
              onClick={() => setOpenMenuPeriod(true)}
              aria-label='settings'
            >
              <MoreHorizTwoToneIcon />
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
          </>
        }
      />
      <CardActionArea
        onClick={() => {
          router.push(`/inventory/${inventory?._id}`);
        }}
      >
        <CardContent>
          <Grid container>
            <Grid item marginRight={2}>
              <Image
                src={inventory?.avatar || '/images/noattribute.png'}
                alt=''
                width={70}
                height={70}
              />
            </Grid>
            <Grid item>
              <Typography
                fontSize={18}
                fontWeight={700}
                lineHeight={2}
                sx={{ color: '#242C51' }}
              >
                {inventory?.name}
              </Typography>
              <Grid container direction='row'>
                <Image src='/Vector.png' alt='' width='16.8' height='13.59' />

                <Typography
                  paddingX={1}
                  fontSize={14}
                  fontWeight={500}
                  lineHeight={1}
                  sx={{ color: ' #8795AF' }}
                >
                  SS185
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>

        <CardContent
          sx={{
            background: '#F8F9FB',
            borderRadius: 1,
            m: 1,
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs>
              <Typography
                fontSize={14}
                fontWeight={500}
                sx={{ color: '#8795AF' }}
              >
                Attributes
              </Typography>
              <Typography
                fontSize={20}
                fontWeight={500}
                sx={{ color: '#242C51' }}
              >
                {inventory?.attributes}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography
                fontSize={14}
                fontWeight={500}
                sx={{ color: '#8795AF' }}
              >
                Sub Attributes
              </Typography>
              <Typography
                fontSize={20}
                fontWeight={500}
                sx={{ color: '#242C51' }}
              >
                {inventory?.subAttributes}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

InventoryCard.propTypes = {
  inventory: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

InventoryCard.defaultProps = {
  inventory: {},
};

export default InventoryCard;

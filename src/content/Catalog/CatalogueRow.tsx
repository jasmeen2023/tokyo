import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState } from 'react';

import Label from '@/components/Label';

import { AgentFieldStatus } from '@/models/agentStatus';

import { Catalogue } from './Cataloge';
import CatalogueDeleteDialogue from './CatalogueDeleteDialogue';
import CatalogueRowMenu from './CatalogueRowMenu';

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

const CatalogueRow = ({ catalogue }: { catalogue: Catalogue }) => {
  const router = useRouter();
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          background: '#FFF',
          borderRadius: 1,
          boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
        }}
      >
        <CardHeader
          title={
            <>
              {getStatusLabel(catalogue?.status)}
              <Box display='flex'>
                <Image src='/Vector.png' alt='' width='16.8' height='13.59' />
                <Typography
                  paddingX={1}
                  fontSize={14}
                  fontWeight={500}
                  lineHeight={1}
                  sx={{ color: ' #8795AF' }}
                >
                  {catalogue._id.slice(0, 4)}
                </Typography>
              </Box>
            </>
          }
          action={
            <CatalogueRowMenu
              setOpenDelete={setOpenDelete}
              catalogue={catalogue}
            />
          }
        />
        <Link href={`/catalogue/${catalogue?._id}`}>
          <CardActionArea>
            <CardContent>
              <Grid container>
                <Grid item marginRight={2} xs>
                  <Image
                    src={
                      catalogue?.images.length
                        ? catalogue?.images[0]
                        : '/images/noattribute.png'
                    }
                    alt=''
                    width={70}
                    height={70}
                  />
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    fontSize={18}
                    fontWeight={700}
                    lineHeight={2}
                    variant='body2'
                    sx={{ color: '#242C51' }}
                  >
                    {catalogue?.name}
                  </Typography>
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
                    No. Of Orders
                  </Typography>
                  <Typography
                    fontSize={20}
                    fontWeight={500}
                    sx={{ color: '#242C51' }}
                  >
                    {145}
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography
                    fontSize={14}
                    fontWeight={500}
                    sx={{ color: '#8795AF' }}
                  >
                    Price
                  </Typography>
                  <Typography
                    fontSize={20}
                    fontWeight={500}
                    sx={{ color: '#242C51' }}
                  >
                    {catalogue?.finalPrice}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
      <CatalogueDeleteDialogue
        catalogue={catalogue}
        open={openDelete}
        handleClose={(value) => setOpenDelete((prev) => !prev)}
      />
    </Grid>
  );
};

CatalogueRow.propTypes = {
  catalogue: PropTypes.object.isRequired,
};

export default CatalogueRow;

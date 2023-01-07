import { ArrowForward } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  LinearProgress,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { CardContent, Container, Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

import { DivProps } from './CaseStatistics';

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
    border: ${theme.colors.alpha.white[100]} solid 2px;
`
);

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(2.5)};
    height: ${theme.spacing(2.5)};
`
);

const LinearProgressWrapper = styled(LinearProgress)(
  ({ theme }) => `
        flex-grow: 1;
        height: 10px;
        
        &.MuiLinearProgress-root {
          background-color: ${theme.colors.alpha.black[10]};
        }
        
        .MuiLinearProgress-bar {
          border-radius: ${theme.general.borderRadiusXl};
        }
`
);

const Arrow = styled(ArrowForward)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  border: `1px solid ${theme.palette.info.main}`,
  padding: 5,
  height: 30,
  width: 30,
  borderRadius: '50%',
  borderStyle: 'solid',
  color: theme.colors.primary.main,
}));

const AreaFilterItem = styled(Box)<DivProps>(({ theme, active }) => ({
  backgroundColor: active ? '#13BBE6' : '#F4F7F9',
  color: active ? 'white' : '',
  fontSize: 10,
  fontWeight: 600,
  height: 40,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  cursor: 'pointer',
}));

const Data = [
  {
    id: 1,
    name: 'Annette Watson',
    img: '/assets/img/avatars/Mask.png',
    number: 93,
  },
  {
    id: 2,
    name: 'Annette Watson',
    img: '/assets/img/avatars/Mask.png',
    number: 93,
  },
  {
    id: 3,
    name: 'Annette Watson',
    img: '/assets/img/avatars/Mask.png',
    number: 93,
  },
  {
    id: 4,
    name: 'Annette Watson',
    img: '/assets/img/avatars/Mask.png',
    number: 93,
  },
  {
    id: 5,
    name: 'Annette Watson',
    img: '/assets/img/avatars/Mask.png',
    number: 93,
  },
  {
    id: 6,
    name: 'Annette Watson',
    img: '/assets/img/avatars/Mask.png',
    number: 93,
  },
];

function CaseDetails() {
  const theme = useTheme();

  return (
    <Card
      sx={{
        background: '#FFF',
        borderRadius: 1,
        boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
      }}
    >
      <CardHeader title='Case Details'></CardHeader>

      <Container>
        <Grid container>
          <Grid item xs>
            <AreaFilterItem active={false} sx={{ px: 1, py: 1 }}>
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 600,
                  lineHeight: 18,
                  letterSpacing: '0.01em',
                }}
              >
                Relationship Manager
              </Typography>
            </AreaFilterItem>
          </Grid>
          <Grid item xs>
            <AreaFilterItem active={true} sx={{ px: 1 }}>
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 600,
                  lineHeight: 18,
                  letterSpacing: '0.01em',
                }}
              >
                Processing Officer
              </Typography>
            </AreaFilterItem>
          </Grid>
          {/* <Grid item xs>
            <AreaFilterItem active={false} sx={{ px: 1 }}>
              <Typography sx={{ fontSize: 10 }}>Reviewer</Typography>
            </AreaFilterItem>
          </Grid> */}
        </Grid>
      </Container>

      <CardContent sx={{ px: 4 }}>
        <Grid container>
          {Data.map((_id) => (
            <Grid
              item
              key={_id.id}
              paddingY={2}
              md={12}
              sx={{
                borderBottom: 0.5,
                borderBottomColor: '#C4C4C4',
              }}
            >
              <Box display='flex' alignItems='center' mt={1.5}>
                <Image src={_id.img} alt='' width={64} height={64} />
                <Box width={20}></Box>
                <Grid container>
                  <Grid item container xs={12}>
                    <Grid
                      item
                      xs
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <AvatarWrapper
                        src='/assets/svg/userDumy.svg'
                        variant='square'
                      />
                      <Box width={10}></Box>
                      <Typography
                        style={{
                          fontSize: 18,
                          fontWeight: 500,
                        }}
                      >
                        {_id.name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        style={{
                          fontSize: 16,
                          fontWeight: 500,
                          color: '#4B65B2',
                        }}
                      >
                        View
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid xs={12} item>
                    <Box height={10} />
                  </Grid>
                  <Grid item container xs={12}>
                    <Grid item xs>
                      <Typography
                        style={{
                          fontSize: 20,
                          fontWeight: 500,
                          color: '#0350C1',
                        }}
                      >
                        16
                      </Typography>
                      <Typography
                        style={{
                          fontSize: 12,
                          fontWeight: 500,
                          color: '#8C8C8C',
                        }}
                      >
                        Total Case
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        style={{
                          fontSize: 20,
                          fontWeight: 500,
                          color: '#A92525',
                        }}
                      >
                        12
                      </Typography>
                      <Typography
                        style={{
                          fontSize: 12,
                          fontWeight: 500,
                          color: '#8C8C8C',
                        }}
                      >
                        In-progress
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        style={{
                          fontSize: 20,
                          fontWeight: 500,
                          color: '#006637',
                        }}
                      >
                        8
                      </Typography>
                      <Typography
                        style={{
                          fontSize: 12,
                          fontWeight: 500,
                          color: '#8C8C8C',
                        }}
                      >
                        Completed
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CaseDetails;

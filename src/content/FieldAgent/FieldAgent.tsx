import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useGetStaff } from '@/hooks/user/useUser';

import Label from '@/components/Label';

import { User } from '@/store/user';

import { AgentFieldStatus, AgentStatus } from '@/models/agentStatus';

// const CustomTableCell = styled()(
//   () => `

//     color: #FFFFFF;
// `
// );

interface Filters {
  status?: AgentFieldStatus;
}

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

  const { text, color }: any = map[AgentFieldStatus] || ['', ''];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (
  agentStatuss: AgentStatus[],
  filters: Filters
): AgentStatus[] => {
  return agentStatuss.filter((AgentStatus) => {
    let matches = true;

    if (filters.status && AgentStatus.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const FieldAgent = () => {
  const theme = useTheme();
  const router = useRouter();
  const [staff, setStaff] = useState<User[]>([]);
  const [query, setQuery] = useState<any>({
    role: ['agent'],
  });
  const getStaffHook = useGetStaff();

  const getStaff = async () => {
    const res: any = await getStaffHook.mutateAsync({
      query: query,
    });
    if (res?.status === 'success') {
      setStaff(res?.users);
    }
  };

  useEffect(() => {
    getStaff();
  }, [query]);

  return (
    <>
      <Card
        sx={{
          background: '#FFF',
          borderRadius: 1,
          boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
        }}
      >
        <CardHeader
          action={
            <Grid>
              <TextField
                size='small'
                onChange={(event) => {
                  if (event.target.value) {
                    setQuery((prev) => ({ ...prev, name: event.target.value }));
                  } else {
                    setQuery((prev) => ({
                      ...Object.keys(prev)
                        .filter((key) => key !== 'name')
                        .reduce(
                          (prev, curr) => ({ ...prev, [curr]: query[curr] }),
                          {}
                        ),
                    }));
                  }
                }}
                placeholder='Search Agent'
                sx={{
                  marginRight: 1,
                  borderRadius: 7,
                  background: '#F8F9FB',
                  alignItems: 'center',
                  outlineColor: '#F8F9FB',
                  p: 0,
                }}
                //helperText='Some important text'
                variant='outlined'
                InputProps={{
                  style: { paddingRight: 0, borderRadius: 0 },
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchTwoToneIcon
                        sx={{ color: theme.palette.grey[500] }}
                      />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position='end'
                      sx={{ m: 0, p: 0 }}
                      style={{ margin: 0, padding: 0 }}
                    >
                      <Button
                        variant='contained'
                        fullWidth
                        sx={{
                          background: '#122917',
                          height: 36,
                          color: 'white',
                          margin: 0,
                          borderRadius: 0,
                          borderTopRightRadius: 7,
                          borderBottomRightRadius: 7,
                        }}
                      >
                        Search
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          }
          title={`Total Field Agents: ${staff.length}`}
        />
        <Divider />
      </Card>

      <Grid container spacing={2} marginY={2}>
        {staff.map((user: any) => (
          <Grid key={user._id} item lg={3}>
            <Card
              onClick={() => {
                router.push(`/fieldagents/${user._id}`);
              }}
              sx={{
                cursor: 'pointer',
                background: '#FFF',
                borderRadius: 1,
                boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
              }}
            >
              <CardHeader
                title={<>{getStatusLabel(user?.status)}</>}
                action={
                  <IconButton aria-label='settings'>
                    <MoreHorizTwoToneIcon />
                  </IconButton>
                }
                // title={_id.agentName}
                // subheader={_id.iconNumber}
              />

              <CardContent>
                <Grid container>
                  <Grid item marginRight={2}>
                    <Image
                      src={user?.avatar || '/agentpic.png'}
                      alt=''
                      width={50}
                      height={50}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      fontSize={18}
                      fontWeight={700}
                      lineHeight={2}
                      sx={{ color: '#242C51' }}
                    >
                      {user?.name}
                    </Typography>
                    <Grid container direction='row'>
                      <Image
                        src='/Vector.png'
                        alt=''
                        width='16.8'
                        height='13.59'
                      />

                      <Typography
                        paddingX={1}
                        fontSize={14}
                        fontWeight={500}
                        lineHeight={1}
                        sx={{ color: ' #8795AF' }}
                      >
                        {user?._id.slice(0, 5)}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>

              <CardContent
                sx={{
                  background: '#F8F9FB',
                  borderRadius: 1,
                  textAlign: 'center',
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
                      Total
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
                      Ongoing
                    </Typography>
                    <Typography
                      fontSize={20}
                      fontWeight={500}
                      sx={{ color: '##242C51' }}
                    >
                      {65}
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography
                      fontSize={14}
                      fontWeight={500}
                      sx={{ color: '#8795AF' }}
                    >
                      Completed
                    </Typography>
                    <Typography
                      fontSize={20}
                      fontWeight={500}
                      sx={{ color: '#242C51' }}
                    >
                      {70}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              {/* <CardMedia
                sx={{
                  height: 0,
                  paddingTop: '56.25%', // 16:9
                }}
                image='/static/images/placeholders/covers/1.jpg'
                title='Paella dish'
              /> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FieldAgent;

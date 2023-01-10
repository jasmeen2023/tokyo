import styled from '@emotion/styled';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import Image from 'next/image';

const cards = [
  {
    id: 1,
    text: 'Last updated on',
    date: new Date().getTime(),
    data: 'Updated By',
    img: '/assets/img/avatars/Mask.png',
    name: 'Elva Cross',
    content:
      'A case note is a summary and analysis of a single case, as opposed to an article, which examines an area of law. A case note should outline the facts of the case, as well as its ratio decedendi, and also provide a critical analysis of the decision.',
  },
  {
    id: 2,
    text: 'Last updated on',
    date: new Date().getTime(),
    data: 'Updated By',
    img: '/assets/img/avatars/Mask.png',
    name: 'Elva Cross',
    content:
      'A case note is a summary and analysis of a single case, as opposed to an article, which examines an area of law. A case note should outline the facts of the case, as well as its ratio decedendi, and also provide a critical analysis of the decision.',
  },
  {
    id: 3,
    text: 'Last updated on',
    date: new Date().getTime(),
    data: 'Updated By',
    img: '/assets/img/avatars/Mask.png',
    name: 'Elva Cross',
    content:
      'A case note is a summary and analysis of a single case, as opposed to an article, which examines an area of law. A case note should outline the facts of the case, as well as its ratio decedendi, and also provide a critical analysis of the decision.',
  },
];

const CaseNotes = () => {
  return (
    <Card
      sx={{
        background: '#FFF',
        borderRadius: 0,
        boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
      }}
    >
      <CardHeader title='Case Notes' action={<Button>view more</Button>} />
      {cards.map((card) => (
        <Card
          key={card.id}
          sx={{
            background: '#FFF',
            borderRadius: 0,
            boxShadow: '0px 2px 5px 0px rgb(58 53 65 / 10%)',
          }}
        >
          <CardContent>
            <Box sx={{ background: '#EEF7FE', padding: 2 }}>
              <Grid
                container
                spacing={1}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingBottom: 2,
                }}
              >
                <Typography
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: '#000000',
                    marginRight: 1,
                    lineHeight: '19px',
                  }}
                >
                  {card.text}
                </Typography>
                <Typography
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '0.01em',
                    color: '#292D32',
                  }}
                >
                  {card.date}
                </Typography>
              </Grid>

              <Grid
                spacing={2}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '12px',
                    color: '#000000',
                    lineHeight: '16px',
                    marginRight: 3,
                  }}
                >
                  {card.data}
                </Typography>
                <Image src={card.img} alt='avatar' width={40} height={40} />

                <Typography
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: '140.1%',
                    color: '#263238',
                    marginLeft: 1,
                  }}
                >
                  {card.name}
                </Typography>
              </Grid>
            </Box>
            <Box sx={{ background: '#F6F7F8', padding: 2 }}>
              <Typography>{card.content}</Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Card>
  );
};

export default CaseNotes;

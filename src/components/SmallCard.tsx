import { Card, CardMedia, Typography, Box } from '@mui/material';

interface Idata {
  photo: string;
  date: string;
  name: string;
}

export default function SmallCard(props: Idata) {

  return (
    <Box sx={{ position: "relative", cursor: "pointer" }}>
      <Card sx={{ width: "90px" }}>
        <CardMedia
          component="img"
          height="100px"
          src={props.photo}
          alt="Paella dish"
        />
      </Card>
      <Box sx={{ marginTop: "10px" }}>
        <Typography fontSize={"8px"}>
          {props.date}
        </Typography>
        <Typography fontSize={"10px"} fontWeight={"bold"}>
          {props.name}
        </Typography>
      </Box>
    </Box>

  );
}

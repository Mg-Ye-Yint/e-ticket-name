import { Box, Card, CardMedia, Typography } from '@mui/material'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

interface Idata {
  photo: string;
  name: string;
  date: string;
  time: string;
  place: string;
}

export default function EventCard(props: Idata) {
  return (
    <Box>
      <Card sx={{ width: "202px", borderRadius: "20px", background: "black" }}>
        <CardMedia
          component="img"
          height="209px"
          src={props.photo}
          alt="Paella dish"
          sx={{ borderRadius: "20px" }}
        />
      </Card>
      <Box sx={{ borderRadius: "15px", padding: "10px", background: "#272727", marginTop: "10px", width: "185px", height: "90px" }}>
        <Typography fontSize={"8px"} sx={{ marginBottom: "5px" }}>
          {props.name}
        </Typography>
        <Box sx={{ display: "flex", fontSize: "8px", alignContent: "center", alignItems: "center", gap: 0.5, marginBottom: "4px" }}>
          <CalendarTodayOutlinedIcon sx={{ fontSize: "10px" }} /> {props.date}
        </Box>
        <Box sx={{ display: "flex", fontSize: "8px", alignContent: "center", alignItems: "center", gap: 0.5, marginBottom: "4px" }}>
          <AccessTimeOutlinedIcon sx={{ fontSize: "10px" }} /> {props.time}
        </Box>
        <Box sx={{ display: "flex", fontSize: "8px", alignContent: "center", alignItems: "center", gap: 0.5, marginBottom: "4px" }}>
          <FmdGoodOutlinedIcon sx={{ fontSize: "10px" }} /> {props.place}
        </Box>
      </Box>
    </Box>
  )
}

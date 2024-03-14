import { Card, CardMedia } from '@mui/material'
import chin from '../assets/eventRecommend/Chiang mai holi festival.jpg'

export default function SmallCardMork() {
  return (
    <Card sx={{width:"60px"}}>
        <CardMedia
            component="img"
            height="80px"
            image={chin}
            alt="Paella dish"
        />
    </Card>
  )
}

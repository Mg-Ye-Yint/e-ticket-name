import { Box, Card, CardMedia, Divider, IconButton, Paper, Typography } from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import { useNavigate, useParams } from 'react-router-dom';
import { getEventDetails } from '../api/EventData';
import { useEffect, useState } from 'react';
import { IEventDetail } from '../interfaces/Ievent';
import parse from 'html-react-parser';
import Loading from '../components/Loading';
import '../utils/Detail.css';
import EventDetailFooter from '../components/EventDetailFooter';
import { themeApp } from '../utils/Theme';

export default function Details() {
    const navigate = useNavigate();
    const { eventId } = useParams();
    const [eventDetails, setEventDetail] = useState<IEventDetail>();
    const [loading, setLoading] = useState(false);
    const [eventContentDetail, setEventContentDetail] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const eventData = await getEventDetails(eventId ?? "");
                console.log(eventData)
                const newData = eventData.detailRaw.replace(/<img/, '<img class="custom-img"');
                setEventContentDetail(newData);
                setEventDetail(eventData);
            } catch (error) {
                console.error("Error fetching event details:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [eventId]);

    return (
        <Box sx={{
            display: "flex", width: "100%", background: "black", justifyContent: "center", marginBottom: "100px",
            [themeApp.breakpoints.down("lg")]: {
                width: "100%", height: "auto"
            }
        }}>
            <Box sx={{ height: "auto", width: "375px", flexDirection: "column", }}>
                <Loading openLoading={loading} />
                {eventDetails !== undefined && (
                    <Box sx={{ paddingTop: "10px" }}>
                        <Box sx={{
                            display: "flex", justifyContent: "space-between",
                            alignContent: "center", alignItems: "center",
                            padding: "10px"
                        }}
                        >
                            <IconButton
                                onClick={() => navigate(-1)}
                                size='large' sx={{ color: "white", width: "13px", height: "19px" }}>
                                <ArrowBackIosNewOutlinedIcon sx={{ width: "15px" }} />
                            </IconButton>
                            <Typography fontSize={"14px"}>
                                รายระเอียด
                            </Typography>
                            <IconButton size='large' sx={{ color: "white", width: "13px", height: "19px" }}>
                                <IosShareOutlinedIcon sx={{ width: "15px" }} />
                            </IconButton>
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                            <Card sx={{ width: "344px", borderRadius: "20px", background: "black" }}>
                                <CardMedia
                                    component="img"
                                    height="367px"
                                    image={eventDetails.poster ?? ""}
                                    alt="Paella dish"
                                />
                            </Card>
                            {/* <img style={{ width: "100px" }} src="https://qiniu.cdn.maketie.cn/20240229/145216170918955613564.87574910360718.JPG!hd" /> */}
                        </Box>

                        <Typography fontSize={"14px"} fontWeight={"bold"} sx={{ paddingTop: "20px", paddingLeft: "20px", marginRight: "10px" }}>
                            {eventDetails.title ?? ""}
                        </Typography>
                        <Paper sx={{
                            marginLeft: "20px", marginTop: "10px",
                            marginRight: "20px", borderRadius: "10px", padding: "10px", background: `rgba(217, 217, 217, 0.25)`
                            , color: "#DADADA", zIndex: "100"
                        }}>
                            <Box sx={{
                                display: "flex", fontSize: "12px", alignContent: "center",
                                alignItems: "center", gap: 0.5,
                                marginBottom: "4px"
                            }}>
                                <CalendarTodayOutlinedIcon sx={{ fontSize: "12px" }} /> {eventDetails.time ?? ""}
                            </Box>
                            <Box sx={{ marginBottom: "4px", display: "flex", fontSize: "12px", alignContent: "center", alignItems: "center", gap: 0.5 }}>
                                <AccessTimeOutlinedIcon sx={{ fontSize: "12px" }} /> {eventDetails.timeStart} {eventDetails.timeEnd != null ? `- ${eventDetails.timeEnd}` : ''}
                            </Box>
                            <Box sx={{ marginBottom: "4px", display: "flex", fontSize: "12px", alignContent: "center", alignItems: "center", gap: 0.5 }}>
                                <FmdGoodOutlinedIcon sx={{ fontSize: "12px" }} /> {eventDetails.locationName}
                            </Box>
                            <Box sx={{ marginBottom: "4px", display: "flex", fontSize: "12px", alignContent: "center", alignItems: "center", gap: 0.5 }}>
                                <PaymentsOutlinedIcon sx={{ fontSize: "12px" }} /> {eventDetails.availableTickets.length > 0 ? eventDetails.availableTickets[0].price + " " + eventDetails.availableTickets[0].currency : "0 THB"}
                            </Box>
                        </Paper>
                        {/* <Typography sx={{ paddingTop: "20px", paddingLeft: "20px", marginBottom: "10px" }}>
                        ศิลปิน
                    </Typography>
                    <Divider sx={{ border: "0.5px solid #5E5E5E", marginBottom: "10px", marginLeft: "20px", marginRight: "20px" }} />
                    <Box sx={{ display: "flex", marginLeft: "20px", gap: "10px" }}>
                        <Avatar src="/img/taitosmith.jpg" />
                        <Avatar src="/img/three man down.jpeg" />
                        <Avatar src="/img/tilly bird.jpeg" />
                        <Avatar src="/img/body slam.jpeg" />
                    </Box> */}

                        <Typography sx={{ paddingTop: "20px", paddingLeft: "20px", marginBottom: "10px" }}>
                            รายละเอียด
                        </Typography>
                        <Divider sx={{ border: "0.5px solid #5E5E5E", marginBottom: "10px", marginLeft: "20px", marginRight: "20px" }} />
                        <Box sx={{ fontSize: "12px", display: "flex", justifyContent: "center" }}>
                            <Box sx={{ flexDirection: "column", marginRight: "20px", marginLeft: "20px", }}>
                                {parse(eventContentDetail)}
                            </Box>
                        </Box>

                        {/* <Typography fontSize="12px" textAlign={"center"} sx={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}>
                        Water War Chiang Mai 2024 เทศกาลดนตรีน้ำใหญ่ที่สุดในภาคเหนือ <br />
                        <u>#BODYSLAM</u> • <u>#THREEMANDOWN</u> • <u>#TILLYBIRDS</u> <br />
                        • <u>#TAITOSMITH</u> • <u>#PALMY</u> • <u>#SLOTMACHINE</u> • <u>#TATTOOCOLOUR</u> • <u>#LOMOSONIC</u> • <u>#RETROSPECT</u>
                        <u>#LOUR</u> • <u>#LOMOSONIC</u> •<u>#RETROSPECT</u>
                    </Typography> */}

                        {/* <Typography fontSize="12px" textAlign={"center"} sx={{ marginTop: "20px" }}>
                        กดบัตรพร้อมกัน {eventDetails.ticketStartAt ?? "None"} {eventDetails.ticketCloseTime != null ? `- ${eventDetails.ticketCloseTime.split('Z')}` : ''} <br />
                        บัตร เริ่มต้นราคา {eventDetails.availableTickets.length > 0 ? eventDetails.availableTickets[0].price : "0"} บาท
                    </Typography>
                    <Typography fontSize="12px" textAlign={"center"} sx={{ marginTop: "20px" }}>
                        แล้วมาเจอกัน <br />
                        {eventDetails.time ?? ""} <br />
                        ที่{eventDetails.locationName}
                    </Typography> */}

                        {/* <Typography fontSize="12px" textAlign={"left"}
                        sx={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}
                        color={"#1B79FF"}
                    >
                        เงื่อนไขการจำหน่ายบัตร {eventDetails.title}
                    </Typography> */}
                        {/* <Typography fontSize="12px" textAlign={"left"} sx={{ marginLeft: "20px", marginRight: "20px" }} >
                        <li>
                            เริ่มจำหน่ายบัตร EARLY SPLASH วันที่ 29 กุมภาพันธ์ 2567 ตั้งแต่เวลา 09:00 น. ถึงวันที่ 2 มีนาคม 2567 เวลา 23.59 น.
                        </li>
                        <li>
                            บัตร EARLY SPLASH ราคา 1998 บาท
                        </li>
                        <li>
                            จำกัดการซื้อบัตรไม่เกิน 20 ใบ ต่อการทำรายการซื้อ 1 ครั้ง
                        </li>
                        <li>
                            ขายบัตรในรูปแบบ E-Ticket
                        </li>
                        <li>
                            กรณีบัตรถูกจำหน่ายหมดภายในวันใดวันหนึ่งของการเปิดขาย ระบบจะปิดการจำหน่ายบัตรทันที
                        </li>
                        <li>
                            ลูกค้านำ QR Code ที่ได้รับบนแอปฯ ที่แสดงสถานะ “ใช้ได้” มาแสดงที่ประตูทางเข้า เพื่อยืนยันการเข้างาน พร้อมกับบัตรประจำตัวประชาชน โดย QR Code 1 ใบต่อการเข้างาน 1 คนเท่านั้น
                        </li>
                        <li>
                            ลูกค้าที่มี QR Code ในโทรศัพท์มากกว่า 1 ใบต้องทำการส่งบัตรให้ผู้ที่มาร่วมชมงาน โดยการส่งทางแอปฯ เท่านั้น ไม่สามารถแสดงที่ประตูทางเข้าเพื่อเข้างานแทนกันได้
                        </li>
                        <li>
                            QR Code ที่ถูกสแกนแล้วจะแสดงสถานะ “ใช้งานแล้ว” และไม่สามารถนำมาสแกนซ้ำได้
                        </li>
                        <li>
                            ทางผู้จัดงานไม่อนุญาตให้นำบัตรไปใช้ประโยชน์ทางการค้า,การทำโปรโมชั่นกับสินค้า เช่น การลด, แลก, แจก, แถม เว้นแต่จะได้รับความยินยอมจากทางผู้จัดงาน
                        </li>
                    </Typography> */}

                        {/* footer */}

                    </Box>
                )}
                <EventDetailFooter eventDetails={eventDetails} eventId={eventId ?? ""} />
            </Box>
        </Box >
    );
}
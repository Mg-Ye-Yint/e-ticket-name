
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import CloseIcon from "@mui/icons-material/Close";

import "./SlipPage.css";
import { useNavigate } from "react-router-dom";
import { themeApp } from "../utils/Theme";

export const SlipPage = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{
            display: "flex", width: "100%", background: "black", justifyContent: "center",
            [themeApp.breakpoints.down("lg")]: {
                width: "100%", height: "auto", marginBottom: "100px"
            }
        }}>
            <Box sx={{ height: "auto", width: "375px", flexDirection: "column" }}>
                <Box
                    sx={{
                        paddingTop: "10px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        marginLeft: "10px",
                        marginRight: "10px"
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "10px",
                            width: "100%",
                            maxWidth: "363px"
                        }}
                    >
                        <IconButton
                            onClick={() => navigate(-1)}
                            size='large'
                            sx={{
                                color: "white",
                                width: "13px",
                                height: "19px",
                            }}
                        >
                            <ArrowBackIosNewOutlinedIcon sx={{ width: "15px" }} />
                        </IconButton>
                        <Typography fontSize={"14px"} sx={{ margin: "0 auto" }}>
                            รายละเอียดตั๋ว
                        </Typography>
                        <IconButton
                            onClick={() => navigate("/")}
                            size="large"
                            sx={{
                                color: "white",
                                width: "13px",
                                height: "19px"
                            }}
                        >
                            <CloseIcon sx={{ width: "15px" }} />
                        </IconButton>
                    </Box>
                    <Box width={"343px"} height="682px" paddingBottom={"59px"} bgcolor={"white"} borderRadius={"10px"} marginTop={"18px"} marginLeft={"14px"} marginRight={"14px"} display={"flex"} flexDirection={"column"} position={"relative"}>
                        <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"start"} gap={"10px"} paddingTop={"12px"}>

                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Typography fontSize={"14px"} fontFamily={"500"} color={"#444444"} padding="10px" fontWeight={"medium"}>LAMAYA</Typography>
                                <Box sx={{ height: "20px", width: "110px" }} display={"flex"} alignItems={"center"} bgcolor={"#D9D9D9"} borderRadius={"8px"} paddingTop={"3px"} paddingBottom={"2px"} paddingLeft={"10px"} paddingRight={"8px"} gap={"7px"}>
                                    <img className="phone-logo" src="src/assets/icons/phone.svg"></img>
                                    <Typography color={"#000000"} fontSize={"12px"}>ติดต่อผู้จัดงาน</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Typography fontSize={"20px"} fontWeight={"600"} color={"#222222"} paddingTop={"6px"} textAlign={"left"} marginLeft={"10px"}>Water War Chiangmai 2024</Typography>
                        <Typography fontSize={"12px"} color={"#787878"} paddingTop={"6px"} textAlign={"left"} marginLeft={"10px"}>ใช้งานได้ถึงวันที่ 13 เมษายน 2024</Typography>

                        <Box borderBottom="2px solid #EBEBEB" paddingTop="9px" position="relative" width="371px" left="-14px">
                            <div className="dotcircle-left"></div>
                            <div className="dotcircle-right"></div></Box>
                        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} paddingTop={"18px"}>
                            <Box onClick={() => navigate("/review")}>
                                <img className="qr-code" src="src/assets/qrcode.png"></img>
                            </Box>

                            <Typography color={"black"} fontSize={"16px"}>184049280</Typography>
                            <Typography color={"black"} fontSize={"12px"} paddingTop={"9px"}>กรุณาแสดงรหัส QR หรือรหัสตั๋วต่อเจ้าหน้าที่ตรวจสอบตั๋ว</Typography>
                            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} paddingTop={"11px"} gap={"6px"}>
                                <p className="transactions">เวลาเช็คอิน</p>
                                <Typography color={"black"} fontSize={"16px"} fontWeight="500">18:00</Typography>
                            </Box>
                        </Box>
                        <Box borderBottom="2px solid #EBEBEB" paddingTop="27px" position="relative" width="371px" left="-14px">
                            <div className="dotcircle-left"></div>
                            <div className="dotcircle-right"></div></Box>
                        <Box display={"flex"} flexDirection={"column"} padding={"10px"}>
                            <Box display={"flex"} justifyContent={"space-between"}><p className="transaction-text">ประเภทตั๋ว</p><p className="transaction-text">1 วัน</p></Box>
                            <Box display={"flex"} justifyContent={"space-between"}><p className="transaction-text">จำนวน</p><p className="transaction-text">1</p></Box>
                            <Box display={"flex"} justifyContent={"space-between"}><p className="transaction-text">เวลาในการสั่งซื้อ</p><p className="transaction-text">15 มีนาคม 14:30 น.</p></Box>
                            <Box display={"flex"} justifyContent={"space-between"}><p className="transaction-text">หมายเลขคำสั่งซื้อ</p><p className="transaction-text">4872974</p></Box>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

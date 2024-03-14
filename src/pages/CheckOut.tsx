import { Box, Button, Typography } from "@mui/material";
import { themeApp } from "../utils/Theme";
// import Loading from "../components/Loading";
// import { useState } from "react";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CheckOutCard from "../components/CheckOutCard";
import { NavLink } from "react-router-dom";

export default function CheckOut() {
    // const [loading, setLoading] = useState(false);

    const handleResetTicket = () => {
        localStorage.removeItem("tickets");
    }

    return (
        <Box sx={{
            display: "flex", width: "100%", background: "black", justifyContent: "center",
            [themeApp.breakpoints.down("lg")]: {
                width: "100%", height: "auto"
            }
        }}>
            <Box sx={{ height: "auto", width: "343px", flexDirection: "column", }}>
                <Box sx={{ marginBottom: "100px" }}>
                    {/* <Loading openLoading={loading} /> */}
                    <Box>
                        <Typography fontSize={"16px"} fontWeight={"bold"} sx={{ paddingTop: "10px" }} textAlign={"center"}>
                            การชำระเงิน
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "31px" }}>
                        <CheckCircleOutlineOutlinedIcon sx={{ width: "82px", height: "82px", color: "green" }} />
                    </Box>
                    <Box>
                        <Typography fontSize={"16px"} fontWeight={"bold"} sx={{ paddingTop: "31px" }} textAlign={"center"}>
                            การชำระเงินสำเร็จ
                        </Typography>
                        <Typography fontSize={"12px"} textAlign={"center"}>
                            สามารถดูรายละเอียดเพิ่มเติมได้ในกิจกรรมของฉัน
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "31px" }}>
                        <CheckOutCard />
                    </Box>
                    <NavLink to={"/myticket"}>
                        <Box onClick={handleResetTicket} sx={{ display: "flex", justifyContent: "center", marginTop: "31px" }}>
                            <Button variant="contained" sx={{ width: "343px", height: "44px" }}>ดูตั๋วของฉัน</Button>
                        </Box>
                    </NavLink>
                    <NavLink to={"/"}>
                        <Box onClick={handleResetTicket} sx={{ display: "flex", justifyContent: "center" }}>
                            <Button variant="outlined" sx={{ width: "343px", height: "44px", marginTop: "10px" }}>กลับหน้าหลัก</Button>
                        </Box>
                    </NavLink>

                </Box>
            </Box>
        </Box>
    )
}

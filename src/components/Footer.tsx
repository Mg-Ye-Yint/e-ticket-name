import { Box, Typography } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { themeApp } from '../utils/Theme';
import { NavLink, useLocation } from 'react-router-dom';

export default function Footer() {
    const location = useLocation();
    return (
        <Box sx={{
            display: "flex", justifyContent: "space-between", background: "white", position: "fixed",
            bottom: "0px", height: "66px", borderRadius: "10px 10px 0 0", marginTop: "120px",
            alignContent: "center", alignItems: "center", width: "375px",
            [themeApp.breakpoints.down("lg")]: {
                position: "fixed", width: "375px"
            }

        }}>
            <NavLink to={"/"}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px",
                        textAlign: "center",
                    }}
                >
                    {location.pathname === "/" ? (
                        <ExploreIcon sx={{ width: "22px", height: "22px", color: "#5E5E5E" }} />
                    ) : (
                        <ExploreOutlinedIcon sx={{ width: "22px", height: "22px", color: "#5E5E5E" }} />
                    )}
                    <Typography fontSize={"12px"} color="#5E5E5E">สำรวจ</Typography>
                </Box>
            </NavLink>

            <NavLink to={"/user"}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px",
                        textAlign: "center",
                    }}
                >
                    {location.pathname === "/user" ? (
                        <AccountCircleIcon sx={{ width: "22px", height: "22px", color: "#5E5E5E" }} />
                    ) : (
                        <AccountCircleOutlinedIcon sx={{ width: "22px", height: "22px", color: "#5E5E5E" }} />
                    )}
                    <Typography fontSize={"12px"} color="#5E5E5E">ของฉัน</Typography>
                </Box>
            </NavLink>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    textAlign: "center",
                }}
            >
                <BorderAllOutlinedIcon sx={{ width: "22px", height: "22px", color: "#5E5E5E" }} />
                <Typography fontSize={"12px"} color="#5E5E5E">บทความ</Typography>
            </Box>
            <NavLink to={"/myticket"}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    textAlign: "center",
                }}
            > 
            {location.pathname === "/myticket" ?  <ConfirmationNumberIcon sx={{ width: "22px", height: "22px", color: "#5E5E5E" }} />: <ConfirmationNumberOutlinedIcon sx={{ width: "22px", height: "22px", color: "#5E5E5E" }} />}
                <Typography fontSize={"12px"} color="#5E5E5E">ตั๋วของฉัน</Typography>
            </Box>
            </NavLink>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    textAlign: "center",
                }}
            >
                <PinDropOutlinedIcon sx={{ width: "22px", height: "22px", color: "#5E5E5E" }} />
                <Typography fontSize={"12px"} color="#5E5E5E">แผนที่</Typography>
            </Box>

        </Box>
    );
}
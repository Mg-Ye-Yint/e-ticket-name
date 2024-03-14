import { Paper, Box, Typography, Divider, IconButton } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import "dayjs/locale/th";

interface IData {
    ticketId: number;
    title: string;
    price: number;
    currency: string;
    date: string;
    time: string;
    ticketStartAt: string;
    ticketCloseTime: string;
    ticketStartTime: string;
    place: string;
    handleAdd: (ticketId: number, ticketName: string) => void;
    handleMinus: (ticketId: number) => void;
    handleAddPrice: (num: number) => void;
    handleMinusPrice: (num: number) => void;
}

export default function TicketCard(props: IData) {
    const [ticketNumber, setTicketNumber] = useState(0);
    const [thaiCloseTime, setThaiCloseTime] = useState("");
    const [thaiStartTime, setThaiStartTime] = useState("");

    const handleAddNumber = () => {
        setTicketNumber(pre => pre + 1);
        props.handleAdd(props.ticketId, props.title);
        props.handleAddPrice(props.price);
    };
    const handleMinusNumber = () => {
        props.handleMinus(props.ticketId);
        setTicketNumber(prev => prev > 0 ? prev - 1 : prev);
        props.handleMinusPrice(props.price);
    };

    useEffect(() => {
        dayjs.locale('th');
        const dateCloseTime = dayjs(props.ticketCloseTime);
        const dateStartTime = dayjs(props.ticketStartTime);
        const formattedDateCloseTime = dateCloseTime.format('MMMM D YYYY');
        const formattedDateStartTime = dateStartTime.format('MMMM D YYYY');
        setThaiCloseTime(formattedDateCloseTime);
        setThaiStartTime(formattedDateStartTime);
    }, [props.ticketCloseTime, props.ticketStartTime]);


    return (
        <Paper sx={{
            marginLeft: "20px", marginTop: "10px",
            marginRight: "20px", borderRadius: "10px", padding: "10px", background: `rgba(217, 217, 217, 0.25)`
            , color: "#DADADA", zIndex: "100"
        }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <Typography fontSize={14} fontWeight={"medium"} color={"white"} sx={{ width: "70%" }}>
                    {props.title}
                </Typography>
                <Typography fontSize={14} fontWeight={"medium"} color={"white"}>
                    {props.currency} {props.price}
                </Typography>
            </Box>
            <Box sx={{
                display: "flex", fontSize: "12px", alignContent: "center",
                alignItems: "center", gap: 0.5,
                marginBottom: "4px"
            }}>
                <CalendarTodayOutlinedIcon sx={{ fontSize: "12px" }} /> {props.date}
            </Box>
            <Box sx={{ display: "flex", fontSize: "12px", alignContent: "center", alignItems: "center", gap: 0.5 }}>
                <AccessTimeOutlinedIcon sx={{ fontSize: "12px" }} /> {props.time}
            </Box>
            <Box sx={{
                marginBottom: "4px", display: "flex", fontSize: "12px",
                alignContent: "center", alignItems: "center", gap: 0.5,
                justifyContent: "space-between"
            }}>
                <Box sx={{ display: "flex", alignContent: "center", alignItems: "center", gap: 0.5 }}>
                    <FmdGoodOutlinedIcon sx={{ fontSize: "12px" }} /> {props.place}
                </Box>
                <Box sx={{ display: "flex", alignContent: "center", alignItems: "center" }}>
                    <IconButton size='small' onClick={handleMinusNumber} disabled={ticketNumber < 1}>
                        <RemoveCircleOutlinedIcon sx={{ width: "16px", height: "16px", color: "white" }} />
                    </IconButton>
                    <Box sx={{
                        background: "white", color: "black", width: "32px",
                        height: "16px", textAlign: "center", borderRadius: "7px",
                        alignContent: "start", alignItems: "start"
                    }}
                    >
                        {ticketNumber}
                    </Box>
                    <IconButton size='small' onClick={handleAddNumber} sx={{ marginRight: "-5px" }}>
                        <AddCircleOutlinedIcon sx={{ width: "16px", height: "16px", color: "white" }} />
                    </IconButton>
                </Box>
            </Box>
            <Divider sx={{ borderColor: "#8D8D8D", borderWidth: '1px', borderStyle: 'dashed', marginTop: "10px", marginBottom: "10px" }} />
            <Typography fontSize={"12px"} color={"#DADADA"}>
                {/* จากปกติ 1,500 บาท <br /> */}
                เริ่มจำหน่ายวันที่ {thaiStartTime} - {thaiCloseTime}
            </Typography>
        </Paper>
    );
}

import { Box, IconButton, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import TicketCard from "../components/TicketCard";
import { useEffect, useState } from "react";
import { getEventDetails } from "../api/EventData";
import { IEventDetail } from "../interfaces/Ievent";
import Loading from "../components/Loading";
import TicketFooter from "../components/TicketFooter";
import { themeApp } from "../utils/Theme";


export default function SelectTicket() {
    const navigate = useNavigate();
    const [ticketTotalNumber, setTicketTotalNumber] = useState(0);
    const [price, setPrice] = useState(0);
    const { eventId } = useParams();
    const [eventDetails, setEventDetail] = useState<IEventDetail>();
    const [loading, setLoading] = useState(false);
    const [ticketSum, setTicketSum] = useState<{ id: number; number: number; name: string }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const eventData = await getEventDetails(eventId ?? "");
                setEventDetail(eventData);
            } catch (error) {
                console.error("Error fetching event details:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [eventId]);
    const handleAdd = (ticketId: number, ticketName: string) => {
        setTicketSum(prevState => {
            const index = prevState.findIndex(ticket => ticket.id === ticketId);
            if (index !== -1) {
                const updatedTickets = [...prevState];
                updatedTickets[index].number += 1;
                return updatedTickets;
            } else {
                return [...prevState, { id: ticketId, number: 1, name: ticketName }];
            }
        });
        setTicketTotalNumber(pre => pre + 1);
    };
    const handleMinus = (ticketId: number) => {
        setTicketSum(prevState => {
            const index = prevState.findIndex(ticket => ticket.id === ticketId);
            if (index !== -1) {
                const updatedTickets = [...prevState];
                if (updatedTickets[index].number > 0) {
                    updatedTickets[index].number -= 1;
                }
                return updatedTickets;
            }
            return prevState;
        });
        setTicketTotalNumber(prev => prev > 0 ? prev - 1 : prev);
    };


    const handleAddPrice = (price: number) => {
        setPrice(prev => Math.round(prev + price));
    };

    const handleMinusPrice = (price: number) => {
        setPrice(prev => prev > 0 ? Math.round(prev - price) : prev);
    };

    const handleSend = () => {
        const dataTicket = {
            title: eventDetails?.title,
            ticketSum: ticketSum,
            price: price,
            poster: eventDetails?.poster
        };
        const ticketSumAsString = JSON.stringify(dataTicket);
        localStorage.setItem("tickets", ticketSumAsString);
        navigate("/checkOut")
    }

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
                            display: "flex",
                            alignContent: "center",
                            alignItems: "center",
                            padding: "10px",
                            justifyContent: "space-between",
                            textAlign: "center"
                        }}
                        >
                            <IconButton
                                onClick={() => navigate(-1)}
                                size='large' sx={{ color: "white", width: "16px", height: "16px" }}>
                                <ArrowBackIosNewOutlinedIcon sx={{ width: "15px" }} />
                            </IconButton>
                            <Typography fontSize={"14px"} fontFamily={"PingFang"} textAlign={"center"} >
                                เลือกซื้อบัตร
                            </Typography>
                            <Box></Box>
                        </Box>
                        {eventDetails.availableTickets.map((item, index) => (
                            <Box key={index}>
                                <TicketCard
                                    ticketId={item.id}
                                    title={item.name}
                                    date={eventDetails.time}
                                    price={item.price}
                                    currency={item.currency}
                                    time={eventDetails.timeStart}
                                    place={eventDetails.locationName}
                                    ticketStartAt={eventDetails.ticketStartAt}
                                    ticketCloseTime={eventDetails.ticketCloseTime}
                                    ticketStartTime={eventDetails.ticketStartTime}
                                    handleAdd={handleAdd}
                                    handleMinus={handleMinus}
                                    handleAddPrice={handleAddPrice}
                                    handleMinusPrice={handleMinusPrice}
                                />
                            </Box>
                        ))}
                    </Box>
                )}
                <TicketFooter ticketTotalNumber={ticketTotalNumber} price={price} handleSend={handleSend} />
            </Box>
        </Box>
    );
}
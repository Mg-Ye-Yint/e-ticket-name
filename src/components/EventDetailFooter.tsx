import { Box, Typography, Button } from "@mui/material";
import { themeApp } from "../utils/Theme";
import { IEventDetail } from "../interfaces/Ievent";
import { useNavigate } from "react-router-dom";

interface IData {
    eventDetails?: IEventDetail;
    eventId: string;
}

export default function EventDetailFooter(props: IData) {
    const navigate = useNavigate();
    return (
        <Box sx={{
            display: "flex", justifyContent: "space-between", background: "#FFFFFF",
            bottom: "0px", height: "66px", borderRadius: "10px 10px 0 0", marginTop: "120px",
            alignContent: "center", alignItems: "center", width: "375px", position: "fixed",
            [themeApp.breakpoints.down("lg")]: {
                position: "fixed", width: "100%"
            }
        }}>
            {
                props.eventDetails !== undefined && (
                    <Box sx={{
                        display: "flex", justifyContent: "space-between",
                        padding: "10px", width: "100%", alignContent: "center", alignItems: "center"
                    }}>
                        <Box sx={{ flexDirection: "column" }}>
                            <Typography fontSize={"10px"} color="black">
                                ราคาเริ่มต้น
                            </Typography>
                            <Typography fontSize={"16px"} color="black" fontWeight={"bold"}>
                                {props.eventDetails.availableTickets.length > 0 ? props.eventDetails.availableTickets[0].currency + " " + props.eventDetails.availableTickets[0].price : "THB 0"}
                            </Typography>
                        </Box>
                        <Button sx={{
                            background: "#1B79FF", width: "192px",
                            borderRadius: "10px", color: "white", height: "44px",
                            "&:hover": {
                                color: "#1B79FF",
                                background: "white",
                                border: "1px solid #1B79FF"
                            },
                        }}
                            disabled={props.eventDetails.availableTickets.length < 1}
                            onClick={() => navigate(`/selectTicket/${props.eventId}`)}
                        >
                            ซื้อบัตร
                        </Button>
                    </Box>
                )
            }
        </Box >
    );
}
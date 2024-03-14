import { Box, Paper, Typography } from "@mui/material";
import { ITicket } from "../interfaces/Ievent";

export default function CheckOutCard() {
    const ticketSumAsString = localStorage.getItem("tickets");
    const ticketSumAsArray = JSON.parse(ticketSumAsString ?? "");
    return (
        <Paper sx={{ display: 'flex', width: "343px", height: "100px", padding: "10px", background: "#2C2C2C", borderRadius: "6px" }}>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex" }}>

                    <Box sx={{ alignItems: "center", alignContent: "center", alignSelf: "center", display: "flex" }}>
                        <img src={ticketSumAsArray.poster} alt="ff" style={{ width: "80px", height: "80px", borderRadius: "10px" }} />
                    </Box>
                    <Box sx={{ marginTop: "10px", marginLeft: "10px" }}>
                        <Typography fontSize={"14px"} color={"white"} fontWeight={"bold"}>
                            {ticketSumAsArray.title.length > 10 ? `${ticketSumAsArray.title.slice(0, 10)}...` : ticketSumAsArray.title}
                        </Typography>
                        {ticketSumAsArray.ticketSum.map((item: ITicket, index: number) => (
                            <Typography key={index} fontSize={"10px"} color={"#9C9C9C"} marginTop={"10px"}>
                                {item.name.length > 25 ? `${item.name.slice(0, 25)}...` : item.name} x{item.number}
                            </Typography>
                        ))}
                    </Box>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", alignContent: "center", alignSelf: "center", }}>
                    <Typography color={"white"}>
                        {ticketSumAsArray.price}. -
                    </Typography>
                </Box>
            </Box>
        </Paper >
    )
}

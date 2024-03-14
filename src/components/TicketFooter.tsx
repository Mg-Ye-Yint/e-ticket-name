import { Box, Typography, Button } from '@mui/material';
import { themeApp } from '../utils/Theme';

interface IData {
    ticketTotalNumber: number;
    price: number;
    handleSend: () => void;
}

export default function TicketFooter(props: IData) {

    return (
        <Box sx={{
            display: "flex", justifyContent: "space-between", background: "#FFFFFF",
            bottom: "0px", height: "66px", borderRadius: "10px 10px 0 0", marginTop: "120px",
            alignContent: "center", alignItems: "center", width: "375px", position: "fixed",
            [themeApp.breakpoints.down("lg")]: {
                position: "fixed", width: "100%"
            }
        }}>
            <Box sx={{
                display: "flex", justifyContent: "space-between",
                padding: "10px", width: "100%", alignContent: "center", alignItems: "center"
            }}>
                <Box sx={{ flexDirection: "column" }}>
                    <Typography fontSize={"10px"} color="black">
                        จำนวน {props.ticketTotalNumber} ใบ
                    </Typography>
                    <Typography fontSize={"16px"} color="black" fontWeight={"bold"}>
                        THB {props.price}
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
                    onClick={props.handleSend}
                >
                    ชำระเงิน
                </Button>
            </Box>
        </Box>
    );
}
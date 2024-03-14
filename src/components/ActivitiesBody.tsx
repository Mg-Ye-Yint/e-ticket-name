import { useState } from "react";
import { Box, Typography } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { useNavigate } from "react-router-dom";
import { themeApp } from "../utils/Theme";

const ActivitiesBody = () => {

  const [pastEvents, setPastEvents ] = useState(false);

  const navigate = useNavigate();
  const changeUpcomingEvents = () =>{
    setPastEvents(false);
  }

  const changePastEvents = () =>{
    setPastEvents(true);
  }
  

  return (
    <>
      <Typography
        sx={{ fontSize: "17px", fontWeight: "600px", height: "24px", overflow: "hidden" }}
      >
        ตั๋วของฉัน
      </Typography>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          position: "relative",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "space-evenly",
          width: "375px",
          paddingTop: "7px",
          borderBottom: "solid 2px #3F3F3F" ,
          [themeApp.breakpoints.down("lg")]: {
            width: "100%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "115.48px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "15px",
              width: "max-content",
              height: "21px",
              color: pastEvents === false ? "#FFFFFF" : "#A4A4A4",
              overflow: "hidden"
            }}
            onClick={changeUpcomingEvents}
          >
            กำลังมา
          </Typography>
          <Box
            sx={{
              position: "relative",
              bottom: "0px",
              borderBottom: pastEvents === false ? "solid 1px #FFFFFF" : "",
              height: "13px",
              width: "100%",
              transition: "transform 0.3s ease",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "108px",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "15px",
              color: pastEvents? "#FFFFFF" : "#A4A4A4",
              width: "max-content",
              height: "21px",
              overflow: "hidden"
            }}
            onClick={changePastEvents}
          >
            ผ่านมาแล้ว
          </Typography>
          <Box
            sx={{
              position: "relative",
              bottom: "0px",
              borderBottom: pastEvents? "solid 1px #FFFFFF" : "",
              height: "13px",
              width: "100%",
              transition: "transform 0.3s ease",
            }}
          />
        </Box>
      </Box>
      <Box >
    {pastEvents?   <><Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
        width: "343px",
        bgcolor: "#222222",
        marginTop: "21px",
        borderRadius:  "10px 10px 0px 0px",
        alignItems: "center",
        borderBottom: "solid 1px #3F3F3F",
        overflow: "hidden",
        [themeApp.breakpoints.down("lg")]: {
          width: "100%",
        },
      }}
      padding={"5px"}
      gridTemplateColumns={"repeat(2, minmax(0, 1fr))"}
      justifyItems={"center"}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
          gap: "8px",
          marginY: "5px",
          position: "relative"
        }}
      >
        <Box sx={{ width: "100px", height: "100px" }}>
          <img
            src="../public/img/Water Wall.jpeg"
            alt="Chiang-Mai-Water-Wall"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
              borderRadius: "10px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            height: "92px",
            width: "215px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: "14px",
                height: "20px",
                marginBottom: "10px",
                maxWidth: "134px",
                fontWeight: "500",
                position: "relative"
              }}
            >
              WATER WAR CHIANG MAI 2014
            </Typography>
            <Typography
              sx={{
                width: "60px",
                height: "18px",
                bgcolor: "#146444",
                fontSize: "10px",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1px 3px",
                margin: 0,
              }}
            >
              จำนวน (1/1)
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              fontSize: "12px",
              alignContent: "center",
              alignItems: "center",
              gap: "6px",
              marginRight: "10px",
              height: "14px",
            }}
          >
            <CalendarTodayOutlinedIcon
              sx={{ fontSize: "14px", color: "#9C9C9C" }}
            />
            <Typography sx={{ fontSize: "10px", color: "#9C9C9C" }}>
              {" "}
              13 APRIL
            </Typography>
          </Box>
          <Box
            sx={{
              marginRight: "10px",
              display: "flex",
              fontSize: "12px",
              alignContent: "center",
              alignItems: "center",
              gap: "6px",
              height: "14px",
              marginTop: "10px",
            }}
          >
            <AccessTimeOutlinedIcon
              sx={{ fontSize: "14px", color: "#9C9C9C" }}
            />
            <Typography sx={{ fontSize: "10px", color: "#9C9C9C" }}>
              18.30 - 20.00
            </Typography>
          </Box>
          <Box
            sx={{
              marginRight: "10px",
              marginTop: "10px",
              display: "flex",
              fontSize: "12px",
              alignContent: "center",
              alignItems: "center",
              gap: "6px",
              height: "14px",
            }}
          >
            <FmdGoodOutlinedIcon sx={{ fontSize: "14px", color: "#9C9C9C" }} />
            <Typography sx={{ fontSize: "10px", color: "#9C9C9C" }}>
              Central Chiangmai Airport
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box><Box
          sx={{
            display: "flex",
            bgcolor: "#222222",
            width: "343px",
            padding: "5px",
            paddingY: "10px",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            borderRadius: "0px 0px 10px 10px",
            [themeApp.breakpoints.down("lg")]: {
              width: "100%",
            },
          }}
          onClick={() => navigate("/review")}
        >
          <img
            src="../src/assets/bluestar.svg"
            style={{ height: "15.28px", width: "16px" }}
          ></img>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#1B79FF",
              height: "22px",
            }}
          >
            ให้คะแนน
          </Typography>
        </Box></>: <><Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
        flexDirection: "column",
        width: "343px",
        bgcolor: "#222222",
        marginTop: "21px",
        borderRadius: "10px 10px 10px 10px",
        alignItems: "center",
        justifyContent: "start",
        position: "relative",
        overflow: "hidden",
        [themeApp.breakpoints.down("lg")]: {
          width: "100%",
        },
      }}
      padding={"5px"}
      gridTemplateColumns={"repeat(2, minmax(0, 1fr))"}
      justifyItems={"center"}
      onClick={() => navigate("/slippage")}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
          gap: "8px",
          marginY: "5px",
          position: "relative"
        }}
      >
        <Box sx={{ width: "100px", height: "100px" }}>
          <img
            src="../public/img/Water Wall.jpeg"
            alt="Chiang-Mai-Water-Wall"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
              borderRadius: "10px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            height: "92px",
            width: "215px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: "14px",
                height: "20px",
                marginBottom: "10px",
                maxWidth: "134px",
                fontWeight: "500",
                position: "relative"
              }}
            >
              WATER WAR CHIANG MAI 2014
            </Typography>
            <Typography
              sx={{
                width: "60px",
                height: "18px",
                bgcolor: "#146444",
                fontSize: "10px",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1px 3px",
                margin: 0,
              }}
            >
              จำนวน (1/1)
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              fontSize: "12px",
              alignContent: "center",
              alignItems: "center",
              gap: "6px",
              marginRight: "10px",
              height: "14px",
            }}
          >
            <CalendarTodayOutlinedIcon
              sx={{ fontSize: "14px", color: "#9C9C9C" }}
            />
            <Typography sx={{ fontSize: "10px", color: "#9C9C9C" }}>
              {" "}
              13 APRIL
            </Typography>
          </Box>
          <Box
            sx={{
              marginRight: "10px",
              display: "flex",
              fontSize: "12px",
              alignContent: "center",
              alignItems: "center",
              gap: "6px",
              height: "14px",
              marginTop: "10px",
            }}
          >
            <AccessTimeOutlinedIcon
              sx={{ fontSize: "14px", color: "#9C9C9C" }}
            />
            <Typography sx={{ fontSize: "10px", color: "#9C9C9C" }}>
              18.30 - 20.00
            </Typography>
          </Box>
          <Box
            sx={{
              marginRight: "10px",
              marginTop: "10px",
              display: "flex",
              fontSize: "12px",
              alignContent: "center",
              alignItems: "center",
              gap: "6px",
              height: "14px",
            }}
          >
            <FmdGoodOutlinedIcon sx={{ fontSize: "14px", color: "#9C9C9C" }} />
            <Typography sx={{ fontSize: "10px", color: "#9C9C9C" }}>
              Central Chiangmai Airport
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box><Box sx={{height: "43px"}}></Box></>}
        </Box>
    </>
  );
};

export default ActivitiesBody;

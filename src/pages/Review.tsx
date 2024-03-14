import { Box, Button, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import "./Review.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { themeApp } from "../utils/Theme";

export const Review = () => {
	const navigate = useNavigate();
	const [value, setValue] = useState<number | null>(0);

	return (
		<Box sx={{
			display: "flex", width: "100%", background: "black", justifyContent: "center",
			[themeApp.breakpoints.down("lg")]: {
				width: "100%", height: "auto", marginBottom: "100px"
			}
		}}>
			<Box sx={{ height: "auto", width: "375px", flexDirection: "column" }}>
				<Box
					width={"100%"}
					alignItems="center"
					display={"flex"}
					flexDirection="column"
					paddingTop="10px"
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							width: "94%",
							marginBottom: "10px"
						}}
					>
						<Box>
						</Box>
						<Typography
							fontSize={"17px"}
							textAlign={"center"}
						>
							ให้คะแนน
						</Typography>
						<IconButton onClick={() => navigate("/")} size="large" sx={{ color: "white", width: "16px", height: "16px" }}>
							<CloseIcon />
						</IconButton>
					</Box>
					<Box
						bgcolor="#FFFFFF"
						height="206px"
						width="343px"
						borderRadius="10px"
						border="1px solid black"
					>
						<Box
							borderBottom="2px dashed 
          #C4C4C4"
							padding="20px"
							position="relative"
						>
							<div style={{ marginLeft: "-10px" }} className="dotcircle-left"></div>
							<div style={{ marginRight: "-10px" }} className="dotcircle-right"></div>
							<Box
								width="100%"
								display="flex"
								flexDirection="column"
								alignItems="start"
								gap="6px"
							>
								<Box display="flex" gap="8px" alignItems="center">
									<Box
										width="25px"
										height="25px"
										borderRadius="100%"
										bgcolor="grey"
										overflow="hidden"
									></Box>

									<Typography fontSize="12px" fontWeight="500" color="#222222">
										Bonnie
									</Typography>
								</Box>
								<Typography fontSize="14px" color="#222222">
									Water War Chiangmai 2014
								</Typography>
							</Box>
						</Box>
						<Box
							marginBottom="18px"
							padding="20px"
							color="#ACACAC"
							display="flex"
							flexDirection="column"
							alignItems="center"
							gap="14px"
							justifyContent="center"
						>
							<Typography>คลิกที่ดาวเพื่อให้คะแนน</Typography>
							<Box
								sx={{
									width: 200,
									display: 'flex',
									alignItems: 'center',
									justifyContent: "center"
								}}
							>
								<Rating
									name="hover-feedback"
									sx={{ fontSize: "27px" }}
									value={value}
									precision={1}
									onChange={(_event, newValue) => {
										setValue(newValue);
									}}
									emptyIcon={<StarIcon style={{ opacity: 0.55, fontSize: "27px" }} fontSize="inherit" />}
								/>
							</Box>
						</Box>
						<Button
							onClick={() => navigate("/")}
							sx={{
								borderRadius: "10px", background: "#1B79FF",
								width: "343px", height: "44px", color: "white",
								"&:hover": {
									color: "#1B79FF",
									background: "white",
									border: "1px solid #1B79FF"
								},
							}}>
							ส่งรีวิว
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

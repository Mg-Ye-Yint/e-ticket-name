import { Box, Divider, Typography, IconButton } from '@mui/material';
import SmallCard from '../components/SmallCard';
import EventCard from '../components/EventCard';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IApiEvent, IEvent } from '../interfaces/Ievent';
import { getEvent } from '../api/EventData';
import Loading from '../components/Loading';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { themeApp } from '../utils/Theme';
import Footer from '../components/Footer';

export default function Home() {
    const navigate = useNavigate();
    const [events, setEvent] = useState<IEvent[]>([]);
    const [loading, setLoading] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);
    const handleClickNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    };

    const handleClickPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const getEventData = await getEvent();
                const eventData = getEventData.map((item: { events: IApiEvent[]; }) => (
                    item.events.map((event: IApiEvent) => ({
                        id: event.id,
                        name: event.title,
                        date: event.time,
                        time: event.timeStart,
                        place: event.locationName,
                        cover: event.cover[0]
                    }))
                )).flat();

                setEvent(eventData);
            } catch (error) {
                console.error('Error fetching event data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <Box sx={{
            display: "flex", width: "100%", background: "black", justifyContent: "center",
            [themeApp.breakpoints.down("lg")]: {
                width: "100%", height: "auto"
            }
        }}>
            <Box sx={{ height: "auto", width: "375px", flexDirection: "column", }}>
                <Box sx={{ marginBottom: "100px" }}>
                    <Loading openLoading={loading} />
                    <Box>
                        <Typography fontSize={"16px"} fontWeight={"bold"} sx={{ paddingTop: "10px" }} textAlign={"center"}>
                            ยินดีต้อนรับ
                        </Typography>
                        <Typography fontSize={"10px"} textAlign={"center"}>
                            เริ่มค้นหาอีเว้นท์ที่คุณสนใจ!
                        </Typography>
                    </Box>
                    <Divider sx={{ border: "0.5px solid #5E5E5E", marginTop: "10px" }} />
                    <Box sx={{ marginTop: "0px", marginLeft: "5px" }}>
                        <Typography fontSize={"14px"} textAlign={"center"} sx={{ padding: "10px", fontWeight: "bold" }} color="white">
                            อีเว้นท์แนะนำ
                        </Typography>
                        <Box sx={{ overflow: "hidden", position: "relative" }}>
                            <Box sx={{
                                mt: -3, display: "flex", justifyContent: "space-between", gap: 1, marginTop: "25%", width: "100%", position: "absolute", zIndex: "100",
                                [themeApp.breakpoints.down("md")]: {
                                    display: "none"
                                }
                            }}>
                                <IconButton sx={{
                                    color: "white",
                                    opacity: currentIndex === 0 ? "30%" : "60%",
                                    "&:hover": {
                                        opacity: currentIndex === 0 ? "30%" : "100%",
                                    },
                                    background: "grey"
                                }}
                                    onClick={handleClickPrev}
                                    size='small'
                                    disabled={currentIndex === 0}
                                >
                                    <KeyboardArrowLeftOutlinedIcon />
                                </IconButton>
                                <IconButton sx={{
                                    color: "white",
                                    opacity: currentIndex === events.length - 1 ? "30%" : "60%",
                                    "&:hover": {
                                        opacity: currentIndex === events.length - 1 ? "30%" : "100%",
                                    },
                                    background: "grey"
                                }}
                                    onClick={handleClickNext}
                                    size='small'
                                    disabled={currentIndex === events.length - 1}
                                >
                                    <ChevronRightOutlinedIcon />
                                </IconButton>
                            </Box>
                            <Box
                                sx={{
                                    marginLeft: "10px",
                                    display: "flex",
                                    gap: "20px",
                                    width: "100%",
                                    overflowX: "auto",
                                    scrollBehavior: "smooth",
                                    "&::-webkit-scrollbar": {
                                        display: "none"
                                    }

                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        transition: "transform 0.5s",
                                        transform: `translateX(${-currentIndex * 9}%)`, width: `${events.length * 8.8}%`

                                    }}
                                >
                                    {events.map((event, index) => (
                                        <Box
                                            onClick={() => navigate(`/details/${event.id}`)}
                                            key={index}
                                            sx={{
                                                cursor: "pointer",
                                                marginRight: "20px"
                                            }}
                                        >
                                            <EventCard
                                                photo={event.cover}
                                                name={event.name}
                                                date={event.date}
                                                time={event.time}
                                                place={event.place}
                                            />
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                    <Box sx={{
                        marginLeft: "5px"
                    }}>
                        <Typography fontSize={"14px"} textAlign={"left"} sx={{ padding: "10px" }} color="white">
                            ดนตรี
                        </Typography>

                        <Box sx={{
                            marginLeft: "10px", display: "flex", gap: "20px", overflowX: "auto", scrollBehavior: "smooth",
                            "&::-webkit-scrollbar": {
                                display: "none"
                            }
                        }}>
                            <Box onClick={() => navigate("/details/18432")}>
                                <SmallCard photo="/img/URBOY TJ.jpg" date="27 Feb 2024" name="URBOY TJ" />
                            </Box>
                            <Box onClick={() => navigate("/details/18432")}>
                                <SmallCard photo="/img/JAY JETRIN.png" date="15 March 2024" name="JAY JETRIN" />
                            </Box>
                            <Box onClick={() => navigate("/details/18432")}>
                                <SmallCard photo="/img/OASIS.jpg" date="02 March 2024" name="OASIS" />
                            </Box>
                            <Box onClick={() => navigate("/details/18432")}>
                                <SmallCard photo="/img/pantip.jpeg" date="02 March 2024" name="Pantip" />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ marginTop: "30px", marginLeft: "5px" }}>
                        <Typography fontSize={"14px"} textAlign={"left"} sx={{ padding: "10px" }} color="white">
                            ธุรกิจ
                        </Typography>
                        <Box sx={{
                            marginLeft: "10px", display: "flex", gap: "20px", overflowX: "auto", scrollBehavior: "smooth",
                            "&::-webkit-scrollbar": {
                                display: "none"
                            }
                        }}>
                            <Box onClick={() => navigate("/details/18432")}>
                                <SmallCard photo="/img/e9a990108da811ee911101117567899b.png" date="10 Oct - 30 Sep 2024" name="SPACE K @ NEXT TECH" />
                            </Box>
                            <Box onClick={() => navigate("/details/18432")}>
                                <SmallCard photo="/img/EUROPEAN LANGUAGES.png" date="14 March 2024" name="EUROPEAN LANGUAGES" />
                            </Box>
                            <Box onClick={() => navigate("/details/18432")}>
                                <SmallCard photo="/img/53e28ef0c7ec11ee911101117567899b.png" date="06 April 2024" name="PINAGHUSAYAN" />
                            </Box>
                            <Box onClick={() => navigate("/details/18432")}>
                                <SmallCard photo="/img/pro-longlay_3.jpg" date="06 April 2024" name="Pro Longlay 3" />
                            </Box>
                        </Box>
                    </Box>
                </Box >
            </Box>
            <Footer />
        </Box>
    );
}

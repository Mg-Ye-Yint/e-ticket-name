import { Box } from "@mui/material";

import ActivitiesBody from "../components/ActivitiesBody";
import Footer from "../components/Footer";

export const MyActivities = () => {
  return (
    <Box
      sx={{
       paddingTop: "10px",
        display: "flex",
       flexDirection: "column",
       alignItems: "center",
      }}
    >
      {/*body */}
      <ActivitiesBody/>
      
      <Footer/>
    </Box>
  );
};

export default MyActivities;

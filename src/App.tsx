import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import SelectTicket from "./pages/SelectTicket";
import { Review } from "./pages/Review";
import { SlipPage } from "./pages/SlipPage";
import MyActivities from "./pages/MyActivities";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/details/:eventId"} element={<Details />} />
        <Route path={"/selectTicket/:eventId"} element={<SelectTicket />} />

        <Route path={"/checkOut"} element={<CheckOut />} />
        <Route path={"/slippage"} element={<SlipPage />} />
        <Route path={"/review"} element={<Review />} />
        <Route path={"/myticket"} element={<MyActivities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
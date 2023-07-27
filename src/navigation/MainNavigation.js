import { Route, Routes } from "react-router";
import Start from "../pages/Start/Start";
import MainPage from "../pages/MainPage/MainPage";

function MainNavigation() {
    return (
        <Routes>
            <Route path="/" element={<Start/>}></Route>
            <Route path="/cards" element={<MainPage/>}></Route>
        </Routes>
    )
};

export default MainNavigation;
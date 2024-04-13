import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Header/Navbar";
import Header from "../Shared/Header/Header";
const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Header></Header>

        </div>
    );
};

export default Root;
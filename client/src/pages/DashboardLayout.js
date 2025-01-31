import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

const DashboardLayout = () => {
    return (
        <div className="flex">
            <Navbar />

            <div className="ml-64 p-8 w-full">
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout;

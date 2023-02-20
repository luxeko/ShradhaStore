import React from 'react';
import {Outlet} from "react-router-dom";
import "./layout.scss"
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <div className={`app-container`}>
            <div className={`sidenav-container`}>
                <Sidebar/>
            </div>
            <div className={`main-container`}>
                <Navbar/>
                <Outlet/>
                {/*<Footer/>*/}
            </div>
        </div>
    );
};

export default Layout;
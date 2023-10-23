import React from "react";
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {

    return (
        <React.Fragment>
            <Navbar />
            <Outlet className="content-body" />
       
        </React.Fragment>
    )
}

export default Layout;
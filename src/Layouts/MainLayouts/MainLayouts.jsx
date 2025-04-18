import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';

const MainLayouts = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <h1>Footer</h1>
        </>
    );
};

export default MainLayouts;
import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const MainLayouts = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-[calc(100vh-116px)]'>
                <Outlet />
            </div>
            <Footer/>
        </>
    );
};

export default MainLayouts;
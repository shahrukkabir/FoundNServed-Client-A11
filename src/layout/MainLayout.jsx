import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/shared/NavBar';
import Footer from '../pages/shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
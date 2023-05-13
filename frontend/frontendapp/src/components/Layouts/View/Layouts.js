import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import BestSeller from '../Content/BestSeller';

function Layouts(props) {
    return (
        <>
        <Header />
        <BestSeller />
        <Outlet/>
        <Footer />
        </>
    );
}

export default Layouts;
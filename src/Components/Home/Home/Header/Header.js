import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Shared/Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <section className="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </section>

    );
};

export default Header;
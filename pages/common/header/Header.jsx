import React from 'react';
import Navbar from '../navbar/Navbar';
import './Header.css';
import logo from './MealPicker-logo.png';


function Header () {


    return (
        <><section>
            <img className="header-logo" src={logo} alt='logo'></img>
        </section><section className="header">
                <section className="header-top-navbar">
                    <Navbar />
                </section>
            </section></>
    )
}

export default Header;
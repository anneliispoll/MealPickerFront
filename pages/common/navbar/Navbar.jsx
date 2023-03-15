import React from 'react';
import './Navbar.css';
import { NavLink } from "react-router-dom";



function Navbar () {

const handleClick = () => {
    navigate('/login');
const navigate = useNavigate();
}

    return (
        <button onClick={handleClick}>
                Login
            </button>
    )
}

export default Navbar;
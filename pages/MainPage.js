import React from 'react';
import { useNavigate } from 'react-router';
import logo from './MealPicker-logo.png';
import './MainPage.css';



function MainPage() {
let navigate = useNavigate();

function handleClick() {
    navigate('/login');

}

    return (
        <><div>
            <img className="header-logo" src={logo} alt='logo'></img>
        </div><div>
                <button onClick={handleClick}>
                    Login
                </button>
            </div></> 
    )
    }


export default MainPage;
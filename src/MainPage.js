import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { useNavigate } from 'react-router';
import logo from './MealPicker-logo.png';
import './MainPage.css';
import NavBar from './Navbar';



function MainPage() {



    return (
        <><NavBar /><div className='container'>
            <img src={logo} alt='logo' />
        </div><body className='bodytext'>

                <div>Welcome to MealPicker</div>
                <div>Are you hungry? Want something to eat, but don’t know what?</div>
                <div> Are you tired of planning meals for the family?</div>
                <div>You love surprises?</div>
                <div>Here’s where MealPicker comes to help.</div>
                <div>Choose random meal from MealPicker according to the season and meal time.</div>
                <div>Add your own meals with recipes to your MealPicker account.</div>
            </body>
            </>
            
        )
    }


export default MainPage
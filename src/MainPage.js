import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { useNavigate } from 'react-router';
import logo from './MealPicker-logo.png';
import './MainPage.css';
import NavBar from './Navbar';



function MainPage() {
    


    return (
       <><NavBar /><header className='container'>
            <img src={logo} alt='logo' />
        </header><body className='bodytext'>

                    <p>Welcome to MealPicker</p>
                    <p>Are you hungry? Want something to eat, but don’t know what?</p>
                    <p> Are you tired of planning meals for the family?</p>
                    <p>You love surprises?</p>
                    <p>Here’s where MealPicker comes to help.</p>
                    <p>Choose random meal from MealPicker according to the season and meal time.</p>
                    <p>Add your own meals with recipes to your MealPicker account.</p>
                </body>
            </>
            
        )
    }


export default MainPage
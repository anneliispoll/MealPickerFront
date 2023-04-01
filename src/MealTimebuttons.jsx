import React, { useState } from "react";
import api from './api/axiosConfig';
import MealOutput from "./MealOutput";




export const MealTimebuttons = (props) => {
    const [mealTimeName, setMealTime] = useState('');
    const [seasonName, setSeason] = useState('');
    const [mealName, setMeal] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await api.get('http://localhost:8080/api/v1/auth/random', { params: { seasonName, mealTimeName } });
          const mealName = response.data;
          console.log("Meal name:", mealName);
          setMeal(mealName);
          props.mealName(mealName);
          
        } catch (error) {
          console.error(error);
          console.log(error.response);
          
        }
      };


            return (
                <form onSubmit={handleSubmit}>
                    <div className="radio-group">
                    <p className="buttonlist">
                    Choose meal time: 
                    </p>
                        <label>
                            <input
                            type="radio"
                            name="mealtime"
                            value="breakfast"
                            checked={mealTimeName === "breakfast"}
                            onChange={(event) => setMealTime(event.target.value)} 
                            />
                            Breakfast
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="mealtime"
                            value="lunch"
                            checked={mealTimeName === "lunch"}
                            onChange={(event) => setMealTime(event.target.value)} 
                            />
                            Lunch
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="mealtime"
                            value="dinner"
                            checked={mealTimeName === "dinner"}
                            onChange={(event) => setMealTime(event.target.value)} 
                            />
                            Dinner
                        </label>


                    <p className="buttonlist">Choose season:</p>
                    <label>
                            <input
                            type="radio"
                            name="season"
                            value="spring"
                            checked={seasonName === "spring"}
                            onChange={(event) => setSeason(event.target.value)} 
                            />
                            Spring
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="season"
                            value="summer"
                            checked={seasonName === "summer"}
                            onChange={(event) => setSeason(event.target.value)} 
                            />
                            Summer
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="season"
                            value="autumn"
                            checked={seasonName === "autumn"}
                            onChange={(event) => setSeason(event.target.value)} 
                            />
                            Autumn
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="season"
                            value="winter"
                            checked={seasonName === "winter"}
                            onChange={(event) => setSeason(event.target.value)} 
                            />
                            Winter
                        </label>
                    <button className="start" type="submit">
                        Start
                    </button>
                    </div>
                </form>
            );
        }
    

    export default MealTimebuttons;
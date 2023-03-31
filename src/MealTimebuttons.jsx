import React, { useState } from "react";

function MealTimebuttons() {
    const [mealTime, setMealTime] = useState('');
    const [season, setSeason] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('MealTime: ${mealtime}, Season: ${season}');
    }


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
                            checked={mealTime === "breakfast"}
                            onChange={(event) => setMealTime(event.target.value)} 
                            />
                            Breakfast
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="mealtime"
                            value="lunch"
                            checked={mealTime === "lunch"}
                            onChange={(event) => setMealTime(event.target.value)} 
                            />
                            Lunch
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="mealtime"
                            value="dinner"
                            checked={mealTime === "dinner"}
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
                            checked={season === "spring"}
                            onChange={(event) => setSeason(event.target.value)} 
                            />
                            Spring
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="season"
                            value="summer"
                            checked={season === "summer"}
                            onChange={(event) => setSeason(event.target.value)} 
                            />
                            Summer
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="season"
                            value="autumn"
                            checked={season === "autumn"}
                            onChange={(event) => setSeason(event.target.value)} 
                            />
                            Autumn
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="season"
                            value="winter"
                            checked={season === "winter"}
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
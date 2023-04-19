import React, { useState } from "react";
import api from './api/axiosConfig';



export const AddNewMeal = (props) => {
    const [mealTimeName, setMealTime] = useState([]);
    const [seasonName, setSeason] = useState([]);
    const [mealName, setMeal] = useState('');
    const [isAdded, setIsAdded] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');

        if (!mealName.trim()) {
            setErrorMessage("Meal name can't be empty!")
        } else if (!mealTimeName.length) {
            setErrorMessage("Please choose at least one meal time")
        } else if (!seasonName.length) {
            setErrorMessage("Please choose at least one season")
        } else {
        try {
        // Send the new meal data to the server
        const response = await api.post("http://localhost:8080/api/v1/auth/add", {
            name: mealName,
            seasonNames: seasonName,
            mealTimeNames: mealTimeName,
          });
          setMeal(response.data);
          console.log("Meal name:", response.data);
          console.log("Meal name:", mealName);
         setIsAdded(true); // update the isRegistered state variable to true
        } catch (error) {
        console.error(error);
        setErrorMessage("Oops! Something went wrong.")
        }
    }
      };


            return (
                <form onSubmit={handleSubmit}>
                    <div className="check-group">
                    <p className="checkbuttonlist">
                    Choose meal time: 
                    </p>
                        <label>
                            <input
                            type="checkbox"
                            name="mealtime"
                            value="breakfast"
                            checked={mealTimeName.includes("breakfast")}
                            onChange={(event) => {
                                if (event.target.checked) {
                                    setMealTime([...mealTimeName, event.target.value]);
                                } else {
                                    setMealTime(mealTimeName.filter((time) =>  time !== event.target.value));
                                    }
                                }}
                            />
                            Breakfast
                        </label>
                        <label>
                            <input
                            type="checkbox"
                            name="mealtime"
                            value="lunch"
                            checked={mealTimeName.includes("lunch")}
                            onChange={(event) => {
                                if (event.target.checked) {
                                    setMealTime([...mealTimeName, event.target.value]);
                                } else {
                                    setMealTime(mealTimeName.filter((time) =>  time !== event.target.value));
                                    }
                                }}
                            />
                            Lunch
                        </label>
                        <label>
                            <input
                            type="checkbox"
                            name="mealtime"
                            value="dinner"
                            checked={mealTimeName.includes("dinner")}
                            onChange={(event) => {
                                if (event.target.checked) {
                                    setMealTime([...mealTimeName, event.target.value]);
                                } else {
                                    setMealTime(mealTimeName.filter((time) =>  time !== event.target.value));
                                    }
                                }} 
                            />
                            Dinner
                        </label>


                    <p className="buttonlist">Choose season:</p>
                    <label>
                            <input
                            type="checkbox"
                            name="season"
                            value="spring"
                            checked={seasonName.includes("spring")}
                            onChange={(event) => {
                                if (event.target.checked) {
                                    setSeason([...seasonName, event.target.value]);
                                } else {
                                    setSeason(seasonName.filter((time) =>  time !== event.target.value));
                                    }
                                }}
                            />
                            Spring
                        </label>
                        <label>
                            <input
                            type="checkbox"
                            name="season"
                            value="summer"
                            checked={seasonName.includes("summer")}
                            onChange={(event) => {
                                if (event.target.checked) {
                                    setSeason([...seasonName, event.target.value]);
                                } else {
                                    setSeason(seasonName.filter((time) =>  time !== event.target.value));
                                    }
                                }}
                            />
                            Summer
                        </label>
                        <label>
                            <input
                            type="checkbox"
                            name="season"
                            value="autumn"
                            checked={seasonName.includes("autumn")}
                            onChange={(event) => {
                                if (event.target.checked) {
                                    setSeason([...seasonName, event.target.value]);
                                } else {
                                    setSeason(seasonName.filter((time) =>  time !== event.target.value));
                                    }
                                }}
                            />
                            Autumn
                        </label>
                        <label>
                            <input
                            type="checkbox"
                            name="season"
                            value="winter"
                            checked={seasonName.includes("winter")}
                            onChange={(event) => {
                                if (event.target.checked) {
                                    setSeason([...seasonName, event.target.value]);
                                } else {
                                    setSeason(seasonName.filter((time) =>  time !== event.target.value));
                                    }
                                }}
                            />
                            Winter
                        </label>
                        <div></div>
                        <input value={mealName} onChange={(e) => setMeal(e.target.value)}type="mealName" placeholder="Enter meal name" id="mealName" name="mealName"/>
                        {isAdded && <p className="success">New meal is successfully added</p>}
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <button className="start" type="submit">
                        Add
                    </button>
                    </div>
                </form>
            );
        }
    

    export default AddNewMeal;
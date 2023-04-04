import React, { useState } from "react";
import api from './api/axiosConfig';



export const AddNewMeal = (props) => {
    const [mealTimeName, setMealTime] = useState([]);
    const [seasonName, setSeason] = useState([]);
    const [mealName, setMeal] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          // Get the IDs of the selected meal times
          const mealTimeIds = await Promise.all(
            mealTimeName.map(async (name) => {
              const response = await api.get(
                `http://localhost:8080/api/v1/auth/meal-times?name=${name}`
              );
              return response.data.id;
            })
          );

            // Get the IDs of the selected seasons
    const seasonIds = await Promise.all(
        seasonName.map(async (name) => {
          const response = await api.get(
            `http://localhost:8080/api/v1/auth/seasons?name=${name}`
          );
          return response.data.id;
        })
      );
   

        // Send the new meal data to the server
        const response = await api.post("http://localhost:8080/api/v1/auth/add", {
            name: mealName,
            seasonIds: seasonIds,
            mealTimeIds: mealTimeIds,
          });
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
                    <button className="start" type="submit">
                        Add
                    </button>
                    </div>
                </form>
            );
        }
    

    export default AddNewMeal;
import React from "react";
import './MealOutput.css'

const MealOutput = ({ mealName }) => {
  return (
    <div>
      <h3 className="meal-output"> { mealName }</h3>
    </div>
  );
};

export default MealOutput;
import React from "react";
import "./App.css";

function ScoreButtons(props) {
   return (
     <div>
         <button className="homeButtons__touchdown" onClick={() => props.handleScore("home", 7)}>Home Touchdown</button>
         <button className="homeButtons__fieldGoal" onClick={() => props.handleScore("home", 3)}>Home Field Goal</button>
         <button className="awayButtons__touchdown" onClick={() => props.handleScore("away", 7)}>Away Touchdown</button>
         <button className="awayButtons__fieldGoal" onClick={() => props.handleScore("away", 3)}>Away Field Goal</button>
     </div>
   )
 }

 export default ScoreButtons;
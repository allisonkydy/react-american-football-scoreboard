import React from "react";
import "./App.css";

function TopRow(props) {
   return (
     <div className="topRow">
       <div className="home">
         <h2 className="home__name">Lions</h2>
         <div className="home__score">{props.homeScore}</div>
       </div>
       <div className="timer">00:03</div>
       <div className="away">
         <h2 className="away__name">Tigers</h2>
         <div className="away__score">{props.awayScore}</div>      
       </div>
     </div>
   )
 }

 export default TopRow;
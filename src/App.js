import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
   // set state
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [down, setDown] = useState(1);
  const [quarter, setQuarter] = useState(1);

  // handlers
  const handleScore = (team, points) => {
    if (team === "home") setHomeScore(homeScore + points);
    else if (team === "away") setAwayScore(awayScore + points);
  }

  const handleDownQuarter = (element, setter) => {
    if (element < 4) setter(element + 1);
    else if (element === 4) setter(1);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>      
          </div>
        </div>
        <BottomRow down={down} quarter={quarter}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button className="homeButtons__touchdown" onClick={() => handleScore("home", 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => handleScore("home", 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => handleScore("away", 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => handleScore("away", 3)}>Away Field Goal</button>
        </div>
        <div>
          <button className="bottomButtons" onClick={() => handleDownQuarter(down, setDown)}>Next Down</button>
          <button className="bottomButtons" onClick={() => handleDownQuarter(quarter, setQuarter)}>Next Quarter</button>
        </div>
      </section>
    </div>
  );
}

export default App;

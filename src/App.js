import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
   // set state
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(0);

  // handlers
  const handleScore = (team, points) => {
    if (team === "home") setHomeScore(homeScore + points);
    else if (team === "away") setAwayScore(awayScore + points);
  }

  const handleQuarter = () => {
    if (quarter < 4) setQuarter(quarter + 1);
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
        <BottomRow quarter={quarter}/>
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
          <button className="bottomButtons" onClick={() => handleQuarter()}>Next Quarter</button>
        </div>
      </section>
    </div>
  );
}

export default App;

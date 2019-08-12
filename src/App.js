import React, { useState } from "react";
import "./App.css";
import TopRow from "./TopRow";
import BottomRow from "./BottomRow";

function App() {
   // set state
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [down, setDown] = useState(1);
  const [quarter, setQuarter] = useState(1);
  const [ballOn, setBallOn] = useState(50);
  const [toGo, setToGo] = useState(10);

  // handlers
  const handleScore = (team, points) => {
    if (team === "home") setHomeScore(homeScore + points);
    else if (team === "away") setAwayScore(awayScore + points);
  }

  const handleDownQuarter = (element, setter) => {
    if (element < 4) setter(element + 1);
    else if (element === 4) setter(1);
  }

  const handleBallOn = () => {
    if (ballOn > 1) setBallOn(ballOn - 1);
    else if (ballOn === 1) setBallOn(50);
  }

  const handleToGo = () => {
    if (toGo > 1) setToGo(toGo - 1);
    else if (toGo === 1) setToGo(10);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore={homeScore} awayScore={awayScore}/>
        <BottomRow down={down} quarter={quarter} ballOn={ballOn} toGo={toGo}/>
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
          <button className="bottomButtons" onClick={() => handleBallOn()}>Move Ball</button>
          <button className="bottomButtons" onClick={() => handleToGo()}>Change To Go</button>
        </div>
      </section>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import TopRow from "./TopRow";
import BottomRow from "./BottomRow";
import ScoreButtons from "./ScoreButtons";
import BottomButtons from "./BottomButtons";

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
        <ScoreButtons handleScore={handleScore}/>
        <BottomButtons handleDownQuarter={handleDownQuarter} down={down} setDown={setDown} quarter={quarter} setQuarter={setQuarter} handleBallOn={handleBallOn} handleToGo={handleToGo}/>
      </section>
    </div>
  );
}

export default App;

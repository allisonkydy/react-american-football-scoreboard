import React from "react";
import "./App.css";

function BottomButtons(props) {
   return (
      <div>
         <button className="bottomButtons" onClick={() => props.handleDownQuarter(props.down, props.setDown)}>Next Down</button>
         <button className="bottomButtons" onClick={() => props.handleDownQuarter(props.quarter, props.setQuarter)}>Next Quarter</button>
         <button className="bottomButtons" onClick={() => props.handleBallOn()}>Move Ball</button>
         <button className="bottomButtons" onClick={() => props.handleToGo()}>Change To Go</button>
      </div>
   )
}

export default BottomButtons;
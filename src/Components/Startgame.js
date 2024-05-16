import React from "react";
function Startgame(props)
{
return(
    <div className="f1">
        <div className="f2"><img src="dice.jpeg" alt=""/></div>
        <div className="f3">
            <h1 className="f4">DICE GAME</h1>
            <button onClick={props.pass}>Start</button>
        </div>
    </div>
)
}
export default Startgame;
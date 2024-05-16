import Startgame from "./Components/Startgame";
import  "./App.css";
import { useState } from "react";
import Gameplay from "./Components/Gameplay";
function App() {
  const[gamestarted,setGamestarted]=useState(false);
  const toggleplaygame=()=>{
    setGamestarted((pre)=>!pre);
  }
  return (
   <div>
    {
    gamestarted?<Gameplay/>:<Startgame pass={toggleplaygame}/>
    }
   
    </div>
  );
}

export default App;

import Startgame from "./Components/Startgame";
import  "./App.css";
import { useState } from "react";
import Gameplay from "./Components/Gameplay";
function App() {
  const [count, setcount] = useState(0)
  const[gamestarted,setGamestarted]=useState(false);
  const toggleplaygame=()=>{
    setGamestarted((pre)=>!pre);
  }
  const Fun = () => {
    setcount(count+1)
  }
  return (
   <div>
    {
    gamestarted?<Gameplay/>:<Startgame pass={toggleplaygame}/>
    }
    <h1>{count}</h1>
   <button onClick={Fun}>Click</button>
    </div>
  );
}

export default App;

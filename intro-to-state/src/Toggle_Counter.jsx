//This is just an exercise to use multiple peices of state inside a single component
//The point is that u can use multiple state functions to generate multiple state variables and their setter functions
//in a single component and they're independent of each other 

import { useState } from "react";

export default function Toggle_Counter(){

    const [emoji , setEmoji] = useState(true);
    const [count, setCount] = useState(0);
    function changeEmoji(){
        emoji ? setEmoji(false):setEmoji(true);
    }
    return <div>
        {emoji ? <p>&#x1F604;</p> : <p>&#x1F61E;</p>}
        <button onClick={changeEmoji}>Toggle Emoji</button>
    </div>

}

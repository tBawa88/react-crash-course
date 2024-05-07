
import { useState } from "react";

export default function Toggler(){

    const [emoji , setEmoji] = useState(true);
    const changeEmoji = ()=>{emoji ? setEmoji(false):setEmoji(true);}
    return <div>
        {emoji ? <p>&#x1F604;</p> : <p>&#x1F61E;</p>}
        <button onClick={changeEmoji}>Toggle Emoji</button>
    </div>

}

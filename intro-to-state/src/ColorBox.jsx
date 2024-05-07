import { useState } from "react";
import './ColorBox.css'

const generateRandomColor = ()=>{
    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);
    return `rgb(${r}, ${g}, ${b})`;
}
const ColorBox = ()=>{
    const [color, setColor] = useState(generateRandomColor());
    const  handleClick = ()=> setColor(generateRandomColor());
    
    return <div className="ColorBox" onClick={handleClick} style={{
        backgroundColor : color
    }}>

    </div>
}

export default ColorBox;
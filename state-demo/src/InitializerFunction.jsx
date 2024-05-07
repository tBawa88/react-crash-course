
import { useState } from "react";

//returning an empty array of 4000 elements
function generateGameBoard(){
    console.log("Setting up the Game Board")
    return Array(4000);

}

export default function Dumbo(){
    //If we're using some kind of function to set the intial state, that function will run everytime the component
    //is re rendered by setState function, even though the value is ignored and the new value is set, but the
    //function is 
//  const [board, setBoard] =    useState(generateGameBoard());
 const [board, setBoard] =    useState(generateGameBoard);
//Quick fix for this is to simply pass the function refrence and not execute the function
//On future renders, useState will ignore this function and wont call it again 
    const changeBoard = ()=>{
            setBoard(0);
    }
    return <div>
        <button onClick={changeBoard}>Click me to change state</button>
    </div>
}
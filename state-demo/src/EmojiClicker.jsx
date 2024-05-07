//This is an exercise on how to store arrays in state and modify state
import { useState } from "react";
import { v4 as uuid } from "uuid";


//Math.random() is to generate a random value everytime and push it to the array
function EmojiClicker() {
    //the state variable will hold an array that stores objects {_id , val}
    const [emojis, setEmoji] = useState([{ _id: uuid(), val: Math.floor(Math.random() * 10) }]);

    //create a shallow copy, and pass this copy to change the state, since we're relying on the old state, 
    //we pass in a callback to the setState function
    function addEmoji() {
        setEmoji(oldEmoji =>
        //using spread operator to create a new copy and add a new value in the new array
        {
            const newObj = { _id: uuid(), val: Math.floor(Math.random() * 10) };
            return [...oldEmoji, newObj];
        }
        )

    }

    //passing a callback to the onClick eventhandler, so to delay the execution of this function 
    function deleteEmoji(id) {
        //using filter array method to create a shallow copy of the array excluding the element with this id
        //and passing it to the setEmoji to change the state of the component
        setEmoji(oldEmoji => oldEmoji.filter(e => e._id !== id))
    }
    function makeZeros() {
        setEmoji(oldEmoji => oldEmoji.map(e => ({ ...e, val: 0 })))
    }

    return (
        <div>
            {emojis.map(e => (<span
                key={e._id}
                onClick={() => { deleteEmoji(e._id) }}
                style={{ fontSize: "3rem", cursor: "pointer" }}>{e.val}</span>)
            )}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={makeZeros}>Make all Zeros</button>
        </div>
    )


}


export default EmojiClicker;
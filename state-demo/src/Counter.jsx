import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    const addOne = ()=>setCount(count + 1);
    const addThree = ()=> {
        //This is incorrect way of updating the state because the state varibale is not immidiately updated 
        //after setState is called, when the 2nd function is called, the value of count is still the old value
        //same with the 3rd call, they're all adding 1 to the old value of the count, and the final call re renders
        //the component with count + 1, and we dont get the desired effect of incrementing by 3
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        //For this we pass an updater function as a callback to setState function
        //If we use this 3 times, react will queue them up and run them one by one
        //Since updating of the state is an async operation, using callbacks like this ensures that each
        //subsequent call receives the updated value of state 
        setCount(c => c+1);
        setCount(c => c+1);
        setCount(c => c+1);
    };
    return <div>
        <p>The count is = {count}</p>
        <button onClick={addOne}>+1</button>
        <button onClick={addThree}>+3</button>
    </div>
}
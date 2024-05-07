import { useState, useEffect } from "react";
//Just a basic counter component to demostrate the use of useEffect

export default function Count() {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    useEffect(() => {
        console.log("Effect of changing count 2")
    }, [count2])


    return <>
        <h1>Count 1: {count}</h1>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <h1>Count 2: {count2}</h1>
        <button onClick={() => setCount2(count2 + 1)}>+1</button>
    </>
}
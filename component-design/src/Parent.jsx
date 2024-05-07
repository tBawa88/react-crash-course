import { useState } from "react"
import Child from "./Child"

//This is just a quick test to see how parent state can be influenced by the child 
export default function Parent() {
    const [state, setState] = useState(0);
    return <div>
        <h1>This is current state of parent : {state} </h1>
        <Child func={() => {
            setState(s => s + 1);
        }} />
    </div>

}
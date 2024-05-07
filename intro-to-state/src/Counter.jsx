import { useState } from "react";


 export default function Counter(){
    const[count, setCount] = useState(0);
    console.log("Value of count after render is ", count);

    const handleClick = ()=>{
        // console.log("Value of count before setState is called", count);
        setCount(count+1);
        // console.log("Value of count after setState is called", count);
    }
    return <div>
        <p>The count is : {count}</p>
        <button onClick={handleClick}>Click</button>
    </div>
}
//Whenever setCount is called with the updated value of the count (state variable), it forces REACT to
//re render the component with the updated value of the state variable


// export default function Counter(){
//     let num = 0;
//     function handleClick(){num++;}
//     return <div>
//         <p>The count is : {num}</p>
//     <button onClick={handleClick}>Click</button>
//     </div>
// }
//ALthough this updates the variable num, but it React is not re rendering the component with the new updated value

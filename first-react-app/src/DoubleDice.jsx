//Different ways to use conditionals inside react code , ternary operators are most commonly used
//using conditions to apply different styles
function DoubleDice({ numSide = 3 }) {
    const num1 = Math.floor(Math.random() * numSide + 1);
    const num2 = Math.floor(Math.random() * numSide + 1);
    const isWinner = num1 === num2;
    const myStyles = { color: num1 === num2 ? 'green' : 'red' };
    return <div style={myStyles}>
        {/* passing in a javascript object that has camelCased CSS properties */}
        {isWinner && <h1 style={myStyles}>You won the game !</h1>}
        <h2>Dice 1 = {num1}</h2>
        <h2>Dice 2 = {num2}</h2>
    </div>
}


// //using a conditional to render jsx element, else rendering null element
// function DoubleDice({ numSide = 3 }) {
//     const num1 = Math.floor(Math.random() * numSide + 1);
//     const num2 = Math.floor(Math.random() * numSide + 1);
//     return <div>
//         {num1 === num2 && <h1> You win </h1>} //this is another way we can render stuff, using the && operator
//         {num1 === num2 ? <h1>You win</h1> : null}
//         <h2>Dice 1 = {num1}</h2>
//         <h2>Dice 2 = {num2}</h2>
//     </div>
// }


//dynamically deciding what goes inside the h1, but this will add an empty h1 to the document
// function DoubleDice({ numSide }) {
//     const num1 = Math.floor(Math.random() * numSide + 1);
//     const num2 = Math.floor(Math.random() * numSide + 1);
//     return <div>
//         <h2>{num1 === num2 ? "You Win" : ""}</h2>
//         <h2>Dice 1 = {num1}</h2>
//         <h2>Dice 2 = {num2}</h2>
//     </div>
// }


//using a message that has dynamic value depending on a condition
// function DoubleDice({ numSide }) {
//     const num1 = Math.floor(Math.random() * numSide + 1);
//     const num2 = Math.floor(Math.random() * numSide + 1);
//     const messsage = num1 === num2 ? "You Win" : "You Lose";
//     return <div>
//         <h2>{messsage}</h2>
//         <h2>Dice 1 = {num1}</h2>
//         <h2>Dice 2 = {num2}</h2>
//     </div>
// }

//Using if else to return different jsx code each time, but this is too much code repition
// export default function DoubleDice({ numSide }) {
//     const num1 = Math.floor(Math.random() * numSide + 1);
//     const num2 = Math.floor(Math.random() * numSide + 1);
//     if (num1 === num2)
//         return <div>
//             <h1>You win !</h1>
//             <h2>Dice 1 = {num1}</h2>
//             <h2>Dice 2 = {num2}</h2>
//         </div>
//     else
//         return <div>
//             <h1>You Lose</h1>
//             <h2>Dice 1 = {num1}</h2>
//             <h2>Dice 2 = {num2}</h2>
//         </div>
// }


export default DoubleDice;  
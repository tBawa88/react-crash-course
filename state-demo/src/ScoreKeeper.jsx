import { useState } from "react";

const updateScore = (p1 = 0,p2 = 0) => {
    return {
        p1Score : p1,
        p2Score : p2
    }
}

function ScoreKeeper(){

    //To different ways of passing in a new object as the state everytime setScore is called
    const incrementP1 = ()=>{
        setScore(updateScore(score.p1Score + 1, score.p2Score));
    }
    const incrementP2 = ()=>{
        //using a callback , and spreadOperator to create a shallow copy and update the state variable
        setScore(oldScore => {
            return {...oldScore, p2Score : oldScore.p2Score+1}
        })
    }

//This does not work because we're passing the same object but with different values
//For state to change, a new entity has to be passed to setState() or React will not re render the component
    // const incrementP1 = ()=>{
    //     score.p1Score += 1;
    //     setScore(score);
    // }

    const [score, setScore] = useState({p1Score : 0, p2Score : 0});
    return (
        <div>
            <p>Player 1: {score.p1Score}</p>
            <p>Player 2: {score.p2Score}</p>
            <button onClick={incrementP1}>+1 Player 1</button>
            <button onClick={incrementP2}>+1 Player 2</button>
        </div>
    )
}


export default ScoreKeeper;

//Notes:
//we want to keep score for 2 players, one way of doing is this to use 2 peices of state for both players 
//This approach doesnt scale well as the number of players grow
//We can store an object in the state, this object will have 2 properties to keep track of both player scores
//Use a function to initialize the score object
//One thing that needs to be cared for is that score is representing an object now, so when we call setScore
//we must pass in the new object with updated values to tell React that the state has changed
//For this we can either return  a new object from an funciton 
//Or we can use {...obj} spread operator to create a copy of the object which is a new object in itself
import Dice from "./Dice";
import { useState } from "react";
import { getDices, checkSUM, getRandom } from "./utility";

//This component holds all the values of the dices in it's state
function LuckyN({ numDices, goal }) {
    const [diceState, setDice] = useState(getDices(numDices));
    const won = checkSUM(diceState) === goal;           //checks if the total sum is equal to goal
    const rollAgain = () => setDice(getDices(numDices)) //this changes state
    const changeState = (dId) => {                     //this changes state too
        setDice(oldState => (oldState.map(d => {
            if (d.id === dId)
                return { ...d, val: getRandom() }
            else return d;
        })))
    }
    return <main className="LuckyN">
        <h1>{won ? "You WIN !" : "You Lose!"}</h1>
        <Dice dices={diceState}
            changeState={changeState} />
        <button onClick={rollAgain}>Roll Again!</button>
        <p>Click on individual dice to change state of the parent component</p>
    </main>
}

export default LuckyN;
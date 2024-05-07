import Dice from "./Dice";
import { getDiceRolls, checkSum } from "./utility";
import { useState } from "react";
function LuckyN({ numsDice, goal }) {
    const [diceData, setDiceData] = useState(getDiceRolls(numsDice))
    const won = goal <= checkSum(diceData)
    const reRoll = () => setDiceData(getDiceRolls(numsDice));

    const rollDice = (id) => {
        setDiceData(oldDices => oldDices.map(d => {
            if (d.id === id)
                return { ...d, val: Math.floor(Math.random() * 6 + 1) }
            else
                return d;
        }))
    }
    return <div>
        <h1>Target Sum : {goal}</h1>
        <Dice dices={diceData} rollDice={rollDice} />
        <button onClick={reRoll}>Re Roll</button>
        {won ? <h2>You won!</h2> : <h2>You Lost</h2>}
    </div>

}

export default LuckyN;

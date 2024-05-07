import Die from "./Die";


function Dice({ dices, rollDice }) {

    return <div>
        {dices.map(d => {
            return <Die key={d.id} val={d.val} id={d.id} rollDice={rollDice} />
        })}
    </div>

}

export default Dice;
//This component renders a set of dice
import Die from "./Die";
import './Dice.css';
function Dice({ dices, changeState }) {
    return <section className="LuckyN-dice">
        {/* Mapping over the array and returning a die component with the value,
            The second argument i, in map() is referring to the index of each element in the array
        */}
        {dices.map((d) => (
            <Die key={d.id}
                val={d.val}
                id={d.id}
                changeState={changeState} />
        ))}
    </section>
}

export default Dice;
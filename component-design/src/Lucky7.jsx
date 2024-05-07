import './Lucky7.css';
import { useState } from 'react';
import { getRolls, sum } from './utility';



function Lucky7() {
    const [dice, setDice] = useState(getRolls(2));
    const rollDice = () => { setDice(getRolls(2)); }
    const won = sum(dice) === 7;
    return <main className='Lucky7'>
        <h1>Luck7 {won ? "You won!" : "You lose!"}</h1>
        <section className='Lucky7-dice'>
            <div className='Lucky7-die'>{dice[0]}</div>
            <div className='Lucky7-die'>{dice[1]}</div>
        </section>
        <button onClick={rollDice}>
            Roll Again X
        </button>
    </main>

}

export default Lucky7;
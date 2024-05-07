import { useState } from "react"


function Player({ id }) {
    const [score, setScore] = useState(0);
    const incrementScore = () => {
        setScore(s => s + 1);
    }
    return (
        <li>Player {id} : <span>{score}</span>
            <button onClick={incrementScore}>+1</button>
        </li>
    )
}

export default Player;
import { useState } from "react";
// import Player from "./Player";

const initializePlayers = num => {
    let arr = [];
    for (let i = 1; i <= num; i++)
        arr.push({ id: i, score: 0 });
    return arr;
}

function TotalPlayers({ num }) {

    const [playerData, setPlayerData] = useState(initializePlayers(num));

    function incrementScore(id) {
        setPlayerData(oldPlayerData => oldPlayerData.map(player => {
            if (player.id === id) //updating specific elements in array
                return { ...player, score: player.score + 1 }
            else return player;
        })
        )
    }
    function resetScore() {
        setPlayerData(oldPlayerData => oldPlayerData.map(
            player => ({ ...player, score: 0 }) //updating all elements in array
        ));
    }
    let playerElementArray = [];

    //iterating over state variable and building the array with <li> elements 
    for (let p of playerData) {
        let newLi = <li key={p.id}>Player {p.id} : <span>{p.score}</span>
            {p.score === 10 ? <span>  Winner!</span> : <button onClick={() => incrementScore(p.id)}>+1</button>}
        </li>

        playerElementArray.push(newLi)
    }

    return (
        <div>
            <ul>
                {playerElementArray}
            </ul>
            <button onClick={resetScore}>RESET</button>
        </div>

    )
}

export default TotalPlayers;
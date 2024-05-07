import './Die.css'


function Die({ val, rollDice, id }) {

    return <div
        className='Die'
        onClick={() => rollDice(id)}
        style={{ cursor: 'pointer' }}
    > {val}</div >
}

export default Die;
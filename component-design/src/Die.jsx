
import './Die.css'

function Die({ val, id, changeState }) {
    return <div className="LuckyN-die"
        onClick={() => {
            changeState(id);
        }}
    >{val}</div>
}

export default Die;
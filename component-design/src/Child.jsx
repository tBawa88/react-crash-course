

export default function Child({ func }) {

    return <div>
        <p>This is child component </p>
        <p>Press button to change parent state</p>
        <button onClick={() => { func(); }}>Click + 1</button>
    </div>

}
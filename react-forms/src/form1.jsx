import { useState } from "react"

function MyForm() {
    const [inputValue, setValue] = useState('intial value');

    function updateValue(event) {
        setValue(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log("Current state is ", inputValue);
    }

    return <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Enter usename:</label>
        <input type="text"
            value={inputValue}
            onChange={updateValue}
            id="username" />
        <button >Sumbit</button>
    </form>
}

export default MyForm;
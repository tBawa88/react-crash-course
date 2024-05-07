import { useState } from "react"
export default function UserForm({ updateUser }) {
    const [term, setTerm] = useState('');
    const changeState = (e) => {
        setTerm(e.target.value); //make the input a controlled element
    }

    return <form onSubmit={(e) => {
        e.preventDefault();
        updateUser(term)
        setTerm('');
    }}>
        <input type="text"
            onChange={changeState}
            value={term}
        />
        <button>Search</button>
    </form>
}
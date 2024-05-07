import { useState } from "react";
import { v4 as uuid } from 'uuid';

function ShoppingForm({ addItem }) {
    const [input, setInput] = useState({
        name: '',
        price: 0,
        qty: 0
    })

    const handleSubmission = (e) => {
        e.preventDefault();
        addItem(input);
    }
    const updateInputState = (e) => {
        const inputName = e.target.name;
        const val = e.target.value;
        setInput(oldInput => ({ ...oldInput, [inputName]: val }))
    }
    return <form action="" onSubmit={handleSubmission}>
        <div>
            <label htmlFor="name">Enter Name of Item:</label>
            <input
                type="text"
                value={input.name}
                name="name"
                onChange={updateInputState}
            />
        </div>
        <div>
            <label htmlFor="price">Enter Name of Item:</label>
            <input
                type="number"
                value={input.price}
                name="price"
                onChange={updateInputState}
            />
        </div>
        <div>
            <label htmlFor="qty">Enter Name of Item:</label>
            <input
                type="number"
                value={input.qty}
                name="qty"
                onChange={updateInputState}
            />
        </div>
        <button>Add item</button>
    </form>

}

export default ShoppingForm;
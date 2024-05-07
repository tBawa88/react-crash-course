import { useState } from "react";
import { v4 as uuid } from 'uuid';
import { checkName, checkPrice, checkQty } from './utility';
function ValidatedShoppingForm({ addItem }) {
    const [input, setInput] = useState({
        name: '',
        price: 0,
        qty: 0
    })
    const [validation, setValidation] = useState('');

    const handleSubmission = (e) => {
        e.preventDefault();
        if (!checkName(input.name) || !checkPrice(input.price) || !checkQty(input.qty))
            setValidation("Invalid item data");
        else {
            addItem(input);
            setValidation('');
        }
    }
    const updateInputState = (e) => {
        const inputName = e.target.name;
        const val = e.target.value;
        setInput(oldInput => ({ ...oldInput, [inputName]: val }))
    }
    return <>
        <p>{validation}</p>
        <form action="" onSubmit={handleSubmission}>
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
    </>


}

export default ValidatedShoppingForm;
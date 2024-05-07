// import ShoppingForm from "./ShoppingForm";
// import ValidatedShoppingForm from "./ValidatedShoppingForm";
import ReactHookForm from "./React-hook-form";
import { useState } from "react";
import { v4 as uuid } from "uuid";
const starterList = [
    { id: uuid(), name: "Milk", price: 50, qty: 2 },
    { id: uuid(), name: "Veggies", price: 50, qty: 2 },
    { id: uuid(), name: "Nutrella", price: 50, qty: 2 },
    { id: uuid(), name: "Chocolate", price: 50, qty: 2 },
];
function ShoppingList() {
    const [list, setList] = useState(starterList);
    const deleteListItem = (id) => {
        setList(oldList => (oldList.filter(item => item.id !== id)))
    }

    return <div>
        <ul>
            {list.map(item => {
                return <li key={item.id}
                    onClick={() => { deleteListItem(item.id) }}
                >
                    {item.name}, Price : {item.price}, Qty : {item.qty}
                </li>
            })}
        </ul>
        < ReactHookForm addItem={(item) => {
            //added the id to newItem and inserted it into the state array
            const newItem = { ...item, id: uuid() };
            setList(oldList => ([...oldList, newItem]));
        }}
        />
    </div>
}

export default ShoppingList;


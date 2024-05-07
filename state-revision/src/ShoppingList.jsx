import { generateList } from "./utility";
import { useState } from "react";
import Form from "./ShoppingForm";
import ItemsList from "./ItemsList";

export default function ShoppingList() {
    const [list, setList] = useState(generateList());
    const updateList = (newItem) => setList([...list, newItem]);
    const deleteItem = (id) => setList(oldList => oldList.filter(l => l.id !== id))

    return <div>
        <ItemsList list={list} deleteItem={deleteItem} />
        <Form updateList={updateList} />
    </div>
} 
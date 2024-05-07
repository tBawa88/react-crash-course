

export default function ItemsList({ list, deleteItem }) {
    return <ul>
        {list.map(l =>
            <li key={l.id} onClick={() => { deleteItem(l.id) }}>
                {l.name} price: {l.price} qty : {l.quantity}
            </li>)}
    </ul>
}
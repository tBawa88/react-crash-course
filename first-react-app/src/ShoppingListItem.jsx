

export default function ShoppingListItem({ name, qty, completed }) {
    const mStyle = {
        color: completed ? "grey" : "red",
        textDecoration: completed ? "line-through" : "none"
    }
    return <>
        <li style={mStyle}>
            {name} - {qty}
        </li >
    </>
}
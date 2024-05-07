import ShoppingListItem from './ShoppingListItem';

export default function ShoppingList({ items }) {
    return <>
        {items.map(item => <ShoppingListItem key={item.id} {...item} />)}
        {/* using spread operator to pass each porperty of the item object individually */}
    </>
}
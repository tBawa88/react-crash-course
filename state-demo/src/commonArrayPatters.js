//These are some common array patterns that are used in world of React to update state variables that store
//arrays of objects in em


const shoppingList = [
    { id: 1, itemName: "Apple", price: 1.99 },
    { id: 2, itemName: "Banana", price: 0.99 },
    { id: 3, itemName: "Milk", price: 2.49 },
    { id: 4, itemName: "Bread", price: 1.79 },
    { id: 5, itemName: "Eggs", price: 2.29 }
  ];

//Adding new element to Array
    [...shoppingList, {  id: 5, itemName: "Eggs", price: 2.29 }]

//Deleting an element from Array
shoppingList.filter(item => item.id !== id)

//Updating all elements in Array
//Like updating the price of all items in the array
shoppingList.map((item) =>{
    return {
        ...item, //spread the obj , and modify a single property using the value of old property
        price : item.price + 1
    }
})


//Updating a particular element 
shoppingList.map(item =>{
    if(item.id === id)
        return {...item, price : 0}
    else 
        return item;
})
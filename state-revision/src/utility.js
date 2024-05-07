import { v4 as uuid } from 'uuid';


const getDiceRolls = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++)
        arr.push({ id: uuid(), val: Math.floor(Math.random() * 6 + 1) });
    return arr;
}

const checkSum = (arr) => arr.reduce((acc, curr) => acc + curr.val, 0)

const generateList = () => {
    return [
        { id: uuid(), name: "Milk", price: 12, quantity: 2 },
        { id: uuid(), name: "Chocolate", price: 12, quantity: 2 },
        { id: uuid(), name: "Coffee", price: 12, quantity: 2 },
    ]
}

export { getDiceRolls, checkSum, generateList };
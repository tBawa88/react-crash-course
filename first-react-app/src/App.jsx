import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chicken from './chicken'
import Greeter from './Greeter'
import Die from './Die'
import DoubleDice from './DoubleDice';
import ColorList from './ColorList'
import ShoppingList from './ShoppingList'
import Clicker from './Clicker'

const colors = ["red", "blue", "magenta", "green"];
const shoppingList = [
  { id: 1, name: "eggs", qty: 12, completed: false },
  { id: 2, name: "milk", qty: 2, completed: true },
  { id: 3, name: "whey protien", qty: 12, completed: false },
  { id: 4, name: "SSD", qty: 12, completed: true },
  { id: 5, name: "GPU", qty: 12, completed: false },
]

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ShoppingList items={shoppingList} /> */}
      <Clicker/>
      {/* <Greeter name="Henry" />
      <DoubleDice />
      <ColorList colors={colors} /> */}

    </>
  )
}




import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LuckyN from './LuckyN'
import ShoppingList from './ShoppingList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShoppingList />
      <LuckyN numsDice={3} goal={10} />
    </>
  )
}

export default App

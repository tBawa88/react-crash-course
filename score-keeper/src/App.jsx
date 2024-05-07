import { useState } from 'react'
import './App.css'
import TotalPlayers from './TotalPlayers'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <TotalPlayers num={4} />
      </div>
    </>
  )
}

export default App

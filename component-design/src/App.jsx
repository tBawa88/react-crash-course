import { useState } from 'react'
import './App.css'
import Lucky7 from './Lucky7';
import LuckyN from './LuckyN';
import Parent from './Parent';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Lucky7 /> */}
      <LuckyN numDices={2} goal={5} />
      {/* <Parent /> */}
    </>
  )
}

export default App

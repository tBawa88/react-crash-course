import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Dumbo from './InitializerFunction'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'

function App() {

  return (
    <>
      <h1>State Demo!</h1>
      {/* <Counter/>
      <Dumbo/>       */}

      <ScoreKeeper/>
      <EmojiClicker/>
    </>
  )
}

export default App

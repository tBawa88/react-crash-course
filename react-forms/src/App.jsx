import { useState } from 'react'
import './App.css'
// import MyForm from './form1'
// import SignUpForm from './SignUpForm'
// import BetterSignUpForm from './BetterSignUp'
import ShoppingList from './ShoppingList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Click the item to delete the item </h2>
      <ShoppingList />
      {/* <MyForm /> */}
      {/* <SignUpForm /> */}
      {/* <BetterSignUpForm /> */}
    </>
  )
}

export default App

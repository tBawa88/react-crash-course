import { Button } from '@mui/material'
import './App.css'
// import Button from '@mui/material/Button'
import ButtonUsage from './ButtonUsage'
import RatingComponent from './RatingComponent'
import SearchAppBar from './AppBarComponent'
import FormComponents from './FormComponent'

function App() {

  return (
    <>
      <div>
        <SearchAppBar />
        <ButtonUsage sx={{ margin: 5 }} />
        <RatingComponent />
        <FormComponents />
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Components/LoginPage.css'
import Login from './Components/LoginPage'
import Signup from './Components/SignupPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Signup/>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import './Components/LoginPage.css'
import CarDetailCard from './Components/CarDetailCard'
import NavBar from './Components/NavBar';
import RentPage from './pages/RentPage';
import { Link } from 'react-router-dom';
import Signup from './Components/SignupPage'
import Login from './Components/LoginPage'
import Homepage from './Components/Homepage';
function App() {

  // const apiUrl = process.env.REACT_APP_BACK_END;
  useEffect(()=>{
    // console.log(apiUrl)
    console.log(document.cookie)
  },[])

  // const dummyDa
  return (

   
  <div className='flex  items-center flex-col w-[100%] h-[100%]'>
   
    <NavBar/>
    <Homepage/>
  </div>
  )
}

export default App

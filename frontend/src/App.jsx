import { useEffect, useState } from 'react'
import './Components/LoginPage.css'
import CarDetailCard from './Components/CarDetailCard'
import NavBar from './Components/NavBar';
import RentPage from './pages/RentPage';
import { Link } from 'react-router-dom';
import Signup from './Components/SignupPage'
import Login from './Components/LoginPage'
import Homepage from './Components/Homepage';
import AdminLogin from './Components/AdminLogin';
import axios from 'axios';

function App() {

  // const apiUrl = process.env.REACT_APP_BACK_END;
  useEffect(()=>{
    // console.log(apiUrl)
    console.log(document.cookie)
  },[])
  
  const [location,SetLocation] = useState("")

  const [isFilter,setIsFilter] = useState(false)
  // const dummyDa
  return (

   
  <div className='flex  items-center flex-col w-[100%] h-[100%]'>
    <NavBar SetLocation={SetLocation} setIsFilter={setIsFilter} isFilter={isFilter}/>
    <Homepage location={location} isFilter={isFilter}/>
  </div>
  )
}

export default App

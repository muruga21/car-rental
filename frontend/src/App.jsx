import { useState } from 'react'
import './Components/LoginPage.css'
import CarDetailCard from './Components/CarDetailCard'
import NavBar from './Components/NavBar';
import RentPage from './pages/RentPage';
import { Link } from 'react-router-dom';
import Signup from './Components/SignupPage'
import Login from './Components/LoginPage'

function App() {
  const carImg = "https://img.freepik.com/premium-photo/car-isolated-white-background-lamborghini-aventador-supercar-white-car-blank-clea-white-black_655090-607616.jpg?w=740";

  const dummyData=[
    {
      name:"lamborgini",
      image:carImg,
      price:"$999958",
      location:"Coimbatore"
    },
    {
      name:"lamborgini",
      image:carImg,
      price:"$999958",
      location:"Coimbatore"
    },
    {
      name:"lamborgini",
      image:carImg,
      price:"$999958",
      location:"Coimbatore"
    },
    {
      name:"lamborgini",
      image:carImg,
      price:"$999958",
      location:"Coimbatore"
    },
    {
      name:"lamborgini",
      image:carImg,
      price:"$999958",
      location:"Coimbatore"
    },
    {
      name:"lamborgini",
      image:carImg,
      price:"$999958",
      location:"Coimbatore"
    },
    {
      name:"lamborgini",
      image:carImg,
      price:"$999958",
      location:"Coimbatore"
    },
    {
      name:"lamborgini",
      image:carImg,
      price:"$999958",
      location:"Coimbatore"
    },
    {
      name:"lamborgini",
      image:carImg,
      price:"$999958",
      location:"Coimbatore"
    },
    {
      name:"lamborgini",
      image:carImg,
      price:"$999958",
      location:"Coimbatore"
    },
    {
      name:"lamborgini",
      image:carImg,
      price:"$999958",
      location:"Coimbatore"
    }
]
  return (
    <>
      <Signup/>
    </>
  )
}

export default App

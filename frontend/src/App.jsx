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
    <div className='flex  items-center flex-col w-[100%] h-[100%]'>
    <NavBar/>
    <div className='bg-[#ffffff] flex  flex-wrap h-[100%] w-[80%] border-2 shadow-xl mt-5 mb-10 p-2'>
      {dummyData.map((val,index)=>{
        return  <Link to='/Rent'> <div className='flex mt-10'>
        <div className='w-10 '></div>
        <CarDetailCard key={index} name={val.name}  image={val.image} price={val.price} location={val.location}/>
        </div> 
        
        </Link>
       
      })
      }
    </div>
  </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import CarDetailCard from './Components/CarDetailCard'
import NavBar from './Components/NavBar';
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
  <div className='flex  items-center flex-col'>
    <NavBar/>
    <div className='bg-[#ffffff] flex  flex-wrap h-[100%] w-[80%] border-2 shadow-xl mt-5 mb-10 p-2'>
      {dummyData.map((val,index)=>{
        return <div className='flex mt-10'>
          <div className='w-10 '></div>
          <CarDetailCard key={index} name={val.name}  image={val.image} price={val.price} location={val.location}/>
          
          </div> 
      })}
    </div>
  </div>
  
  )
}

export default App

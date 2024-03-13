import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import CarDetailCard from './CarDetailCard'
import axios from 'axios';

const Homepage = () => {

    const carImg = "https://img.freepik.com/premium-photo/car-isolated-white-background-lamborghini-aventador-supercar-white-car-blank-clea-white-black_655090-607616.jpg?w=740";

    const [dummyData, setDummyData] = useState([])

    const fetchAvaliableCars = async() =>{
        const response = await axios.get('http://localhost:5000/users/display')
        setDummyData(response.data.message)
        console.log(dummyData)
    }

    useEffect(()=>{
        fetchAvaliableCars();
    },[])

  return (
    <div className='bg-[#ffffff] flex  flex-wrap h-[100%] w-[80%] border-2 shadow-xl mt-5 mb-10 p-2'>
      {dummyData.map((val,index)=>{
        return  (<Link to={`/${val._id}`} key={index}> <div className='flex mt-10'>
        <div className='w-10 '></div>

        <CarDetailCard 
            key={index} 
            name={val.name}  
            image={val.image} 
            price={val.price} 
            location={val.location}
            carid = {val._id}
        />

        </div> 
        </Link>)
       
      })
      }
    </div>
  )
}

export default Homepage
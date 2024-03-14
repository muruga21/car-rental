import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import CarDetailCard from './CarDetailCard'
import axios from 'axios';

const Homepage = (props) => {

  const [dummyData, setDummyData] = useState([])

  const fetchAvaliableCars = async() =>{
    const response = await axios.get('http://localhost:5000/users/display',{headers: {
      'Authorization': `Bearer ${document.cookie}`,
      'Content-Type': 'application/json'
  }})
     setDummyData(response.data.message)

}

const filter =async ()=>{

  try {
    // const response = await axios(
    //   {method:'post',url:"http://localhost:5000/users/filter",headers:{},data:{location:props.location}}
    // );
    const response = await axios.post("http://localhost:5000/users/filter",
    {location:props.location},{headers: {
      'Authorization': `Bearer ${document.cookie}`,
      'Content-Type': 'application/json'
  }})
    setDummyData(response.data.response)
  } catch (error) {
    console.error('Error:', error.message);
  }
}

useEffect(()=>{
  

  if(!props.isFilter)
    {
      fetchAvaliableCars();
    }
  else{
      filter();
      }
},[props.isFilter])



    const carImg = "https://img.freepik.com/premium-photo/car-isolated-white-background-lamborghini-aventador-supercar-white-car-blank-clea-white-black_655090-607616.jpg?w=740";

  return (
    <div className='bg-[#ffffff] flex  flex-wrap h-[100%] w-[80%] border-2 shadow-xl mt-5 mb-10 p-2'>
    {dummyData.map((val,index)=>{
        return  (<Link to={`/${val._id}`} key={index}> <div className='flex mt-10'>
        <div className='w-10 '></div>
        <CarDetailCard 
            key={index} 
            name={val.carName}  
            image={val.carPicture} 
            price={val.carPrice} 
            location={val.location}
        />

        </div> 
        </Link>)
       
      })
      }
    </div>
  )
}

export default Homepage
import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function RentPage(props) {

  const params = useParams();

  const [carData, setCarData] = useState({});
  
    const carImg = "https://img.freepik.com/premium-photo/car-isolated-white-background-lamborghini-aventador-supercar-white-car-blank-clea-white-black_655090-607616.jpg?w=740";

    const fetchCarData = async(params)=>{
      console.log(`http://localhost:5000/users/${params.carid}`)
      const response = await axios.get(`http://localhost:5000/users/${params.carid}`)
      setCarData(response.data.message)
    }
    
    useEffect(()=>{
      fetchCarData(params);
    },[])

  return (  
<div>
<div className='w-[100%] h-16 flex justify-around align-middle bg-[#f2f5f5] items-center'>
      <h1 className='font-mono font-extrabold text-3xl'>Car Detail</h1>
    </div>
  
    <div className='flex justify-center items-center  w-[100%] h-[100%] p-10 shadow-xl border-10 mt-5 '>
      <div className='float-left mr-10 w-[60%] flex flex-col items-start justify-center '>
        <h1 className='text-5xl'>{carData?.carName}</h1>
        <h3 className='text-xl mt-5 mb-10 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat excepturi illum fugit, culpa illo reiciendis, perferendis qui explicabo laudantium officiis repellendus repellat natus iusto sapiente cupiditate quos maxime et laboriosam.</h3>

        <button className='border-2  w-[25%] h-[6%] bg-[#055c53]  rounded-md self-center text-white'>{ (carData.isAvailable)? 'Rent':'Not Available' }</button>
      </div>
      <div className='float-right w-[40%]'>
       <img src={carData?.carPicture} alt="" className='shadow-xl'/>
<div className='flex justify-around text-xl text-gray-500 font-semibold mt-4' >
       <h2 >Rent Price :${carData?.carPrice}</h2>
       <h2>Location: {carData?.location}</h2>
</div>

      </div>
      </div>
    </div>
  )
}

export default RentPage

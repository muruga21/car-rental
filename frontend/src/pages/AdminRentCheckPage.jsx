import React, { useEffect, useState } from 'react'
import RentedCarCard from '../Components/RentedCarCard'
import NavBar from '../Components/NavBar'
import axios from 'axios';

function AdminRentCheckPage() {
    const carImg = "https://img.freepik.com/premium-photo/car-isolated-white-background-lamborghini-aventador-supercar-white-car-blank-clea-white-black_655090-607616.jpg?w=740";

    const[dummyData,setDummyData]=useState([])

    const[change,setChange] = useState(false)

    const fetchAvailableCars =async ()=>{
        const response = await axios.get('http://localhost:5000/admin/viewRentedCars');
        setDummyData(response.data.message)

    }

    useEffect(()=>{
   
        fetchAvailableCars();
    },[change])
   
  return (
    <div className='h-[100%] w-[100%]  flex flex-col items-center'>
      {        console.log(dummyData)
}
    <div className='w-[100%] h-16 flex justify-around align-middle bg-[#f2f5f5] items-center'>
      <h1 className='font-mono font-extrabold text-3xl'>Available Cars</h1>
    </div>
        <div className='w-[80%] h-[100%] flex justify-center items-center flex-col border-2 shadow-lg mt-10'>
        {dummyData.map((val,index)=>{
            return  <RentedCarCard key={index} 
                                  price={val.carPrice} 
                                  name={val.carName} 
                                  image={val.carPicture} 
                                  location={val.location}
                                  id={val._id}
                                  setChange={setChange}
                                  change={change}/>
        })}
        </div>
    </div>
  )
}

export default AdminRentCheckPage

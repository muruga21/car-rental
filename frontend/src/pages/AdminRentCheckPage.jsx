import React from 'react'
import RentedCarCard from '../Components/RentedCarCard'
import NavBar from '../Components/NavBar'

function AdminRentCheckPage() {
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
          name:"lamborginisdjifdshh",
          image:carImg,
          price:"$999958",
          location:"Coimbatore"
        },
        {
          name:"lamborgin587484i",
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
    <div className='h-[100%] w-[100%]  flex flex-col items-center'>

<div className='w-[100%] h-16 flex justify-around align-middle bg-[#f2f5f5] items-center'>
      <h1 className='font-mono font-extrabold text-3xl'>Available Cars</h1>
    </div>
        <div className='w-[80%] h-[100%] flex justify-center items-center flex-col border-2 shadow-lg mt-10'>
        {dummyData.map((val,index)=>{
            return  <RentedCarCard key={index} price={val.price} name={val.name} image={val.image} location={val.location}/>
        })}
        </div>
    </div>
  )
}

export default AdminRentCheckPage

import React from 'react'

function RentedCarCard(props) {

  return (
    <div className='w-[80%]  flex justify-between px-4 items-center bg-[#f2f2f2] shadow-lg mt-5 rounded-2xl'>
    <div>
        <h1 className='text-gray-600'>Price: {props.price}</h1>

        <h1>Location: {props.location}</h1>
    </div>
    <div className='font-mono font-semibold '>
    <h1>{props.name}</h1>
    </div>

    <div className='h-[100%] w-[13%] p-2'>
        <img src={props.image} alt="" />
    </div>
   </div>
  )
}

export default RentedCarCard

import React from 'react'

function RentedCarCard(props) {

  return (
    <div className='w-[80%]  flex justify-between px-4 items-center bg-[#f2f2f2] shadow-lg mt-5 mb-5 rounded-2xl  '>
    <div>
        <h1 className='text-gray-600'>Price: {props.price}</h1>

        <h1>Location: {props.location}</h1>
    </div>
    <div className='font-mono font-semibold '>
    <h1>{props.name}</h1>
    </div>

    <div className='h-[100%] w-[15%] p-3'>
        <img src={props.image} alt={`${props.name}.png`} />
    </div>
   </div>
  )
}

export default RentedCarCard

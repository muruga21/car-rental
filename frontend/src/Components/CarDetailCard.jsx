import React, { useEffect } from 'react'
import '../index.css'

function CarDetailCard(props) {
  return (
    <>
      <div className='bg-[#f2f5f5] shadow-xl w-70'>
        <img src={props.image} alt="" className='size-64'/>
        <div className='p-4 '>
            <h3 className='font-mono font-bold' >{props.name}</h3>
     
        <div className='flex justify-between pt-4 pb-2 font-semibold text-gray-500'>
            <h4>
               {props.price}
            </h4>
            <h4>
                {props.location}  
            </h4>
        </div>
        </div>
      </div>
    </>
  )
}

export default CarDetailCard

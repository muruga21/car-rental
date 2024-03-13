import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='w-[100%] h-16 flex justify-around align-middle bg-[#f2f5f5] items-center'>
      <h1 className='font-mono font-extrabold text-3xl'>Car Rental</h1>

      <input type="text" className='w-[60%] h-[50%] rounded-lg border-2 border-black bg-[#ffffff] mt-1 '  />

      <button>search</button>

    <Link to='/Admin'> 
      <button>AdminPage</button>
    </Link>
    </div>
  )
}

export default NavBar

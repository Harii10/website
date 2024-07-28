import React from 'react'
import { Link } from 'react-router-dom'

function Front() {
  return (
    <div><div className='text-white'>
    <div class="flex justify-center items-center h-lvh w-lvw bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <div className='flex flex-col justify-center items-center w-full'>
      <Link to='/website/home'>
        <button className='text-2xl font-semibold m-3 p-5 rounded-full bg-gray-700 text-white lg:w-70 lg:hover:bg-slate-600'>
            
            <span className=' tracking-widest' >Explore</span>
             
        </button>
      </Link>
      
      </div>
    </div>
  </div></div>
  )
}

export default Front
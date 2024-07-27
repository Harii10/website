import React from 'react'

function Teams({title, image, desc}) {
  return (
    <div>
        <div className='p-3 md:flex md:justify-evenly'>
        <div className='flex justify-center items-center gap-5 mt-10 '>
            <div className='shadow-xl p-7 rounded-md transition duration-300 ease-in-out transform hover:border border-chose-20'>
                <img src={image} className='h-56 w-60'/>
                <div className='flex flex-col justify-center items-center'>
                <span className='font-semibold'>{title}</span>
                <p>{desc}</p>
                </div> 
            </div>
        </div>
    </div>
    </div>
  )
}

export default Teams
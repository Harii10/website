import React from 'react'

function Intro() {
  return (
    <>
        <div className='flex flex-col justify-center items-center gap-14 p-20 mt-3 md:gap-24'>
            <div className='font-semibold text-4xl md:text-7xl'>
                <h1>Automate Complete Customer Lifecycle with<span className='uppercase text-chose-10 ml-2'>One Eco System</span></h1>
                
            </div>
            <div className='text-slate-500 text-lg md:text-3xl w-full ml-5'>
                <span className='uppercase font-semibold'>massaed</span>
                <p>uses bridge to manage complex service functions for delivering seamless customer experience in 10+ countries across Asia and Africa. </p>
            </div>
            <div>
                <button className='bg-black text-white p-3 rounded-sm'>
                    Get 6 Month free
                </button>
            </div>
        </div>
    </>
  )
}

export default Intro
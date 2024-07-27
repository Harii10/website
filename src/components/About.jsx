import React from 'react'
import { useRef } from 'react';
function About() {
    const form = useRef()
    const formP = (e) => {
        e.preventDefault();
        const email = document.getElementById("email");
        const name = document.getElementById("name");
        const subject = document.getElementById("subject");
        const textarea = document.getElementById("textarea");
    
        
    
        email.value = "";
        name.value = "";
        subject.value = "";
        textarea.value = "";
      }
  return (
    <>
    <div className='p-10 md:p-28'>
        <div className='flex justify-center items-center'>
            <h1 className='font-bold text-4xl md:text-5xl'>We’re changing the
            way people think about CRM</h1>
        </div>
        <div className='flex  flex-col justify-center items-center mt-10 font-thin md:text-2xl'>
            <p>Welcome to BRIDGE, the end-to-end CRM software that redefines customer relationship management. Our tailored solution provides a unified ecosystem for managing all aspects of your customer relationship - from sales and marketing to service and satisfaction. With BRIDGE, elevate service quality, improve information flow, better marketing campaigns, shorten sales cycles, and enhance productivity across your organization.</p>
            <p>
            Our user-friendly and adaptable software is designed to help businesses of all sizes achieve their real potential. Experience the power of BRIDGE and take your business to new heights with a holistic CRM solution that delivers results in one ecosystem. Transform the way you connect with your customers and streamline your business processes with BRIDGE.
            </p>
        </div>
        <div className='flex flex-col justify-center items-center bg-chose-10 text-white mt-10 p-10 gap-8'>
            <h1 className='font-bold text-3xl'>Our Mission</h1>
            <p className='font-thin md:text-2xl'>
            Our mission is to simplify the complexities of customer relationship management by providing a revolutionary end-to-end CRM software that empowers businesses to connect with their customers seamlessly. We aim to enhance productivity and ensure our clients achieve their full potential by offering a unified ecosystem for all customer-related needs
            </p>
        </div>
        <div>
        <section className="mt-20 lg:mt-32 lg:p-10" id="contact">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-semibold tracking-wider text-4xl">Contact Us</h1>
        </div>
        <div className="m-5 p-7 shadow-2xl  rounded-md sm:m-11 md:mx-36 mt-8 2xl:mx-72 2xl:p-9">
          <h3 className="font-medium text-lg">Email Me</h3>
          <form ref={form} onSubmit={formP}>
            <input
              className="w-full p-3 mt-3 rounded-md bg-transparent border border-chose-60 outline-none lg:p-5"
              placeholder="Your Email"
              id="email"
              required
            />
            <input
              className="w-full p-3 mt-3 rounded-md bg-transparent border border-chose-60 outline-none lg:p-5"
              placeholder="Your Name"
              id="name"
              required
            />
            <input
              className="w-full p-3 mt-3 rounded-md bg-transparent border border-chose-60 outline-none lg:p-5"
              placeholder="Subject"
              id="subject"
              required
            />
            <textarea
              className="w-full p-3 mt-3 rounded-md bg-transparent border border-chose-60 outline-none lg:p-5"
              placeholder="Message"
              id="textarea"
              required
            />
            <button className=" bg-chose-10 text-chose-20 rounded-lg font-bold text-xl p-3 w-full mt-3 lg:hover:bg-chose-20 hover:border border-chose-10 lg:hover:text-white xl:hover:bg-chose-20 xl:hover:border xl:border-chose-10 xl:hover:text-white 2xl:hover:bg-chose-20 2xl:hover:border 2xl:border-chose-10 2xl:hover:text-white">
              Send
            </button>
          </form>
        </div>
      </section>
        </div>
    </div>
    </>
  )
}

export default About
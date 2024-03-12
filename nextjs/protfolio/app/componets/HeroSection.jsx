import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <div className="col-span-7 place-self-center  mb-4 text-center lg:text-left">
          <h1 className='text-white mb-4 text-4xl font-extrabold lg:text-6xl'>
            <span className='text-transparent bg-clip-text bg-gradient-to-t from-purple-400 to-pink-600'>Hello, I'm{" "}</span>
            {process.env.DEV_NAME}
          </h1>
          <p className='text-[#ADB7BE] lg:text-3xl'>{process.env.WORKING_AS}</p>
          <div className='grid grid-cols-1 lg:grid-cols-8 sm:justify-center'>
            <button className='rounded-full col-span-3 w-full sm:w-fit px-6 py-3 bg-white mt-4 lg:text-xl'>Hire me </button>
            <button className='rounded-full col-span-3 w-full sm:w-fit px-6 py-3 bg-transparent hover:bg-slate-600 text-white border-2 border-[#243c5a] mt-4 lg:text-xl'> Download CV</button>
          </div>
        </div>
        <div className="col-span-5">
          <div className=" w-700 h-600 relative bg-[#121212] rounded-full">
            <Image 
            src="/images/coder.png"
            alt="hero image"
            className='absolute transform '
            width={400}
            height={500}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
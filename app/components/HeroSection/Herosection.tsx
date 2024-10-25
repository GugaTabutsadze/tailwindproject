/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Herosection = () => {
  return (
    <section>
        <div className='container flex flex-col-reverse
             md:flex-row items-center px-6 mx-auto mt-10 space-x-0 space-y-0
             md:space-y-0'>
            <div className= 'flex flex-col mb-32 space-y-12 md:w-1/2'>
                <h1 className='max-w-md  text-center text-4xl font-bold
                     md:text-5xl md:text-left'>
                    Bring everyone together to build better products
                </h1>
                <p className="max-w-sm text-centre md:text-left text-darkGrayishBlue">
                    Manage makes it simple for software teams to plan
                    day-to-day tasks 
                    while keeping the larger team goals in view
                </p>
                <div className='flex justify-center md:justify-start'>
                     <a href='#' className='p-3 px-6 pt-2 text-white bg-brightRed
                      hover:bg-brightRedLight rounded-full baseline'>
                        Get Started
                     </a>
                </div>
            </div>
            <div>
               <div>
                 <img src='/images/illustration-intro.svg' alt='/' />
               </div>
            </div>
        </div>
    </section>
  )
}

export default Herosection

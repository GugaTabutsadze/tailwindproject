import React from 'react'

const Ctasection = () => {
  return (
    <div className='container flex flex-col items-center bg-cover bg-no-repeat mt-6 
         mx-auto px-6 py-24 bg-brightRed
         md:flex-row md:justify-between md:py-12 md:mt-10'
         style={{ backgroundImage: 'url("/images/bg-simplify-section-desktop.svg")' }}>
      <div className='max-w-md md:ml-36'>
        <h2 className='text-4xl text-center text-white font-bold md:text-left'>Simplify how your team works today.</h2>
      </div>
      <div className=' mt-10 md:mr-36 md:mt-0 md:max-w-md'>
             <a href='#' className=' flex p-3 px-6 pt-2  bg-white font-bold text-brightRed
              hover:text-brightRedSupLight rounded-full baseline'>
              Get Started
             </a>
      </div>
    </div>
  )
}

export default Ctasection

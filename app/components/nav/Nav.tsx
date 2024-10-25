/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Nav = () => {
  return (
    <div className='relative container mx-auto p-6'>
       <div className='flex items-center justify-between'>
        <div className='pt-2'>
          <img src='/images/logo.svg' alt='/' />
        </div>
        <div className='hidden  md:flex space-x-6 items-center'>
          <a href="" className='hover:text-darkGrayishBlue'>Pricing</a>
          <a href="" className='hover:text-darkGrayishBlue'>Product</a>
          <a href="" className='hover:text-darkGrayishBlue'>About Us</a>
          <a href="" className='hover:text-darkGrayishBlue'>Careers</a>
          <a href="" className='hover:text-darkGrayishBlue'>Community</a>
        </div>
        <a href='#' className='hidden  p-3 px-6 pt-2 text-white bg-brightRed
           hover:bg-brightRedLight rounded-full baseline md:block'>
            Get Started
        </a>
       </div>
    </div>
  )
}

export default Nav

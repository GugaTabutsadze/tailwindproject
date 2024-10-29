/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Footer = () => {
  return (
<div className='container flex flex-col-reverse items-center p-12 justify-between bg-veryDarkBlue 
         mx-auto md:flex-row md:items-stretch'>
      <div className='flex flex-col-reverse items-center justify-between gap-[45px]
           md:space-y-0 md:flex-col md:items-start'>
        <p className=' text-darkGrayishBlue md:hidden'>
            Copyright 2020. All rights Reserved
        </p>
        <div>
             <img src='/images/logo.svg' alt='/' />
        </div>
        <div className='flex justify-center space-x-10 md:space-x-4'>
            <a href='#'>
              <img src='/images/icon-facebook.svg' className='h-8 md:h-5' alt='/' />
            </a>
            <a href='#'>
               <img src='/images/icon-youtube.svg' className='h-8 md:h-5' alt='/' />
            </a>
            <a href='#'>
               <img src='/images/icon-twitter.svg' className='h-8 md:h-5' alt='/' />
            </a>
            <a href='#'>
               <img src='/images/icon-pinterest.svg' className='h-8 md:h-5' alt='/' />
            </a>
            <a href='#'>
               <img src='/images/icon-instagram.svg' className='h-8 md:h-5' alt='/' />
            </a>
        </div>
      </div>
      <div className='flex items-start my-12 space-x-[100px] md:space-x-[200px] md:my-0'>
      <div className='flex flex-col space-y-3 text-white'>
        <a href='#' className='hover:text-brightRedLight'>
           Home
        </a>
        <a href='#' className='hover:text-brightRedLight'>
            Pricing
        </a>
        <a href='#' className='hover:text-brightRedLight'>
            Products
        </a>
        <a href='#' className='hover:text-brightRedLight'>
            About Us
        </a>
      </div>
      <div className='flex flex-col space-y-3 text-white'>
        <a href='#' className='hover:text-brightRedLight'>
           Careers
        </a>
        <a href='#' className='hover:text-brightRedLight'>
            Community
        </a>
        <a href='#' className='hover:text-brightRedLight'>
            Privacy Policy
        </a>
      </div>
      </div>
      <div className='flex flex-col items-center justify-between mr-0 md:items-start md:mr-12'>
        <form className='flex gap-2'>
            <input 
               placeholder='Update in your inbox'
               className='py-2 px-8 rounded-full baseline placeholder:focus:opacity-0 border border-none outline-none md:px-3'
               type='email' 
               alt='/' 
            />
            <button className='flex items-center justify-center 
                    py-3 px-8 cursor-pointer rounded-full baseline bg-brightRed
                     hover:bg-brightRedLight md:px-5'>
                Go
            </button>
        </form>
        <p className='hidden text-darkGrayishBlue md:block'>
            Copyright 2020. All rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer

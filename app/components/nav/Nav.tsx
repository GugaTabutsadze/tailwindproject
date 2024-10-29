"use client"
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Burgermenu from './Burgermenu/Burgermenu'

const Nav = () => {

  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)

  const handleBurgerMenuOpen = () => {
     setBurgerMenuOpen(prev => !prev)
  }

  return (
    <div className='relative container mx-auto p-6'>
       <div className='flex items-center justify-between'>
        <div className='pt-2'>
          <img src='/images/logo.svg' alt='/' />
        </div>
        <div>
          <Burgermenu handleBurgerMenuOpen={handleBurgerMenuOpen} burgerMenuOpen={burgerMenuOpen}/>
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

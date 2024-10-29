/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Burgermenu = ({handleBurgerMenuOpen, burgerMenuOpen}) => {
  return (
    <div>
      <div>
        {
            burgerMenuOpen ?
            <img
            onClick={handleBurgerMenuOpen}
            className='cursor-pointer md:hidden'
            src='/images/icon-close.svg'
            alt='/'
            />
            :
            <img 
             onClick={handleBurgerMenuOpen}
             className='cursor-pointer md:hidden'
             src='/images/icon-hamburger.svg' 
             alt='/'
          />
        }
      </div>
      {
        burgerMenuOpen ?
        <div className='border flex flex-col items-center text-2xl justify-center space-y-8 rounded
           absolute w-[433px] bg-white h-[370px] top-[120px] left-[23px] md:hidden'>
         <a href="" className='font-bold'>Pricing</a>
         <a href="" className='font-bold'>Product</a>
         <a href="" className='font-bold'>About Us</a>
         <a href="" className='font-bold'>Careers</a>
         <a href="" className='font-bold'>Community</a>
      </div>
      :
      burgerMenuOpen
      }
    </div>
  )
}

export default Burgermenu

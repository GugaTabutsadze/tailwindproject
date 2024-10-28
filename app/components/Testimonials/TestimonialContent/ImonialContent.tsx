/* eslint-disable react/jsx-key */
"use client"
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

const ImonialContent = ({testimonials}) => {

    const [activeIndex, setActiveIndex] = useState(0)

    const handleActiveIndex = (index) => {
        setActiveIndex(index)
    }


  return (
    <div>
       <div className="hidden md:flex md:space-x-10">
         {testimonials.map((testimonial, index) => (
             <div key={index} className={`flex flex-col items-center text-center p-10 space-y-6 md:bg-veryLightGray  ${index === testimonials.length - 1 ? 'hidden md:last:hidden' : ''}`}>
                 <img src={testimonial.src} alt={testimonial.name} className="w-24 h-24 -mt-[90px] rounded-full" />
                 <h3 className='font-bold'>{testimonial.name}</h3>
                 <p className='text-sm text-darkGrayishBlue'>&quot;{testimonial.review}&quot;</p>
             </div>
         ))}
      </div>
      <div className='flex flex-col items-center md:hidden'>
         {
         testimonials.map((testimonial, index) => (
             <div key={index}
                 className={`${index === activeIndex ? 'flex flex-col items-center p-6 space-y-6 bg-veryLightGray '
                 : 'hidden'}`}>
                 <img className="w-24 h-24 -mt-[70px] rounded-full" src={testimonial.src} alt='/'/>
                 <h3 className='font-bold'>{testimonial.name}</h3>
                 <p className='text-sm text-darkGrayishBlue'>&quot;{testimonial.review}&quot;</p>
             </div>
         ))
         }
         <div className="flex space-x-2 mt-4">
         {testimonials.map((_, index) => (
             <button 
             key={index}
             onClick={() => handleActiveIndex(index)}
             className={`w-3 h-3 rounded-full border border-brightRed ${activeIndex === index ? 'bg-brightRed' : 'bg-white'} md:hidden`}
             />
         ))}
         </div>
      </div>
    </div>
  )
}

export default ImonialContent

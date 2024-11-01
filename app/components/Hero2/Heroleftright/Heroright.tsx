import React from 'react'

const Heroright = ({features}) => {



  return (
    <div className='flex flex-col space-y-10 md:w-1/2'>
      {
        features.map((feature) => (
          <>
             <div className='flex flex-col space-y-3
                             md:space-y-0 md:space-x-6 md:flex-row'>
                 <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
                     <div className='flex items-center space-x-2'>
                         <div className='px-4 py-2 text-white rounded-full bg-brightRed md:py-1'>
                             {feature.number}
                         </div>
                         <h3 className='text-base font-bold md:mb-4 md:hidden'>
                             {feature.h3}
                         </h3>
                     </div>
                 </div>
                 <div>
                     <h3 className='hidden mb-4 text-lg font-bold md:block'>
                         {feature.h3}
                     </h3>
                     <p className='text-darkGrayishBlue '>
                        {feature.p}
                     </p>
                 </div>
             </div>
          </>
        ))
      }
    </div>
  )
}

export default Heroright

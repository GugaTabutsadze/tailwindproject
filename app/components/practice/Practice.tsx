import React from 'react'

const Practice = () => {
  return (
    <div className='flex flex-row min-w-[300px] min-h-[200px]
                    border border-black space-x-[100px]'>
       <div className='bg-red-400 w-[50px] h-[50px]'>
          Hello
       </div>
       <div className='bg-green-500 w-[50px] h-[50px]'>
          From
       </div>
       <div className='bg-blue-500 w-[50px] h-[50px]'>
          Tailwind
       </div>
    </div>
  )
}

export default Practice

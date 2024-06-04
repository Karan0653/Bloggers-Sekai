import React from 'react'

const Loading = () => {
  return (
    <div className=' h-80 text-center flex items-center justify-between '>
      <div className=" mx-auto flex">
        <div className='h-4 w-4 m-1 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div className='h-4 w-4 m-1 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div className='h-4 w-4 m-1 bg-black rounded-full animate-bounce'></div>
      </div>
    </div>
  )
}

export default Loading
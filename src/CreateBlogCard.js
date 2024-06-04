import React from 'react'
import { Link } from 'react-router-dom'

const CreateBlogCard = () => {
  return (
    <div className='flex flex-col justify-between items-center p-6 mb-4 bg-white border  border-gray-200 rounded-lg shadow-lg shadow-gray-300'>
        <div className='text-gray-500 font-semibold'>It seems you have not written any blogs!</div>
        <div className='text-gray-500 font-semibold my-6'>Create your first blog by clicking <b>'Create'</b> button below</div>
        <Link to='/create' className=' btn hover:bg-green-700 hover:cursor-pointer bg-green-400 tracking-[2px]'>CREATE</Link>
    </div>
  )
}

export default CreateBlogCard
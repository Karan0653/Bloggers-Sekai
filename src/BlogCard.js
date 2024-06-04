import React from 'react'

const BlogCard = ({children}) => {
  return (
            <div className=" md:w-[80%] p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow ">
                {children}
            </div>
  )
}

export default BlogCard
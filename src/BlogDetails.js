import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'

const BlogDetails = () => {

    const [blogDetail,setBlogDetail] = useState(null)
    const {id} = useParams();
    console.log(id);


    useEffect(() => {
        fetch(`https://blog-api-73fd.onrender.com/blog/${id}/`)
        .then(res => res.json())
        .then(data => 
            {
                console.log(data)
                setBlogDetail(data)
            }
        )
    },[])

  return (
    <>
      <Link to='/' className=' text-lg'> Home</Link>
      {blogDetail && 
            <>
              <div className=' mt-4'>
                <h4 className='text-4xl capitalize font-bold'>{blogDetail.title}</h4> 
                <i className='block mt-4 text-lg'>Author: {blogDetail.author_name}</i> 
                <i> Date Posted: {blogDetail.date_posted.slice(0,10)}</i>
              </div>
              <hr className='my-4 ' />
              <div className=' text-xl mt-14'> 
                <p>{blogDetail.content}</p> 
              </div>
            </>
        }
    </>
  )
}

export default BlogDetails
import React, { useEffect, useState } from 'react'
import BlogList from './BlogList'
import { Link } from 'react-router-dom'
import Loading from './Loading'

const Home = () => {

  const [blogData, setBlogData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    fetch('https://blog-api-73fd.onrender.com/blog/')
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      setTimeout(() => {
        setBlogData(data)
        setLoading(false)
      }, 1500)
    })
  },[])


  return (
    <>
      <div className='text-4xl font-bold m-5 ml-0 '>All Blogs</div>
      <hr className=' mb-10 border-b-2 w-[80%]' />

      {loading && <Loading />}
      {blogData && <BlogList blogs={blogData}/>}
    </>
  )
}

export default Home
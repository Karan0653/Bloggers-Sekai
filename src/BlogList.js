import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BlogCard from './BlogCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import UpdateBlog from './UpdateBlog'
import DeleteBlog from './DeleteBlog';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const BlogList = ({blogs, editable}) => {


  const [update, setUpdate] = useState(false)
  const [updateBlog , setUpdateBlog] = useState(null)
  const [deleteBlog, setDeleteBlog] = useState(false)
  const [deleteData, setDeleteData] = useState(null)


  const handleClick = (blog) => {
    setUpdate(true)
    console.log(blog);
    setUpdateBlog(blog)

  }


  const handleDelete = (blog) => {
    setDeleteBlog(true)
    console.log(blog)
    setDeleteData(blog)
  }



  // `https://bloggerssekai-ndqd6zcdu-karans-projects-e106fdb1.vercel.app/blog/${blog.id}/`
  // console.log(editable);
  return (
    <div id='your-blogs'>  
        {deleteBlog && <DeleteBlog blog={deleteData} setDeleteBlog={setDeleteBlog}/>}
        {update ? <UpdateBlog blog={updateBlog} setUpdate={setUpdate} /> :blogs.map( blog =>
        
        <li className=' list-none' key={blog.id}>
          <BlogCard >
            <p className=' capitalize text-2xl font-semibold underline'>{blog.title}</p>
            <i>{blog.date_posted.slice(0,10)}</i>
            <p className='my-3'>{blog.content.slice(0,200) + '...'}</p>
            <Link to={`/blog/${blog.id}`} className='btn focus:ring-gray-500 bg-gray-700 hover:bg-gray-900 '>View <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </Link>
            {editable && <><Link  onClick={() => {handleClick(blog)}} className='btn mx-2 bg-gray-400 hover:bg-gray-600'>Update<FontAwesomeIcon className=' pl-2' icon={faPenToSquare} style={{color: "#ffffff",}} /></Link><AnchorLink onClick={() => handleDelete(blog)} href='#profile' className='btn bg-red-500 hover:bg-red-800'>Delete<FontAwesomeIcon className=' pl-2' icon={faTrash} style={{color: "#ffffff",}} /></AnchorLink></>}  
          </BlogCard>
        </li>
        )} 
    </div>
  )
}

export default BlogList
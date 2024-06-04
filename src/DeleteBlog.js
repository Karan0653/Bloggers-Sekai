import React from 'react'
import BlogCard from './BlogCard'

const DeleteBlog = ({setDeleteBlog, blog}) => {

    const handleDelete = (e,id) => {
        setDeleteBlog(false)
      e.preventDefault()
      fetch(`https://blog-api-73fd.onrender.com/delete/${id}/`,{
        method:'DELETE'
      })
      .then( res => res.json())
      .then( data => 
        {
          console.log(data)
          alert(data)
          window.location.reload()
        }
      )
      
    }


  return (
    <div>
        <BlogCard>
            <form action="" method="post" onSubmit={(e) => handleDelete(e,blog.id)}>
                <div>Are you Sure?</div>
                <div>You want to delete your <b>"{blog.title}"</b> blog</div>
                <button className='btn bg-green-400 mr-2 '>YES</button>
                <button className='btn bg-red-400' onClick={() => setDeleteBlog(false)}>Cancel</button>
            </form>
        </BlogCard>
    </div>
  )
}

export default DeleteBlog
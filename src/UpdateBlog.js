import React, { useState } from 'react'


const UpdateBlog = ({blog, setUpdate}) => {

  
  // let user = localStorage.getItem('userLogData')
  // user = JSON.parse(user)
  // let userName = user['name']

  const [formData, setFormData] = useState({'title':blog.title,'content':blog.content,'id':blog.id})

  const handleChange = (e,str) => {

    if (str === 'title') {
      setFormData({...formData,title:e.target.value})
      console.log(formData['title']);
    }
    else if (str === 'content'){
      setFormData({...formData,content:e.target.value})
      console.log(formData['content']);
    }

  } 
  
  console.log('formData',formData);



  const handleUpdate = (e) => {
    e.preventDefault()

    fetch('https://blog-api-73fd.onrender.com/update/',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(formData)
  }).then(res => res.json())
  .then(data => {
    console.log(data)
    alert('update successful')
    setTimeout(()=>{
      window.location.reload()
    },2000)
  })

  setFormData({'title':'','content':'',...formData})

  }

  

  return (
    <div className=' w-full h-full mx-auto flex items-center justify-between  '>
      <form action="" method="post" onSubmit={handleUpdate} className=' w-[80%] mx-auto'>
          <input className=' w-full p-2 border-2 border-gray-300 rounded-md' value={formData['title']} style={{display:'block',margin:'10px'}} type="text" name='title' placeholder='Blog Title' onChange={(e) => handleChange(e,'title')} required/>
          <textarea className=' w-full p-2 border-2 border-gray-300 rounded-md' value={formData['content']} style={{display:'block',margin:'10px'}} name="content" placeholder='Blog Content' id="" rows='15'  onChange={(e) => handleChange(e,'content')} required></textarea>
          
          
          <div className="text-center">
          <input className='btn bg-gray-400 hover:bg-gray-700 hover:cursor-pointer' type="submit" style={{margin:'10px'}} value="Update" />
          <input onClick={() => {setUpdate(false)}} className='btn bg-red-400 hover:bg-red-700 hover:cursor-pointer' type="submit"  value="Cancel" />
          </div>
      </form>
    </div> 
  )
}

export default UpdateBlog

/**<div className=' w-full h-full mx-auto flex items-center justify-between  '>
      <form action="" method="post" onSubmit={handleUpdate} className=' w-[80%] mx-auto'>
          <input className=' w-full p-2 border-2 border-gray-300 rounded-md' value={formData['title']} style={{display:'block',margin:'10px'}} type="text" name='title' placeholder='Blog Title' onChange={(e) => handleChange('title',e)} required/>
          <textarea className=' w-full p-2 border-2 border-gray-300 rounded-md' value={formData['content']} style={{display:'block',margin:'10px'}} name="content" placeholder='Blog Content' id="" rows='15'  onChange={(e) => handleChange('content',e)} required></textarea>
          <input className=' font-semibold w-full p-2 border-2 border-gray-300 rounded-md' value={formData['author']} readOnly style={{display:'block',margin:'10px'}} type="text" name='author'/>
          
          <div className="text-center">
          <input className='btn bg-gray-400 hover:bg-gray-700 hover:cursor-pointer' type="submit" style={{margin:'10px'}} value="Update" />
          <input onClick={() => {setUpdate(false)}} className='btn bg-red-400 hover:bg-red-700 hover:cursor-pointer' type="submit"  value="Cancel" />
          </div>
      </form>
    </div> */


  /**<form action="" method="post" onSubmit={handleUpdate} >
        <input value={formData['title']} onChange={(e) => {handleChange(e,'title')}} style={{display:'block',margin:'10px'}} type="text" name='title' placeholder='Blog Title' required/>
        <textarea value={formData['content']}  onChange={(e) => {handleChange(e,'content')}} style={{display:'block',margin:'10px'}} name="content" placeholder='blog content...' id="" rows='15'  required></textarea>

        <input type="submit" style={{margin:'10px'}} value="Update" />
        <button onClick={() => {setUpdate(false)}}>Close</button>
    </form>  */
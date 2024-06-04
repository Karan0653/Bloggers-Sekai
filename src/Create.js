import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { notify } from './Notify'
import { ToastContainer } from 'react-toastify'

const Create = () => {

 const navigate = useNavigate()

 let userData = localStorage.getItem('userLogData')
 let userDataObj = JSON.parse(userData)

 const [formData, setFormData] = useState({'title':'','content':'','author':userDataObj['name']})

 const handleChange = (str,e) => {
    if (str === 'title') {
      setFormData({...formData,title:e.target.value})
      console.log(formData['title']);
    }
    else if (str === 'content'){
      setFormData({...formData,content:e.target.value})
      console.log(formData['content']);
    }
 }

 const handleSubmit = (e) => {
  e.preventDefault()

  fetch('https://blog-api-73fd.onrender.com/create/',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(formData)
  }).then(res => res.json())
  .then(data => {
    console.log(data)
    // alert('Blog Posted!')
    notify('success','YAY! Blog Posted Successfully!',1000)
    setTimeout(()=>{navigate('/profile')},2000)
  })

  setFormData({...formData,'title':'','content':''})
  

 }



  return (
    <div className=' w-full h-full mx-auto flex items-center justify-between  '>
      <ToastContainer position='top-center' />
      <form action="" method="post" onSubmit={handleSubmit} className=' w-[80%] mx-auto'>
          <input className=' w-full p-2 border-2 border-gray-300 rounded-md' value={formData['title']} style={{display:'block',margin:'10px'}} type="text" name='title' placeholder='Blog Title' onChange={(e) => handleChange('title',e)} required/>
          <textarea className=' w-full p-2 border-2 border-gray-300 rounded-md' value={formData['content']} style={{display:'block',margin:'10px'}} name="content" placeholder='Blog Content' id="" rows='15'  onChange={(e) => handleChange('content',e)} required></textarea>
          <input className=' font-semibold w-full p-2 border-2 border-gray-300 rounded-md' value={formData['author']} readOnly style={{display:'block',margin:'10px'}} type="text" name='author'/>
          
          <div className="text-center">
          <input className='btn bg-gray-400 hover:bg-gray-700 hover:cursor-pointer' type="submit" style={{margin:'10px'}} value="Publish" />
          <input onClick={() => {navigate('/')}} className='btn bg-red-400 hover:bg-red-700 hover:cursor-pointer' type="submit"  value="Cancel" />
          </div>
      </form>
    </div>
  )
}

export default Create
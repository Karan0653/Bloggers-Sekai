import React, { useEffect, useState } from 'react'
import profile from './assets/Images/profile.png'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { notify } from './Notify'
import { ToastContainer } from 'react-toastify'

const Profilecard = ({id, name}) => {

  const [data, setData] = useState(null)
  const [edit, setEdit] = useState(false)
  const [desc, setDesc] = useState(null)

  useEffect(()=>{
    fetch(`https://blog-api-73fd.onrender.com/user_data/${id}`)
    .then( res => res.json())
    .then( data =>{
       console.log(data)
       if (data['description'] === null){
        data['description'] = 'no data to describe you'
       }
       setTimeout(()=> {
        setData(data)
        setDesc(data['description'])
       },2000)

      } )
  },[])

  const handleChange = (e) => {
    setDesc(e.target.value)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    fetch('https://blog-api-73fd.onrender.com/profile_update/',
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({'name':name,'desc':desc})
        }

    )
    .then( res => res.json())
    .then( data => {
      console.log(data)
      notify('success',data,2000)
    })
    setEdit(false)
    setData({...data,description:desc})
    // alert('form submitted')
  }

  

  return (
    <div><div className=" flex items-center justify-center">
 
    <ToastContainer position='top-center' />
    <div
        className=" z-[-50] relative w-full max-w-2xl my-8 md:my-16 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-dashed border-gray-400  shadow-lg rounded-lg">
        <span className="absolute text-xs font-medium top-0 left-0 rounded-br-lg rounded-tl-lg px-2 py-1 bg-primary-100   border-b-2 border-r-2 border-dashed ">
            Author
        </span>

        <div className="w-full flex justify-center sm:justify-start sm:w-auto">
            <img className=" object-cover w-20 h-20 mt-3 mr-3 rounded-full" src={profile} />
        </div>

        <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">

            <p className="font-display mb-2 text-2xl font-semibold" itemProp="author">
                {data ? data['name'] : <Skeleton width={70} baseColor='#D3D3D3' />}
            </p>

            <div className="mb-4 md:text-lg text-gray-400">
               {<p>{data ? data['description']  : <Skeleton width={200} count={2} baseColor='#D3D3D3' />}</p>}
                
            </div>
           
        </div>
        
    </div>
    
</div>
{edit && <form method='POST' onSubmit={handleUpdate}>
      <input value={desc} onChange={handleChange} className='border-2 p-1 rounded-md mr-2 border-gray-300' type="text" />
      <input type="submit" className=' hover:cursor-pointer hover:bg-gray-600 btn bg-gray-300 mr-2' value="Update" />
      <button onClick={()=> {setEdit(false)}} className=' hover:bg-red-700 btn bg-red-300'>Cancel</button>
    </form>}
{!edit && <button className='btn bg-gray-300' onClick={() => {setEdit(true)}}>Update Description</button>}
</div>
  )
}

export default Profilecard
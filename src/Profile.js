import React, { useEffect, useState } from 'react'
import BlogList from './BlogList'
import Loading from './Loading'
import Profilecard from './Profilecard'
import CreateBlogCard from './CreateBlogCard'

const Profile = () => {

    const [blogData, setBlogData] = useState(null)
    const [loading, setLoading] = useState(true)

    let userData = localStorage.getItem('userLogData')
    userData = JSON.parse(userData)

    const name = userData['name']
    const userId = userData['id']

    useEffect(()=>{
        fetch('https://blog-api-73fd.onrender.com/profile/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(name)
        })
        .then(res => {
            console.log(res.status);
            if (res.status === 204){
                // set error
            }
            else{
                return res.json()
            }
        })
        .then(data => 
            {

                console.log('data',data)
                setTimeout(() => {
                    setBlogData(data)
                    setLoading(false)
                },2000)
                
            }
        )
    },[])

  return (
    <div id='profile'>
        <Profilecard id={userId} name={name}/>
        <h3 className='text-4xl font-bold m-5 ml-0'>Your Blogs!</h3>
        {loading && <Loading />}
        
        {blogData ? <BlogList blogs={blogData} editable='true'  /> : !loading && <CreateBlogCard />}
    </div>
  )
}

export default Profile
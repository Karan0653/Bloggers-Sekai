import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './Notify';

const Register = () => {

    const [userDetail, setUserDetail] = useState({'username':'','email':'','password':''} )
    const navigate = useNavigate();


    function handleClick(str,e) {
        if (str === 'username'){
            setUserDetail({...userDetail,username:e.target.value})
            console.log(userDetail);
        }
        else if(str ==='email'){
            setUserDetail({...userDetail,email:e.target.value})
            console.log(userDetail);   
        }
        else if(str === 'password'){
            setUserDetail({...userDetail,password:e.target.value})
            console.log(userDetail);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userDetail);

        fetch('https://blog-api-73fd.onrender.com/register/',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(userDetail)
        })
        .then(res => res.json())
        .then(data =>{
             console.log(data)
             if(data === 'Registration Successful'){
              notify('success',data,1000)
              setTimeout(()=>{navigate('/login')},2000)
             }
             else{
              notify('warning',data) 
             }
            })

        setUserDetail({'username':'','email':'','password':''})
    }

  return (
    <>
    <ToastContainer position='top-center'/>
    <div className=' w-full h-[100vh] flex justify-between items-center'>
      <div className=' bg-white w-[80%] py-10 m-auto shadow-md rounded-md p-4'>
        <form action="" method="post" onSubmit={handleSubmit}>
          <input className=' bg-gray-200 block w-[95%] rounded-sm p-2 m-2 my-6' type="text" value={userDetail['username']} placeholder='Name' required onChange={(e)=>{handleClick('username',e)}} />
          <input className=' bg-gray-200 block w-[95%] rounded-sm p-2 m-2 my-6' type="email" value={userDetail['email']} placeholder='E-mail' required onChange={(e)=>{handleClick('email',e)}} />
          <input className=' bg-gray-200 block w-[95%] rounded-sm p-2 m-2 my-6' type="password" value={userDetail['password']} placeholder='Password' required onChange={(e)=>{handleClick('password',e)}} />
          <input className=' bg-gray-800 text-white font-semibold mt-12 hover:cursor-pointer block w-[95%] rounded-sm p-2 m-2' type="submit" value="Register" />
        </form>
        <div className=' text-center mt-6 font-semibold'>
          <div>Already Registered? <Link className=' underline' to='/login'>Login</Link></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register
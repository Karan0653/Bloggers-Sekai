import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { notify } from './Notify'
import { ToastContainer } from 'react-toastify'

const Login = () => {

  const [loginData, setLoginData] = useState({'name':'','password':''})

  let user = localStorage.getItem('userLogData')
    user = JSON.parse(user)

   
    // console.log('auth-user',user);
    

  const handleLogin = (str, e) => {
    if (str === 'name'){
        setLoginData({...loginData,name:e.target.value})
    }
    if (str === 'password'){
        setLoginData({...loginData,password:e.target.value})
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    // console.log(loginData);



    fetch('https://blog-api-73fd.onrender.com/login/',{
        method:'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then( res =>
      {
        if(!res.ok){
          notify('warning','Invalid Credentials!')
        }
        return res.json()
      }
    )
    .then( (data) => {
        // console.log("data",data)
        
        let userInfo = {}
        userInfo['name'] = loginData['name'];
        userInfo['id'] = data
        

        localStorage.setItem('userLogData',JSON.stringify(userInfo))
        if (userInfo['id'] !== 'Invalid Crendentials!' ){
              setTimeout(()=>{window.location.reload()},2000)
              notify('success','Login Successful!',1000)
        }
        
        // console.log(loginData);
        setLoginData({'name':'','password':''})
      
    })
  }


  // localStorage.setItem('userLogData',JSON.stringify(loginData))




  return (
    <>
    <div className=" h-[90vh] flex flex-col items-center justify-center   text-gray-700">
      <ToastContainer position='top-center'/>
      <form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" method="post" onSubmit={handleSubmit} action="">
        <label className="font-semibold text-xs" htmlFor="name">Username </label>
        <input name="name" className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text"  value={loginData['name']} required placeholder='Name' onChange={(e)=>{handleLogin('name',e)}} />
        <label className="font-semibold text-xs mt-3" htmlFor="password">Password</label>
        <input name="password" className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" value={loginData['password']} required placeholder='Password' onChange={(e)=>{handleLogin('password',e)}} />
        <input type="submit" className="flex items-center justify-center h-12 px-6 w-64 bg-gray-800 hover:cursor-pointer  mt-8 rounded font-semibold text-sm text-white hover:bg-black" value="Login" />
        <div className="flex mt-6 justify-center text-xs">
          <span className="text-black font-semibold mr-1" > New User ? </span>
          <Link to='/register' className="text-black underline " href="#"> Sign Up</Link>
        </div>
      </form>
    </div>
    </>
  )
}

export default Login


{/* <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">

<!-- Component Start -->
<h1 className="font-bold text-2xl">Welcome Back :)</h1>
<form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" method="post" action="">
  <label className="font-semibold text-xs" for="name">Username </label>
  <input name="name" className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text"  value={loginData['name']} required placeholder='name' onChange={(e)=>{handleLogin('name',e)}} />
  <label className="font-semibold text-xs mt-3" for="password">Password</label>
  <input name="password" className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" value={loginData['password']} required placeholder='password' onChange={(e)=>{handleLogin('password',e)}}>
  <input type="submit" className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700" value="Login" />
  <div className="flex mt-6 justify-center text-xs">
    <a className="text-blue-400 hover:text-blue-500" href="#">Forgot Password</a>
    <span className="mx-2 text-gray-300">/</span>
    <a className="text-blue-400 hover:text-blue-500" href="#">Sign Up</a>
  </div>
</form>
<!-- Component End  -->

</div> */}

/**<>
    <div>New User? <Link to='/register' >Sign Up</Link></div>
    <form method='post' onSubmit={handleSubmit}>
        <input type="text" value={loginData['name']} required placeholder='name' onChange={(e)=>{handleLogin('name',e)}}/>
        <input type="password" value={loginData['password']} required placeholder='password' onChange={(e)=>{handleLogin('password',e)}}/>
        <input type="submit" value="Login" />
    </form>
    </> */
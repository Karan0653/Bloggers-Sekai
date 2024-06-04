
import './index.css'
import Create from "./Create";
import Home from "./Home";
import Login from "./Login";
import PrivateRoutes from "./PrivateRoutes";
import  PublicRoutes from "./PublicRoutes";
import Register from "./Register";
import {Routes, Route} from 'react-router-dom'
import BlogDetails from "./BlogDetails";
import Profile from './Profile';
import NavBar from './NavBar';
import { useAuth } from './Auth';


function App() {

  const loggedIn = useAuth();

  

  return (
    <div className='#FAF9F6'>
         

        <div className="content ">
              {loggedIn && <NavBar />}
              <div className="w-[90%] md:w-[70%] mx-auto my-0">
                <Routes>
                  <Route element={<PrivateRoutes />}>
                    <Route element={<Home />} path='/' />
                    <Route element={<Create />} path="/create" />
                    <Route element={<BlogDetails />} path="/blog/:id" />
                    <Route element={<Profile />} path='/profile' />
                  </Route>
                  <Route element={<PublicRoutes />} >
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} /> 
                  </Route>
                </Routes>
              </div>
        </div>
    </div>
  );
}

export default App;

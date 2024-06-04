
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './Auth.js'

function PublicRoutes() {
    const token = useAuth()
    return token ? <Navigate to='/' /> : <Outlet />
}

export default PublicRoutes
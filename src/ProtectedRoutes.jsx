import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ({admin, redirectTo}) => {
    if (!admin) {
        return <Navigate to ={redirectTo} replace/>
    }
    
    return <Outlet/>
}
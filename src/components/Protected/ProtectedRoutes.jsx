import { Navigate, Outlet } from "react-router-dom";



const ProtectedRoutes = () => {
    let isLogged = localStorage.getItem("token")
    if( !isLogged ){
      console.log(isLogged)
      return <Navigate to="/" />
      
    }
   
  

  return (
    
    <Outlet />
  )}

    export default ProtectedRoutes
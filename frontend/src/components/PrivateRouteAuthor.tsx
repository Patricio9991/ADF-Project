import { Navigate, Outlet } from "react-router-dom";




export default function PrivateRouteAuthor(){
    const flagAuthor = true
    return flagAuthor ? <Outlet/> : <Navigate to={"/"}/>


}
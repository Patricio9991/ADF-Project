import { Navigate, Outlet } from "react-router-dom";
import cookie from 'js-cookie'



export default function PrivateRouteAuthor(){
    const flagAuthor = cookie.get().username === "Patricio Pucheta"? true : false
    return flagAuthor ? <Outlet/> : <Navigate to={"/"}/>


}
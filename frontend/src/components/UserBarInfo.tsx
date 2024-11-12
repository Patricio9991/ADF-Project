import { IoLogOutOutline } from "react-icons/io5";
import { TbUserPentagon } from "react-icons/tb";
import { Fragment } from "react/jsx-runtime";
import Cookie from 'js-cookie'
import { useNavigate } from "react-router-dom";


interface dataUser{
    username:string
}


export default function UserBarInfo({username}:dataUser){
    const navigate = useNavigate()

    const clearCookie = ()=>{
        Cookie.remove('username')
        navigate('/')
    }



    return(
        <Fragment>
            
            <IoLogOutOutline className="cursor-pointer sm:hidden" size={25} onClick={()=>clearCookie()}/>
            <div className="sm:flex sm:flex-col  flex flex-row p-5 items-center gap-20 text-2xl">
            <h3 className="flex flex-row items-center gap-2 "><TbUserPentagon size={25}/> {username}</h3>
            <IoLogOutOutline className="cursor-pointer " size={25} onClick={()=>clearCookie()}/>
            </div>
        </Fragment>
    )
}
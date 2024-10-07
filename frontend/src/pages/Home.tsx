import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { FaUserPen } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { Link } from "react-router-dom";






export default function Home(){

    const [show,setShow] = useState(false)

    return(
        <Fragment>
            <div className="flex flex-col items-center justify-center h-screen">


                <p className="font-semibold text-5xl w-full pb-4 text-center"> ADF-project </p>
                {show ? (<span onClick={()=>{setShow(false);console.log(show)}}><MdKeyboardArrowDown size={50}/></span>):
                (<span onClick={()=>{setShow(true);console.log(show)}}><MdKeyboardArrowUp size={50}/></span>)}

               


                <div className={`flex flex-row gap-5  ${show ? "visible": "invisible"}`}>
                    <span><FaUserPen size={100} className="hover:text-blue-900"/></span>
                    <Link to="/historias">
                        <span><ImBooks size={100} className="hover:text-blue-900"/></span>
                    </Link>
                    {/* <span><MdMusicNote size={100} className="hover:text-blue-900"/></span> */}
                    <Link to="/nuevo">
                        <span><TfiWrite size={100} className="hover:text-blue-900"/></span>
                    </Link>
                </div>
                    <Link to="/registro">
                        <button className="text-xl p-5">Registro</button>
                    </Link>
                    <Link to="/login">
                        <button className="text-xl p-5">Log In</button>
                    </Link>
            </div>
        </Fragment>
    )
}
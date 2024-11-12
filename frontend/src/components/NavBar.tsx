import { Fragment } from "react/jsx-runtime";
import magicBook from '../assets/varios/book.gif'
import cookie from 'js-cookie'
import LoginRegister from "./LoginRegister";
import UserBarInfo from "./UserBarInfo";
import { Link } from "react-router-dom";

export default function NavBar(){

    
    const dataUser = cookie.get() 
    const author = "Patricio Pucheta"
    console.log(dataUser)
    return(
        <Fragment>
                <div className="flex flex-row justify-between items-center  bg-purple-500 py-4 ">

                    <h1 className="sm:flex sm:flex-col sm:items-center text-5xl font-cincel underline flex flex-row gap-10">AUTOR DE FANTASIAS
                        <img src={magicBook} className=" sm:h-[50px] sm:w-[50px] md:h-[50px]"/>
                    </h1>
                    {/* <span className="sm:bg-white">X</span> */}

                    <span className="text-xl sm:hidden">
                        {dataUser.username === author ? <Link to="/nuevo">Publicar</Link>:""}
                    </span>

                    <span className="">
                        {dataUser.username ? <UserBarInfo username={dataUser.username}/>:<LoginRegister />}
                    </span>

                </div>

        </Fragment>
    )
}
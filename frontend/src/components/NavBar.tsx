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

                    <h1 className="text-5xl font-cincel underline flex flex-row gap-10">AUTOR DE FANTASIAS
                        <img src={magicBook} className="h-[50px]"/>
                    </h1>

                    <span className="text-xl">
                        {dataUser.username === author ? <Link to="/nuevo">Publicar</Link>:""}
                    </span>

                    {dataUser.username ? <UserBarInfo username={dataUser.username}/>:<LoginRegister />}

                </div>

        </Fragment>
    )
}
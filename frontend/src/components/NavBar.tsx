import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import magicBook from '../assets/book.gif'



export default function NavBar(){


    return(
        <Fragment>
                <div className="flex flex-row justify-between items-center  bg-purple-500 py-4 ">

                    <h1 className="text-5xl font-cincel underline flex flex-row gap-10">AUTOR DE FANTASIAS
                        <img src={magicBook} className="h-[50px]"/>
                    </h1>

                    <div>
                        <Link to="/registro">
                            <button className="text-xl p-5 ">Registro</button>
                        </Link>
                        <Link to="/login">
                            <button className="text-xl p-5 ">Log In</button>
                        </Link>

                    </div>
                </div>

        </Fragment>
    )
}
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";





export default function LoginRegister(){
    return(
        <Fragment>
            <div className="sm:flex sm:flex-col flex flex-row">
                <Link to="/registro">
                    <button className="text-xl p-5 ">Registro</button>
                </Link>
                <Link to="/login">
                    <button className="text-xl p-5 ">Log In</button>
                </Link>
            </div>
            
        
        </Fragment>
    )
}
import { Fragment } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
// import { useState } from "react";
import { logInUser } from "../context/dataFunctions";


interface logInFormData {
    inData: string | number;
    password: string;
}



export default function LogIn(){

    const {handleSubmit,register} = useForm<logInFormData>()
    // const [flagError,setFlagError] = useState(false)
    const clasesInputsData = "rounded-md text-xl h-10 w-[400px] p-5" 

    const onSubmit = async (data:logInFormData)=>{
        await logInUser(data)
        // setFlagError(true)
    }

    return(
        <Fragment>
    
            <form onSubmit={handleSubmit(onSubmit)} 
                className="flex flex-col h-screen justify-center items-center gap-10 ">

                <h3 className="text-5xl font-bold rounded-lg">Log In</h3>

                <input type="text" placeholder="Username o Numero de telefono"  {...register("inData", {required:true})} 
                    className={`${clasesInputsData}`}/>



                <input type="password" placeholder="Password"  {...register("password",{required:true})} 
                    className={`${clasesInputsData}`}/>

                <input type="submit" value="Ingresar" className={`rounded-md text-xl h-10 w-[400px] hover:bg-red-700 hover:cursor-pointer`}/>

                {/* {flagError ? <span className="text-lg font-bold absolute bottom-24">{`${error}!`}</span>:""} */}
            </form>




        </Fragment>
    )
}
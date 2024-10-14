import { Fragment } from "react/jsx-runtime";
import {useForm} from 'react-hook-form'
import { checkAxiosErrorMessage, registerDataUser } from "../library/dataFunctions";

import { useState } from "react";


interface RegisterFormData {
    username: string;
    phoneNumber: string;
    email: string;
    password: string;
}


export default function Register(){

    const [error,setError] = useState()
    const [flagError,setFlagError] = useState(false)
    const {register,handleSubmit} = useForm<RegisterFormData>()
    const clasesInputsData = "rounded-md text-xl h-10 w-[400px] p-5" 

   



    const onSubmit = async (data: RegisterFormData) =>{
        
        try {
                    
            await registerDataUser(data)

        } catch (error:unknown) {

            setFlagError(true)

            setError(checkAxiosErrorMessage(error))
        } 
    }


    setTimeout(()=>{
        setFlagError(false)},2000)

    console.log(flagError,error)

    return(
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)} 
                className="flex flex-col h-screen justify-center items-center gap-10 ">

                <h3 className="text-5xl font-bold rounded-lg">Registro</h3>

                <input type="text" placeholder="Username"  {...register("username", {required:true})} 
                    className={`${clasesInputsData}`}/>

                <input type="number" placeholder="Numero de telefono"  {...register("phoneNumber",{required:true})} 
                    className={`${clasesInputsData}`}/>

                <input type="email" placeholder="Email"  {...register("email",{required:true})} 
                    className={`${clasesInputsData}`}/>

                <input type="password" placeholder="Password"  {...register("password",{required:true})} 
                    className={`${clasesInputsData}`}/>

                <input type="submit" className={`rounded-md text-xl h-10 w-[400px] hover:bg-red-700 hover:cursor-pointer`}/>

                {flagError ? <span className="text-lg font-bold absolute bottom-24">{`${error}!`}</span>:""}

            </form>
        </Fragment>
    )
}
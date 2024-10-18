import { Fragment } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { logInUser,checkAxiosErrorMessage } from "../library/dataFunctions";
import {useState } from "react";
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'


interface logInFormData {
    inData: string | number;
    password: string;
}



export default function LogIn(){

    const {handleSubmit,register} = useForm<logInFormData>()
    const [flagError,setFlagError] = useState(false)
    const [error,setError] = useState()
    const clasesInputsData = "rounded-md text-xl h-10 w-[400px] p-5" 

    const navigate = useNavigate()


    

    


    const onSubmit = async (data:logInFormData)=>{
        try {
            
            const logInData = await logInUser(data)
            console.log(logInData)
    
            
            if(logInData.status){
                const username = logInData.data.userFound.username
                Cookies.set('username',username) 
            
                navigate('/') 
                
            }
                
        
            
        } catch (error:unknown) {

            setFlagError(true)

            setError(checkAxiosErrorMessage(error))
            
        }
    }

    console.log(error,flagError)

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

                {flagError ? <span className="text-lg font-bold absolute bottom-24">{`${error}!`}</span>:""} 
            </form>




        </Fragment>
    )
}
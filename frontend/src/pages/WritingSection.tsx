import { Fragment } from "react/jsx-runtime";
import {useForm} from 'react-hook-form'
import {submitData} from '../context/dataFunctions.ts'

import { IoChevronBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


export default function WritingSection(){

    const {register,handleSubmit} = useForm()

    
    return(
        <Fragment>
            <form onSubmit={handleSubmit(submitData)} className="relative flex flex-col gap-y-6 justify-center items-center p-6">
                <Link to="/">
                    <IoChevronBackSharp size={30} className="absolute left-0 top-5 hover:cursor-pointer"/>            
                </Link>
                
                <input className= "h-12 rounded-lg text-center font-bold text-5xl" type="text" placeholder="Titulo"  {...register("Titulo")} />
                

                <input type="date" className="rounded-lg" {...register("Fecha")}/>

                <textarea className="font-times text-lg w-full h-[500px] rounded-md" {...register("Texto")}/>

                <input type="submit" className="hover:bg-red-700 w-72 h-12 rounded-lg border-4"/>

            </form>


        </Fragment>
    )
}
import { Fragment } from "react/jsx-runtime";
import {useForm, Controller} from 'react-hook-form'
import {submitData} from '../library/dataFunctions.ts'

import { IoChevronBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import {ADFbooks,Novel} from '../books/booksInfo.ts'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



export default function WritingSection(){

    const {register,handleSubmit,control} = useForm()
    const [value, setValue] = useState('');
    

    const chapters = []

    for(let i=0;i<=99;i++){
        chapters.push(i)
    }
  

    return(
        <Fragment>

            <form onSubmit={handleSubmit(submitData)} className="relative flex flex-col gap-y-6 justify-center items-center p-6 h-screen">
                <Link to="/">
                    <IoChevronBackSharp size={30} className="absolute left-0 top-5 hover:cursor-pointer"/>            
                </Link>
                
                <select
                    className="h-12 rounded-lg text-center font-bold text-2xl"
                    {...register("Titulo")}
                    >
                    <option value="" disabled selected hidden>
                    Título
                    </option>
                        {ADFbooks.map((book:Novel)=>{return(
                            <option value={`${book.titulo}`}>
                                    {book.titulo}
                            </option>)
                        })}
                </select>
                
                {/* <input 
                    {...register("Capitulo")} 
                    id="chapters" 
                    list="chapters" 
                    placeholder="Capítulo" 
                    className="h-12 rounded-lg text-center font-bold text-xl"
                /> */}
                
                    <select id="chapters" {...register("Capitulo")} className="h-12 rounded-lg text-center font-bold text-xl overflow-hidden" >
                        {chapters.map((ch) => (
                            <option key={ch} value={`Capítulo ${ch}`} >
                            {` Capitulo ${ch === 0? "Prologo":`${ch}`}`}
                            </option>
                        ))}

                    </select>

               
               
               
                   



               <input type="date" className="rounded-lg" {...register("Fecha")}/>
              

                <Controller 
                    
                    name="Texto" // Nombre del campo
                    control={control}
                    render={({ field }) => (
                        <ReactQuill
                            {...field} // Propiedades del campo
                            value={value} // Estado actual del editor
                            onChange={(val) => {
                                setValue(val); // Actualiza el estado del editor
                                field.onChange(val); // También actualiza el valor en react-hook-form
                            }}
                            placeholder="Pega tu contenido aquí..."
                            className="bg-white border border-gray-300 rounded-md overflow-hidden w-5/6 h-screen"
                            
                        />
                    )}
                />
            

                {/* <textarea 
                
                className="font-times text-lg w-full h-[500px] rounded-md p-5" {...register("Texto")}/> */}

                <input type="submit" className="hover:bg-red-700 w-72 h-12 rounded-lg border-4"/>

            </form>


        </Fragment>
    )
}
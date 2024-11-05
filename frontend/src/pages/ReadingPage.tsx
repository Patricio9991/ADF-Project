import { Fragment } from "react/jsx-runtime";
import { ADFbooks } from "../books/booksInfo";
import {useLocation } from "react-router-dom";


import RenderChapter from "../components/RenderChapter";
import { useState } from "react";

export interface Chapter {
  capitulo:string,
  createdAt: string,
  fecha?: number,
  texto:string,
  titulo:string,
  updatedAt?:string  
}


export default function ReadingPage(){
  const location = useLocation(); // Accedemos a la ubicación aquí
  const titleFromURL = decodeURIComponent(location.pathname.split('/read/')[1])
  const dataToRead = ADFbooks.filter((novel)=>{return novel.titulo === titleFromURL})


  const [readFlag,setReadFlag] = useState(true)



  return(
      <Fragment>
        <div className= "flex flex-col items-center">

          {readFlag? 
            (<div onClick={()=>{setReadFlag(false)}}>
              leer
            </div>):
                  (
                  <div className='flex flex-row justify-evenly '>
                      <RenderChapter data={dataToRead}/>
                  </div>
                  
                  )}



        </div>
      </Fragment>
  )
}
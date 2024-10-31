import { Fragment } from "react/jsx-runtime";
import { ADFbooks } from "../books/booksInfo";
import { useLocation } from "react-router-dom";
import { findChaptes } from "../library/dataFunctions";

interface Chapter {
  capitulo:string,
  createdAt: string,
  fecha?: number,
  texto:string,
  titulo:string,
  updatedAt?:string  
}


export default function ReadingPage(){

    const pepe:Chapter[] = []
    
    console.log(ADFbooks)

    const location = useLocation(); // Accedemos a la ubicación aquí
    
    
    const titleFromURL = decodeURIComponent(location.pathname.split('/read/')[1])
    
    const dataToRead = ADFbooks.filter((novel)=>{return novel.titulo === titleFromURL})
    
    
    findChaptes(dataToRead).then(res=>pepe.push(res?.data))

    console.log(pepe)


    return(
        <Fragment>

        </Fragment>
    )
}
import { Fragment } from "react/jsx-runtime";


import BookCard from "../components/BookCard";
import {ADFbooks} from '../books/booksInfo.ts'



export default function Books(){

   


 return(
    <Fragment>
        <div className="sm:flex sm:flex-col md:flex md:flex-row pt-10 sm:items-center">
            {ADFbooks.slice(0,2).map((ADFbook)=>{
                    return(<BookCard
                            key={ADFbook.titulo}
                            title={ADFbook.titulo} 
                            imgSRC={ADFbook.cover|| ""}  
                            sinopsis={ADFbook.sinopsis || ""}/>)}
            )}
        </div>
    </Fragment>
 )
}
import { Fragment } from "react/jsx-runtime";


import BookCard from "../components/BookCard";
import {ADFbooks} from '../books/booksInfo.ts'



export default function Books(){

   


 return(
    <Fragment>
        <div className="flex flex-row pt-10">
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
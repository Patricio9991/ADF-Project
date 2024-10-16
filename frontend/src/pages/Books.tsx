import { Fragment } from "react/jsx-runtime";


import BookCard from "../components/BookCard";
import {ADFbooks} from '../books/books.ts'



export default function Books(){
 return(
    <Fragment>
        <div className="flex flex-row pt-10">
            <BookCard title={ADFbooks[0].titulo} imgSRC={ADFbooks[0].cover} />
            <BookCard title={ADFbooks[1].titulo} imgSRC={ADFbooks[1].cover} />
        </div>
    </Fragment>
 )
}
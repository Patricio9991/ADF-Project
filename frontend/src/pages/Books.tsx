import { Fragment } from "react/jsx-runtime";
import Lush from '../assets/ZODIACTALE RGB.jpg'
import Ensueño from '../assets/Portada ET completa sola.jpg'
import BookCard from "../components/BookCard";



export default function Books(){
 return(
    <Fragment>
        <div className="flex flex-row pt-10">
            <BookCard title="Ensueño del Tartaro" imgSRC={Ensueño} />
            <BookCard title="Zodiactale" imgSRC={Lush} />
        </div>
    </Fragment>
 )
}
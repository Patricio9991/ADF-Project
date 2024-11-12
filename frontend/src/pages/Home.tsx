import { Fragment } from "react/jsx-runtime";
// import { useState } from "react";
import Books from "./Books";
import NavBar from "../components/NavBar";
import News from "./News";
// import Fantasy from '../assets/fantasy.png'
// import Cat from '../assets/sleepingCat.gif'








export default function Home(){

    


    return(
        <Fragment >
            

            <NavBar/>
            <div className="sm:flex sm:flex-col md:flex-row justify-evenly ">
                <Books/>
                <News/>
            </div>
           
        </Fragment>
    )
}
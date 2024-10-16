import { Fragment } from "react/jsx-runtime";
// import { useState } from "react";
import Books from "./Books";
import NavBar from "../components/NavBar";
import News from "./News";
// import Fantasy from '../assets/fantasy.png'
// import Cat from '../assets/sleepingCat.gif'
import unicorn from '../assets/uicorn.webp'






export default function Home(){



    return(
        <Fragment>
            

            <NavBar/>
            <div className="flex flex-row justify-start ">
                <Books/>
                <News/>

                <div className="justify-self-end self-end absolute bottom-2 right-40">
                    <img src={unicorn} className="h-[200px]"></img>
                </div>
            </div>
           
        </Fragment>
    )
}
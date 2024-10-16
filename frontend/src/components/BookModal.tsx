// import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
 

interface modalProp{
    close:()=>void,
    title:string,
    imgSRC: string
}

export default function BookModal({close,title,imgSRC}:modalProp){



    return(
        <Fragment>
                 <div className=" fixed inset-0 bg-black  z-30"
                        // Cierra el modal cuando se hace clic fuera
                    onClick={close}></div>

            <div className="fixed inset-0 flex items-center justify-center z-50  rounded-lg opacity-80 m-auto  bg-white w-[1400px]">
                <div  className="flex flex-col
                rounded-lg bg-white p-6 shadow-lg relative w-full max-w-[1200px] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]">
                    <h2 className="mb-6 text-3xl self-center">{title}</h2>
                    <img src={imgSRC} className="w-[300px]"/>
   
                </div>
            </div>
        </Fragment>
    )
}
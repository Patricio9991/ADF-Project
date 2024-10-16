import { Fragment } from "react/jsx-runtime";
import { FaBookReader } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaFileDownload } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import BookModal from "./BookModal";
import { useState } from "react";

interface bookInfo{
    title:string,
    imgSRC: string
}


export default function BookCard({title,imgSRC}:bookInfo){

    const [modalFlag,setModalFlag] = useState(false)

    console.log(modalFlag)
    return(
        <Fragment>
            <div className="w-[300px] p-6 hover:w-[310px] cursor-pointer">
                <h2 className="text-2xl font-semi-bold text-center pb-2
                relative inline-block text-black  before:absolute before:left-0 before:bottom-0 before:w-0 before:h-1.5 before:bg-purple-500 before:transition-all before:duration-500 hover:before:w-full">{title}</h2>
                <div className="bg-sky-500 shadow-lg" onClick={()=>setModalFlag(true)}>
                    <img src={imgSRC} alt={title}/>
                </div>
                <div className="flex flex-row gap-3 pt-2 ">

                    <FaBookReader size={30} className="hover:text-sky-600"/>

                    <CiStar  size={30} className="hover:text-yellow-400"/>
                    <FaCartShopping size={30} className=" hover:text-white"/>
                    
                    <FaFileDownload size={30} className="ml-auto hover:text-emerald-400"/>
                    
                    {modalFlag ? <div ><BookModal title={title} imgSRC={imgSRC} close={()=>setModalFlag(false)}/></div>: ""}
                </div>



            

        </div>
        </Fragment>
    )
}
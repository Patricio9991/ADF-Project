import { Fragment } from "react/jsx-runtime";
import { MdNewReleases } from "react-icons/md";
import { LuFilePlus } from "react-icons/lu";
import { TfiWrite } from "react-icons/tfi";
import { MdDeleteForever } from "react-icons/md";
import cookie from 'js-cookie'
import { Link } from "react-router-dom";
import { Novel } from "../books/booksInfo";






export default function NovelPill({titulo}:Novel){

    const dataUser = cookie.get() 
    const author = "Patricio Pucheta"



    return(
        <Fragment>
            <Link to={`read/${titulo}`}>
                <span className="flex flex-row items-center justify-between text-xl border-t border-b border-gray-500 p-6 hover:bg-purple-400 cursor-pointer">
                        {titulo} 
                    

                    <div className="flex flex-row gap-10">
                        {dataUser.username === author? 
                        (
                            <Fragment>
                                <LuFilePlus />
                                <TfiWrite />
                                <MdDeleteForever />

                                <span className="hover:hidden">
                                    <MdNewReleases size={30} color="red"/>
                                </span>
                                
                            </Fragment>
    
                        
                        ):(<MdNewReleases className="hover:hidden" size={30} color="red"/>)}
                        

                        

                    </div>
                </span>
            </Link>
        </Fragment>
    )
}
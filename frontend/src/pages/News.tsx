import { Fragment } from "react/jsx-runtime"
import NovelPill from "../components/NovelPill"

import {ADFbooks,Novel} from "../books/booksInfo.ts"








export default function News(){

    
    const novels = ADFbooks.filter((item)=>{return !item.finalizado})

    console.log(novels)
    return(
        <Fragment>
            <div className="bg-white md:w-[700px] h-[400px] rounded-lg  mt-5 overflow-auto sm:w-fit ">
                <h2 className="text-center font-semibold text-xl pb-6 items-center">Novedades</h2>
                
                {novels.map((item:Novel)=> <NovelPill titulo={item.titulo}/>)}
            </div>

        </Fragment>
    )
}
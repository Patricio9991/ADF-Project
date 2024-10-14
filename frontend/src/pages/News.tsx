import { Fragment } from "react/jsx-runtime"
import NovelPill from "../components/NovelPill"









export default function News(){

    const textos = ["Carolina Moon","Cuando Aster descubrió el Abismo","La necropolis del Hongo", "Bajo las Estrellas"]

    return(
        <Fragment>
            <div className="bg-white w-[700px] h-[400px] rounded-lg  mt-5 absolute right-10 overflow-auto">
                <h2 className="text-center font-semibold text-xl pb-6 items-center">Novedades</h2>
                
                {textos.map((item)=> <NovelPill noveltitle={item}/>)}
            </div>

        </Fragment>
    )
}
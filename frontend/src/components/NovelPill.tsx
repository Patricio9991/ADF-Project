import { Fragment } from "react/jsx-runtime";
import { MdNewReleases } from "react-icons/md";


interface novel{
    noveltitle:string
}


export default function NovelPill({noveltitle}:novel){
    return(
        <Fragment>
            <span className="flex flex-row items-center justify-between text-xl border-t border-b border-gray-500 p-6 hover:bg-purple-400 cursor-pointer">{noveltitle} 
                <MdNewReleases size={30} color="red"/></span>
        </Fragment>
    )
}
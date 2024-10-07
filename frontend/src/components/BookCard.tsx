import { Fragment } from "react/jsx-runtime";


interface bookInfo{
    title:string,
    imgSRC: string
}


export default function BookCard({title,imgSRC}:bookInfo){
    return(
        <Fragment>
            <div className="w-[300px] p-6 hover:w-[310px]">
                <h2 className="text-2xl font-light text-center pb-2">{title}</h2>
                <div className="bg-sky-500 shadow-lg">
                    <img src={imgSRC} alt={title}/>
                </div>
        </div>
        </Fragment>
    )
}
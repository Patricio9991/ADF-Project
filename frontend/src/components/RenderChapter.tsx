import parse from "html-react-parser";
import { Fragment } from "react/jsx-runtime";
import { Chapter } from "../pages/ReadingPage";
import { Novel } from "../books/booksInfo";
import { useEffect, useState } from "react";
import { findChapters } from "../library/dataFunctions";
import 'react-quill/dist/quill.snow.css'


interface RenderChapterProps{
    data:Novel[]
}






export default function RenderChapter({data}:RenderChapterProps){

    console.log(data)


    const [pepe,setPepe] = useState<Chapter[]>([])
    const [indexChapter,setIndexChapter] = useState(0)

    console.log(data[0].titulo)
  
  
   
    useEffect(()=>{
  
      const loadChapters = async()=>{await findChapters(data[0]).then(res=>setPepe(res?.data))} 
  
      loadChapters()
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  
    console.log(pepe)

  

    return(
        <Fragment>
            <ul className="w-[500px] pl-5 mt-14 font-bold hover:cursor-pointer" >
            {pepe?.map((item)=>(
                <li onClick={()=>{setIndexChapter(pepe.indexOf(item))}}> 
                    {item.capitulo}
                </li>))}
                
            </ul>
       

          <div className="text-black bg-white rounded-lg  max-h-screen  overflow-auto">
            <h2 className="font-bold text-4xl justify-self-center pb-4 pt-4">{pepe[0]?.titulo}</h2>
              {pepe[0]? (
                <div className="prose">
                  {parse(pepe[indexChapter].texto)}
                </div>): ""

              }
          </div>
        </Fragment>
    )


}
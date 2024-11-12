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


    const [chapter,setChapter] = useState<Chapter[]>([])
    const [indexChapter,setIndexChapter] = useState(0)

    console.log(data[0].titulo)
  
  
   
    useEffect(()=>{
  
      const loadChapters = async()=>{await findChapters(data[0]).then(res=>setChapter(res?.data))} 
  
      loadChapters()
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  
    console.log(chapter)

  

    return(
        <Fragment>
            <ul className="mt-14 font-bold hover:cursor-pointer sm:hidden md:block" >
            {chapter?.map((item)=>(
                <li onClick={()=>{setIndexChapter(chapter.indexOf(item))}} className="p-5 w-32"> 
                    {item.capitulo}
                </li>))}
                
            </ul>
       

          <div className="text-black bg-white rounded-lg felx max-h-screen overflow-auto ">
            <h2 className="font-bold text-4xl justify-self-center">{chapter[0]?.titulo}</h2>
              {chapter[0]? (
                <div className="prose">
                  {parse(chapter[indexChapter].texto)}
                </div>): ""

              }
          </div>
        </Fragment>
    )


}
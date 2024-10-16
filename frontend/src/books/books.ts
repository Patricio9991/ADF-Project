import * as covers  from '../assets/covers.ts'

interface Novel {
    cover:string,
    titulo:string,
    release:number,
    fisico?:boolean,
    digital?:boolean,
    finalizado?: boolean 

}


export const ADFbooks: Novel[] = [
    {
        cover: covers.Ensueño,
        titulo:"Ensueño del Tártaro",
        release: 2021,
        digital:true,
        fisico:true,
        finalizado:true
    },
    {
        cover: covers.Zodiactale,
        titulo:"Zodiactale",
        release: 2023,
        digital:true,
        fisico:false,
        finalizado:true
    }
]



import * as covers  from '../assets/covers.ts'
import * as sinopsis from './sinopsis.ts'

interface Novel {
    cover?:string | "" ,
    titulo:string,
    sinopsis?:string,
    release?:number,
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
        sinopsis:sinopsis.sinopsisZodiactale,
        release: 2022,
        digital:true,
        fisico:false,
        finalizado:true
    },
    {
        
        titulo:"Carolina Moon",
        digital:true,
        fisico:false,
        finalizado:false
    },
    {
        
        titulo:"La necropolis del Hongo",
        digital:true,
        fisico:false,
        finalizado:true
    },
    {
        
        titulo:"Bajo las Estrellas",
        digital:true,
        fisico:false,
        finalizado:false
    },
    {
        
        titulo:"Cuando Aster descubrió el Abismo",
        digital:true,
        fisico:false,
        finalizado:false
    }

]



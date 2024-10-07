import { Router } from "express";

import writingSchema from "../schemas/writing.schema.js";


const router = Router()


router.post('/newWriting',async (req,res)=>{
    
    try {
        const {Titulo,Fecha,Texto} = req.body
    
        const newWriting = new writingSchema({
            titulo: Titulo,
            fecha: Fecha,
            texto: Texto
        })
    
        console.log(newWriting)
        await newWriting.save()
        res.sendStatus(200).json({message:"Writing saved"})
    } catch (error) {
        console.log(error)
    }
})


export default router
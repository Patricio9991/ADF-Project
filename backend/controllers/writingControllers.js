import writingSchema from "../schemas/writing.schema.js";




export const updateStory = async (req,res)=>{
    
    try {
        const {Titulo,Capitulo,Fecha,Texto} = req.body
        console.log(Capitulo)
        const novelTarget = await writingSchema.find({titulo: Titulo})
         
        const updateChapterFilter = novelTarget.filter((item)=>{return item.capitulo === Capitulo})
       
        if(updateChapterFilter){
            await writingSchema.findOneAndUpdate({titulo: Titulo, capitulo:Capitulo},{texto: Texto},{new:true})
            
            res.json({message:"Writing updated"})

        }else{

            const newWriting = new writingSchema({
                titulo: Titulo,
                capitulo: Capitulo,
                fecha: Fecha,
                texto: Texto,
            })
        
            
            await newWriting.save()
            res.json({message:"New writing saved"})
        }

    } catch (error) {
        console.log(error)
    }
}



export const getChapters = async(req,res)=>{
    const requestedNovelTitle = req.body.titulo
    console.log(requestedNovelTitle)
    
    const targetNovelData = await writingSchema.find({titulo: requestedNovelTitle})
    res.json(targetNovelData)
}
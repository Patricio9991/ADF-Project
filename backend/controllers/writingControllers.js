import writingSchema from "../schemas/writing.schema.js";




export const updateStory = async (req,res)=>{
    
    try {
        const {Titulo,Capitulo,Fecha,Texto} = req.body
        console.log(Capitulo)
        const novelTarget = await writingSchema.findOne({titulo: Titulo})
         
       console.log(novelTarget)
       
        if(novelTarget && novelTarget.capitulo === Capitulo){
            const update = await writingSchema.findOneAndUpdate({titulo: Titulo, capitulo:Capitulo},{texto: Texto},{new:true})
            await update.save()
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
    const requestedNovelTitle = req.body[0].titulo

    const targetNovelData = await writingSchema.find({titulo: requestedNovelTitle})

    res.json(targetNovelData)
}
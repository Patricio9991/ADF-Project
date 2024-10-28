import writingSchema from "../schemas/writing.schema.js";




export const updateStory = async (req,res)=>{
    
    try {
        const {Titulo,Capitulo,Fecha,Texto} = req.body
        
        const capituloTarget = await writingSchema.findOne({capitulo: Capitulo})
        if(capituloTarget){
            const update = await writingSchema.findOneAndUpdate({titulo: Titulo},{texto: Texto},{new:true})
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
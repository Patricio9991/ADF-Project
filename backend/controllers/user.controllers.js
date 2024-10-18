import userSchema from "../schemas/user.schema.js"
import bcrypt from 'bcrypt'





export const registerNewUser = async (req,res)=>{
    try {
        const {username,phoneNumber,email,password} = req.body
        
        

        const newReader = new userSchema({
            username,
            phoneNumber,
            email,
            password
        })

        console.log(newReader)

        await newReader.save()

        res.send({message:`Bienvenido a la fantasia, ${username}!`})

    } catch (error) {
        console.log(error)
    }
}




const accesWith = async (field,data,req,res) =>{

    const queryTarget = {}
    queryTarget[field] = data
    
    try {
        
        const targetData = await userSchema.findOne(queryTarget)
        if(!targetData) throw new Error("Usuario no encontrado")

        const matchPassword = await bcrypt.compare(req.body.password,targetData.password)
        if(!matchPassword) throw new Error("Contraseña equivocada")


        return { success: true, data: targetData };

    } catch (error) {
        return { success: false, message: error.message };
    }


}


export const loginUserData = async (req,res)=>{
    const {inData} = req.body
 //veri si es telfono o usuario para realizar la busqueda 

    try {
        
        const result = await accesWith("username",inData,req,res)
    
        console.log(result)

        if(!result.success) return res.status(400).json({message:result.message})

        return res.status(200).json({userFound: result.data})

    } catch (error) {
        console.log(error)
    }
       
      
}
       
    

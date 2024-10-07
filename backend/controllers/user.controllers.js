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


export const loginUserData = async (req,res)=>{
    const {inData,password} = req.body

    if(isNaN(inData)){
        console.log("Esta ingresando con el nombre de usuario")
    }else{
        console.log("Esta ingresando con el numero de telefono")
    }
}
import userSchema from "../schemas/user.schema.js"



const finder = async (field,data,schema)=>{
    const query = {}
    query[field] = data

    const dataToFind = await schema.findOne(query)
    if (dataToFind) return field
    else console.log("no hay repetido")
}

export const findDuplicate = async (req, res, next) => {
    const { username, phoneNumber, email} = req.body;
  
    const usernameDuplicated = await finder("username",username,userSchema)
    const phoneDuplicated = await finder("phoneNumber",phoneNumber,userSchema)
    const emailDuplicated = await finder("email",email,userSchema)

    let duplicatedField = usernameDuplicated || phoneDuplicated || emailDuplicated


    if (duplicatedField) {
        if (duplicatedField === "phoneNumber") duplicatedField = "numero de telefono"
        return res.status(400).json({ message: `Ese ${duplicatedField} ya esta en uso`});
    }


    next();
};
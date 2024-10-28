import mongoose, { Schema } from 'mongoose'


const writingSchema = new mongoose.Schema({
    titulo:{
        type:String,
        default:"Untitled"
    },
    capitulo:{
        type:String,
        default:"Untitled Chapter"
    },
    fecha:{
        type:Date,
        default:Date.now()
    },
    texto:{
        type:String,
        default:"No text"
    }
},{timestamps:true})


export default mongoose.model("Writing",writingSchema)
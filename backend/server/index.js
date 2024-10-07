import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { connectDB } from './DB.js'
import writingRoutes from '../routes/writing.routes.js'
import userRoutes from '../routes/user.routes.js'


const server = express()

const PORT = 3000

connectDB()
server.use(cors())
server.use(express.json())
server.use(morgan('dev'))

server.use("/api",writingRoutes)
server.use("/api",userRoutes)


server.listen(PORT,()=>{
    console.log(`Escuchando el puerto ${PORT}`)
})
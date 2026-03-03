import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true,limit:"20kb"}))
app.use(express.static("public"))
app.use(cookieParser())
// Request → CORS → Body Parser → Cookie Parser → Route → Response (flow of data through the middlewares)
app.get("/",(req,res)=>{
    res.send("server is working")
})

//routes

import userRouter from './routes/user.routes.js'

//routes declaration

app.use("/api/v1/users",userRouter)

export { app } 
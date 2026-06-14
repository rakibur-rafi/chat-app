import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import { clerkMiddleware } from '@clerk/express'
import cors from 'cors'

dotenv.config()
const app= express()

const PORT= process.env.PORT || 5000
const FRONTEND_URL= process.env.FRONTEND_URL

app.use(express.json());
app.use(cors({origin: FRONTEND_URL, credentials: true}));
app.use(clerkMiddleware())

app.get("/health", (req,res)=>{
    res.status(200).json({message: "server is running"});
})
 
app.listen(PORT,()=>{
    connectDB();
    console.log("server is running on port",PORT);
});
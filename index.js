import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import ConnectDB from './Database/config.js';
import router from "./Routes/loginroute.js";

const app= express();

dotenv.config();
app.use(express.json());
app.use(cors());

//DB Connection
ConnectDB()

//Routes
app.use("/api",router);



app.get('/',(req,res)=>{
    res.status(200).send("api connection done");
})

// PORT Access
app.listen(process.env.PORT,()=>{
    console.log("app running sucessfully");
})

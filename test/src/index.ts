import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import DB from './DB/db'
import morgan from 'morgan'
import Main_router from './Routes/main.route';
import { limiter , Logger } from './middleware/middleware';
import cors from 'cors'
import fs from 'fs';
import path from 'path';
const app = express();
const PORT:string | number | undefined = process.env.PORT;
let accessLogStream = fs.createWriteStream(path.join(__dirname, './middleware/log/mylog.log'), { flags: 'a' });

DB;

// middle ware
app.use(express.urlencoded({ extended : true}));
app.use(express.json())
app.use(cors({
    "origin":'*',
    "methods": ['GET','POST','PUT','DELETE']
}));
// app.use(limiter)

// if you want logger
// app.use(morgan('tiny' ,{ stream: accessLogStream }))

// use Router
app.use("/",Main_router)

//listen port
app.listen(PORT, ()=>{
    console.log(`🚀 listining on port ${PORT}`)
})

export default app;
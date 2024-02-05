//this is mongoose setting connect to MongoDB database
import mongoose from "mongoose";
const Datadase_URI: string | undefined = process.env.DATABASE_URI;
const DB_Name : string | undefined = process.env.DATABASE_NAME
const uri = Datadase_URI ? Datadase_URI : "mongodb://localhost:27017";

mongoose.set('strictQuery', true)
mongoose.connect(uri , {dbName: DB_Name},)
    .then(()=>{
        console.log("🟢 Connected to database  ")
        }
    ).catch(()=>{
        console.log("🔴 Not connect to database  ")
    }
)

export default mongoose ;
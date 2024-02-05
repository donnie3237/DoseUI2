//make schema model
import mongoose from "mongoose";
import { user } from "../types/type";

const model = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        age:{
            type: Number,
            required: true
        }
    }, 
    {   
        collection: 'model',
    }
)

const Model: mongoose.Model<user> = mongoose.model("model", model)
export default Model;
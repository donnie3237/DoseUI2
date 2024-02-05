//This file to make Controller process
import Model from "../model/main.model";
import {Request ,Response} from "express";

export async function get(req:Request,res:Response){
    res.send('welcome to expressTS')
}

export async function create(req:Request,res:Response){
    const {name , age} = req.body;
    const result = await Model.create({
        name:name,
        age:age
    })
    res.send(result)
};
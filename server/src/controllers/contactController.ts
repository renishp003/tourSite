import { Request, Response } from "express";
import { Contact } from "../interfaces/contactInterface";
import ContactModel from "../models/contactModel";

export const contact={
    add:async(req:Request,res:Response)=>{
        try {
            let {name,subject,message,mobile,email}:Contact=req.body
            if(!(name&&subject&&message&&mobile&&email)){
                return res.status(400).json({isSuccess:false,message:"All fields are required"})
            }
            let contactUser =await new ContactModel({
                name,
                subject,
                message,
                mobile,
                email
            })
            await contactUser.save()
            return res.status(400).json({isSuceess:true,message:"Your Details Submitted SuccessFully",data:contactUser})
            
            
        } catch (error) {
            return res.status(400).json({isSuccess:false,message:"Something Went Wrong"})
        }
    }

}
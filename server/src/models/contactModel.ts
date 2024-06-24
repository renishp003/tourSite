import mongoose from "mongoose";
import { Contact } from "../interfaces/contactInterface";


const contactSchemaa = new mongoose.Schema<Contact>({
    name:{
        type:String,
        required:true,
        trim:true
    },
    subject:{
        type:String,
        required:true,
        trim:true
    },
    mobile:{
        type:Number,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    message:{
        type:String,
        required:true,
        trim:true
    },
    
},{timestamps:true})

const ContactModel =  mongoose.model("contacts",contactSchemaa)
export default ContactModel
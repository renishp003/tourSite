import mongoose from "mongoose";
import { AgencyInterface } from "../interfaces/agencyInterface";
import { Roles } from "../enums/rolls";

const agencySchema =new mongoose.Schema<AgencyInterface>({
    agencyName:{
        type:String,
        trim:true,

    },
    description:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
    password:{
        type:String,
        trim:true
    },
    address:{
        type:String,
        trim:true
    },
    phone:{
        type:Number,
        trim:true
    },
    owner_name:{
        type:String,
        trim:true
    },
    owner_phone:{
        type:Number,
        trim:true
    },
    logo:{
        type:String,
        trim:true,
        required:true
    },
    contact_personName:{
        type:String,
        trim:true
    },
    contact_personPhone:{
        type:Number,
        trim:true
    },
    role:{
        type:String,
        enum: Object.values(Roles),
        default: Roles.AGENCY
    },
    approved:{
        type:Boolean,
        required:true,
        default:false
    }



},{timestamps:true})

const AgencyModel = mongoose.model<AgencyInterface>('agencies',agencySchema)
export default AgencyModel
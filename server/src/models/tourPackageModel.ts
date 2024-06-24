import mongoose from "mongoose";
import { TourPackage } from "../interfaces/packageInterface";

const tourPackageSchema = new mongoose.Schema<TourPackage>({
    agencyId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'agencies',
        required:true
    },
    image:{
        type:String,
        trim:true,
        required:true
    },
    tourName:{
        type:String,
        trim:true,
        required:true
    },
    country:{
        type:String,
        trim:true,
        required:true
    },
    state:{
        type:String,
        trim:true,
        required:true
    },
    cities:{
        type:String,
        trim:true,
        required:true
    },
    totalDays:{
        type:Number,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        trim:true,
        required:true
    },
    availability:{
        type:Boolean,
        trim:true,
        default:true
    },
    description:{
        type:String,
        trim:true,
        required:true
    }
})

const TourPackageModel = mongoose.model('tourpackages',tourPackageSchema)
export default TourPackageModel
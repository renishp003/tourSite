import mongoose from "mongoose";
import { BookingInterface } from "../interfaces/bookingInterface";
import { Status } from "../enums/status";

const BookingSchema = new mongoose.Schema<BookingInterface>({
   tourPackageId:{
    type: mongoose.Schema.Types.ObjectId, 
        ref: 'tourpackages',
        required:true
   },
//    agencyId:{
//     type: mongoose.Schema.Types.ObjectId, 
//         ref: 'agencies',
//         required:true
//    },
   userId:{
    type: mongoose.Schema.Types.ObjectId, 
        ref: 'users',
        required:true
   },
   startDate:{
    type:Date,
    require:true
   },
   endDate:{
    type:Date,
    required:true
   },
   status:{
    type:String,
    enum:Object.values(Status),
    default:Status.PENDING
   },
   totalPerson:{
    type:Number,
    trim:true,
    required:true
   }


},{
    timestamps:true
})

const BookingModel =  mongoose.model("bookings",BookingSchema)
export default BookingModel
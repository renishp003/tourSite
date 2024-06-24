import mongoose from "mongoose";

const touristDetailsSchema = new mongoose.Schema({
    bookingId:{
        type:mongoose.Schema.ObjectId,
        ref:'bookings'
    },
    
    name:{
        type:String,
        require:true,
        trim:true
    },
    age:{
        type:Number,
        require:true,
        trim:true
    },
    mobile:{
        type:Number,
        require:true,
        trim:true
    },
    address:{
        type:String,
        require:true,
        trim:true
    },
    adharPhoto:{
        type:String,
        require:true,
        trim:true
    },
    touristPhoto:{
        type:String,
        trim:true,
        require:true
    }
})

const TouristDetailsModel = mongoose.model('touristDetails',touristDetailsSchema)
export default TouristDetailsModel
import { ObjectId } from "mongoose";

export interface TouristDetails{
    // tourPackageId:ObjectId,
    bookingId:ObjectId
    name:string,
    age:number,
    mobile:number,
    adharPhoto:any,
    touristPhoto:any,
    address:string,
}
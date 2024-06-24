import { ObjectId } from "mongoose";
import { Status } from "../enums/status";

export interface BookingInterface{ 
    tourPackageId:ObjectId
    // agencyId:ObjectId
    userId:ObjectId
    totalPerson:number
    status:Status
    startDate:Date,
    endDate:Date,

}
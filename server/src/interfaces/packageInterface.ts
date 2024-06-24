import { ObjectId } from "mongoose";

export interface TourPackage{
    agencyId:ObjectId,
    availability:boolean,
    image:string,
    description:string,
    country:string,
    state:string,
    cities:string,
    tourName:string,
    totalDays:number,
    price:number,
}
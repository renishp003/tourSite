import { ObjectId } from "mongoose";
import { TourPackagesType } from "../enums/packageTypes";

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
    type:TourPackagesType
}
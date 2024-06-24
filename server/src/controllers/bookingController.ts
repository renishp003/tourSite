import { Request, Response } from "express";
import { BookingInterface } from "../interfaces/bookingInterface";
import BookingModel from "../models/BookingsModel";

export const bookings={
    bookTour:async (req:Request,res:Response)=>{
      try {
        
        let {endDate,startDate,totalPerson,tourPackageId,userId}:BookingInterface=req.body
        if(!(endDate&&startDate&&totalPerson&&tourPackageId&&userId)){
            return res.status(400).json({isSuccess:false,message:"All Fields are Required"})
        }
        const bookingDetails = await new BookingModel({
            // agencyId,
            tourPackageId,
            userId,
            startDate,
            endDate,
            
            totalPerson
        })
        await bookingDetails.save()
  
        return res.status(400).json({isSuccess:true,message:"You Booking Request goes to Agency For Approvel",data:bookingDetails})
        

      } catch (error) {
        return res.status(400).json({isSuccess:false,message:"Something Went Wrong"})
      }
    }
}
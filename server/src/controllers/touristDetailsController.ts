import { Response, Request, NextFunction } from "express";
import { TouristDetails } from "../interfaces/touristInterface";
import TouristDetailsModel from "../models/touristDetailsModel";
import multer from "multer";
import crypto from 'crypto'
import path from "path";
import BookingModel from "../models/BookingsModel";
import TourPackageModel from "../models/tourPackageModel";


const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      if (file.fieldname === "adharPhoto") {
         cb(null, 'C:/TourSite/client/src/assets/images')
      }
      else if (file.fieldname === "touristPhoto") {
         cb(null, 'C:/TourSite/client/src/assets/images');
      }

   }
});

export const upload = multer({ storage: storage }).fields(
   [
      {
         name: 'adharPhoto',
         maxCount: 1
      },
      {
         name: 'touristPhoto', maxCount: 1
      }
   ]
);

export const touristDetails = {
   addTourists: async (req: any, res: Response) => {
      try {
         let { name, age, address, bookingId, mobile }: TouristDetails = req.body
          let adharPhoto = req.files['adharPhoto'][0].originalname;
          let touristPhoto = req.files['touristPhoto'][0].originalname;

         if(!(name&&age&&address&&adharPhoto&&bookingId&&mobile&&touristPhoto)){
            return res.status(400).json({isSuccess:false,message:"All fields are Required"})
         }
         const addTourist = await new TouristDetailsModel({
            name,
            age,
            address,
            mobile,
            bookingId,
               adharPhoto,
              touristPhoto,

         })
         await addTourist.save()
         return res.status(200).json({ isSuccess: true, message: "Tourist Added SuccessFully", data: addTourist })

      }
      catch (error) {
         console.log(error)
         return res.status(400).json({ isSuccess: false, message: "Somthing Went Wrong" })
      }
   },
   getAllTourist:async(req:Request,res:Response)=>{
           try {
            
                 const allTourist = await TouristDetailsModel.find({bookingId:"66740d6b24f79a4a1d0c1ba2"})
                 if(!allTourist.length){
         return res.status(400).json({ isSuccess: false, message: "No tourist Found" })
                         
                 }
         return res.status(200).json({ isSuccess: true, message: "Tourist Listed SuccessFully",data:allTourist })

           } catch (error) {
         return res.status(400).json({ isSuccess: false, message: "Somthing Went Wrong" })
            
           }
   },
   getTouristPackageAndAgencyWise:async(req:Request,res:Response)=>{
      try {
         const getTourist=  await TourPackageModel.aggregate([
            {
              $lookup: {
                from: "bookings",
                localField: "_id",
                foreignField: "tourPackageId",
                as: "bookingDetails",
              }
              
            },
            {
               $unwind: {
                 path: '$bookingDetails',
                 preserveNullAndEmptyArrays: true
               }
             },
            {
               $lookup: {
                 from: "touristdetails",
                 localField : "bookingDetails._id",
                 foreignField: "bookingId",
                 as: "touristDetails",
               }
               
             },
            { $addFields:{
               mergedData:{
                  $add:["$price","$totalDays"]
               }
               
             }}
            
            
            
          ]
         )
      
         
         res.send({getTourist})

         // const tourPackage = await TouristDetailsModel.find().populate("bookingId")

         // return res.json(tourPackage)
      } catch (error) {
         console.log(error)
         return res.status(400).json({ isSuccess: false, message: "Somthing Went Wrong" })
         
      }
   }

}
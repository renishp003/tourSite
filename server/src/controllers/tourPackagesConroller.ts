import { Request, Response } from "express"
import { TourPackage } from "../interfaces/packageInterface"
import TourPackageModel from "../models/tourPackageModel"
import { userInfo } from "os"
import { Types } from "mongoose"


export const tourPackages={
    addPackage:async (req:Request,res:Response) => {
        try {
            
            
            let {agencyId,description,country,state,cities,tourName,totalDays,price,type}:TourPackage=req.body

            let image = req.file?.originalname;
            if(!(agencyId&&description&&country&&state&&cities&&tourName&&totalDays&&price&&image&&type)){
                return res.status(400).json({isSuccess:false,message:"All fields are Required"})
            }
            const packages = await new TourPackageModel({
                agencyId,
                description,
                country,
                state,
                cities,
                tourName,
                totalDays,
                price,
                image,
                type
            })
            await packages.save()
            return res.status(200).json({isSuceess:true,message:"Tour package added Successfully!",data:packages})
            
        } catch (error) {
            console.log(error)
            return res.status(400).json({isSuccess:false,message:"Something went Wrong!"})
        }
    },
    getAllPackages:async (req:any,res:Response)=>{
        try {
            console.log(req.user)
            // if(req.user.role == 'admin'||'user'){
            //     const getAllPackages = await TourPackageModel.find({})
            // console.log(getAllPackages)

            const getAllPackages = await TourPackageModel.find({...(req.user.role === "admin" || req.user.role === 'user') && {},...(req.user.role === "agency" && {agencyId:new Types.ObjectId(req.user.id)})})
            if(!getAllPackages.length){
                return res.status(400).json({isSuccess:false,message:"No packages Found"})

            }
            return res.status(200).json({isSuccess:true,message:"Data Fetched SuccessFully",data:getAllPackages})

            // }
            
        } catch (error) {
            console.log(error)
            return res.status(400).json({isSuccess:false,message:"Something went Wrong!"})
            
        }
    },

    availablePackages:async(req:Request,res:Response)=>{
        try {
            const availability = await TourPackageModel.find({availability:true})
            return res.status(200).json({isSuccess:true,message:"All The available Packages Are Listed SuccessFully",data:availability})
            
        } catch (error) {
            console.log(error)
            return res.status(400).json({isSuccess:false,message:"Something went Wrongg"})
            
        }
    }
}
import { Request, Response } from "express"
import AgencyModel from "../models/agencyModel"
import UserModel from "../models/usermodel"
import { confirmationMailToAgency } from "../services/otpMailService"

export const admin = {
    getAllagency: async (req: Request, res: Response) => {
        try {
            const agencies = await AgencyModel.find({}).select('-password')
            res.send(agencies)

        } catch (error) {
            return res.status(400).json({ message: "Something went Wrong" })

        }
    },
    getApprovedAgency: async (req: Request, res: Response) => {
        try {
            const agencies = await AgencyModel.find({ approved: true }).select('-password')
            if (agencies?.length) {
                return res.status(200).json({ isSuccess: true, message: "All Agencies Listed Successfully", data: agencies })
            } else {
                return res.status(400).json({ isSuccess: false, message: "There is no Agency found in The system" })

            }

        } catch (error) {
            return res.status(400).json({ message: "Something went Wrong" })

        }
    },
    getPendingAgencis: async (req: Request, res: Response) => {
        try {

            const agencies = await AgencyModel.find({ approved: false }).select('-password')
            if (agencies?.length) {
                return res.status(200).json({ isSuccess: true, message: "All Agencies Listed Successfully", data: agencies })

            } else {
                return res.status(400).json({ isSuccess: false, message: "There is no Agency found in The system" })

            }

        } catch (error) {
            return res.status(400).json({ message: "Something went Wrong" })

        }
    },
    approvedAgencyRequest:async(req:Request,res:Response)=>{
        try {

             let {_id} = req.params;
            const aproveRequest = await AgencyModel.findByIdAndUpdate(_id,req.body,{new:true})
            if(!aproveRequest){
            return res.status(400).json({ message: "Data not updated!!!" })
                
            }
            confirmationMailToAgency(aproveRequest.email,aproveRequest.agencyName)
            return res.status(200).json({isSuccess:true,
                data:aproveRequest})
            
            
        } catch (error) {
            return res.status(400).json({ message: "Something went Wrong" })
            
        }
    },
    getOneAgency:async(req:Request,res:Response)=>{
       try {
             const agnecy = await AgencyModel.findById(req.params._id)
             if(!agnecy){
                return res.status(400).json({isSuccess:false,message:"No agency Found"})
             }
             return res.status(200).json({isSuccess:true,message:"Agency got SuccessFully",data:agnecy})
       } catch (error) {
        return res.status(400).json({ message: "Something went Wrong" })
        
       }
    },
   getAllUsers:async(req:Request,res:Response)=>{
    try {
        const users = await UserModel.find().select('-password -otp')
        if(!users.length){
              return res.status(400).json({isSuccess:false,message:"No User Found"})
        }
        return res.status(400).json({isSuccess:true,message:"All the users Listed SuccessFully",data:users})
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: "Something went Wrong" })
        
    }
   }

}
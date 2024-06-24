import { Request, Response } from "express"
import { AgencyInterface } from "../interfaces/agencyInterface"
import bcrypt  from 'bcrypt'
import AgencyModel from "../models/agencyModel"
import BookingModel from "../models/BookingsModel"
// import { access } from "fs"
// import { generateRefreshToken, generateToken, verifyAccessToken, verifyRefreshToken } from "../services/"



export const agencies={
    add:async (req:Request,res:Response)=>{
        try {
            let {email,password,agencyName,address,description,contact_personName,contact_personPhone,owner_name,owner_phone,phone}:AgencyInterface = req.body
            let logo = req.file?.originalname

            if(!(logo&&email&&password&&agencyName&&address&&description&&contact_personName&&contact_personPhone&&owner_name&&owner_phone&&phone)){
                return res.status(400).json({isSuccess:false,message:"All feilds are Required"})
            }
            const mail = await AgencyModel.findOne({email})
            if(mail){
                return res.status(400).json({isSuccess:false,message:"User Is already registrated"})
            }
            
            let saltgen =await bcrypt.genSalt(10) 
            let hasedpassword =await bcrypt.hash(password,saltgen)
            const agency = await new AgencyModel({
                logo,email,password:hasedpassword,agencyName,address,description,contact_personName,contact_personPhone,owner_name,owner_phone,phone})
                   await agency.save()
                   res.status(400).json({
                    isSuccess:true,
                    message:"Your Request is Pending to Approve",
                    data:agency
                   })
            
        } catch (error) {
            console.log(error)
            return res.status(400).json({message:"Something went Wrong"})
        }
    },
    approvedBooking:async(req:Request,res:Response)=>{
          try {
            let {_id} = req.params
        
            const approvedBookings = await BookingModel.findByIdAndUpdate(_id,req.body,{new:true})
            console.log(approvedBookings)
            if (!approvedBookings) {
                return res.status(400).json({isSuccess:false,message:"Data not updated"})
            } else {
                return res.status(200).json({isSuccess:true,message:"approved booking successfully",data:approvedBookings})
            }
          } catch (error) {
            return res.status(400).json({message:"Something went Wrong"})
            
          }
        }
    
    // agencylogin:async(req:Request,res:Response)=>{
    //     try {
    //         let {email,password}:AgencyInterface = req.body
    //         if(!(email&&password)){
    //             return res.status(400).json({isSuccess:false,message:"All fields are Required"})
    //         }
        
    //         const agency = await AgencyModel.findOne({email})
    //         if(!agency){
    //             return res.status(400).json({isSuccess:false,message:"Invalid Credentials"})

    //         }
            
    //         const isMatch = await bcrypt.compare(password, agency.password)
    //         if (!isMatch) {
    //             return res.status(400).json({ isSuccess: false, message: "Invalid Credentials" })
    //         }
    //         const accessToken = generateToken(agency)
    //         const refreshToken = generateRefreshToken(agency)
    //         return res.status(400).json({isSuccess:true,message:"Agency Login Successfully",accessToken,refreshToken})


    //     } catch (error) {
    //         return res.status(400).json({message:"SOmething went wrong"})
    //     }
    // },
    // refreshToken: async (req: Request, res: Response) => {
    //     try {

    //         let { token } = req.body
    //         if (!token) {
    //             return res.status(400).json({ message: "Token is not provided!" })
    //         }
    //         const decoded = verifyRefreshToken(token)
    //         const agency = await AgencyModel.findById(decoded.agencyId)

    //         if (!agency) {
    //             return res.status(403).json({ message: 'Invalid refresh token' });
    //         }
    //         const accessToken = generateToken(agency)
    //         const refreshToken = generateRefreshToken(agency)
    //         res.status(200).json({ accessToken: accessToken, refreshToken: refreshToken });

 
    //     } catch (error) {
    //         console.log(error)
    //         return res.status(400).json({ message: "Something went Wrong" })
    //     }
    // },
    
    

}
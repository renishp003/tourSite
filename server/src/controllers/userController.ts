import { Request, Response } from 'express';
import UserModel from '../models/usermodel';
import { generateOtp, getExpiryDate, sendOtp, confirmationMail } from '../services/otpMailService';
import { UserData } from "../interfaces/userInterface";
import bcrypt from 'bcrypt'
import dotenv from 'dotenv';
import { generateRefreshToken, generateToken, verifyToken } from '../services/tokenService';
import { TourPackage } from '../interfaces/packageInterface';
import { AgencyInterface } from '../interfaces/agencyInterface';
import AgencyModel from '../models/agencyModel';

dotenv.config();
const refreshJwtSecretkey = process.env.REFRESHTOKEN_KEY
export const users = {
    add: async (req: Request, res: Response) => {
        try {
            let { email }: UserData = req.body;
            if (!email) {
                return res.status(200).json({ isSuccess: false, message: "Please Enter Your Email!" });
            }

            const user = await UserModel.findOne({ email });
            if (user) {
                console.log(user)
                return res.status(200).json({ isSuccess: false, message: "User is already Registered" });
            }
            const otp = await generateOtp();
            const userData = await new UserModel({
                email,
                otp: { code: otp, expires_at: getExpiryDate() }
            }).save();
            sendOtp(userData.email, otp);
            return res.status(200).json({
                isSuccess: true, message: "Otp Sent To your Email!",
                data: userData
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Something went wrong" });
        }
    },
    reSendOtp: async (req: Request, res: Response) => {
        try {
            let { email, otp }: UserData = req.body
            if (!email) {
                return res.status(400).json({ isSuccess: false, message: "Please Enter Your Email" });
            }
            const user = await UserModel.findOne({ email })
            // console.log(user)
            if (!user) {
                return res.json({ isSuccess: false, message: "User not Found!" })
            }
            const newOtp = generateOtp();
            const expirydate = getExpiryDate()

            user.otp.code = newOtp
            user.otp.expires_at = expirydate
            await user.save()
            await sendOtp(email, newOtp)
            return res.status(200).json({ isSuccess: true, message: "otp resent to your mailId", data: user })


        } catch (error) {
            console.log(error)
            return res.status(400).json({ isSuccess: false, message: "Something went wrong! Please try after Sometime!" })
        }
    },

    verifyotp: async (req: Request, res: Response) => {
        try {
            console.log(req.body);
            
            let { email, otp }: UserData = req.body
            const user = await UserModel.findOne({ email })
            // console.log(user
            console.log(user + "user data");
            
            if (!user) {
                return res.json({ isSuccess: false, message: "User not Found!" })
            }
            if (!(email)) {
                return res.status(400).json({ isSuccess: false, message: "All Fields Are Required" })
            }

            let newOtp:any = user.otp.code
            if (newOtp === otp && new Date() < new Date(user.otp.expires_at)) {
                console.log("responsed sending");
                
                return res.status(200).json({ isSuccess: true, message: "Otp Verify SuccessFully", data: user })
            } else {
                return res.status(400).json({isSuccess: false, message: 'Invalid or expired OTP' });
            }
        }
        catch (error) {
            console.log(error)
            res.send({ isSuccess: false, message: "Something Went Wrong" })
        }

    },
    addDetails:async(req:Request,res:Response)=>{
        try {
            let { email, FirstName, LastName, password, mobile }: UserData = req.body
            const user = await UserModel.findOne({ email })
            // console.log(user
            if (!user) {
                return res.json({ isSuccess: false, message: "User not Found!" })
            }
            if (!(email && FirstName && LastName && password && mobile)) {
                return res.status(400).json({ isSuccess: false, message: "All Fields Are Required" })
            }

           
                let saltgen = await bcrypt.genSalt(10)
                user.password = await bcrypt.hash(password, saltgen)
                user.FirstName = FirstName,
                    user.LastName = LastName,
                    user.mobile = mobile,
                    await user.save()
                confirmationMail(user.email, user.FirstName, user.LastName)

                return res.status(200).json({ isSuccess: true, message: "User Registrated SuccessFully", data: user })
        } catch (error) {
            console.log(error)
        res.send({ isSuccess: false, message: "Something Went Wrong" })
        }
        
    },
    login: async (req: Request, res: Response) => {
        try {

            let { email, password }: UserData = req.body
            
            
            if (!(email && password)) {
                return res.status(400).json({ isSuccess: false, message: "All Fields are Required" })
            }
            const user = await UserModel.findOne({email })
            const agency = await AgencyModel.findOne({email})
            if (!user && !agency) {
                return res.status(400).json({ isSuccess: false, message: "invalid Credentials" })
            }
            const entity = user || agency
            const isMatch = await bcrypt.compare(password, entity!.password)
            if (!isMatch) {
                return res.status(400).json({ isSuccess: false, message: "Invalid Credentials" })
            }

            const accessToken = generateToken({
                id:entity!.id,
                email:entity!.email,
                role:entity?.role
            })
            const refreshToken = generateRefreshToken({
                id:entity!.id,
                email:entity!.email,
                role:entity?.role
            })


            return res.status(200).send({ isSuccess: true, message: "Login Successfully", accessToken, refreshToken })

        } catch (error) {
            console.log(error)
            res.send({ isSuccess: false, message: "Something Went Wrong" })
        }
    },
    refreshToken: async (req: Request, res: Response) => {
        try {

            let { token } = req.body
            if (!token) {
                return res.status(400).json({ message: "Token is not provided!" })
            }
            const decoded = verifyToken(token,refreshJwtSecretkey)
            const accessToken = generateToken({
                id:decoded.id,
                email:decoded.email,
                role:decoded.role
            })
            res.status(200).json({ accessToken: accessToken });


        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: "Something went Wrong" })
        }
    },
    getOneuser:async(req:Request,res:Response)=>{
        try {
            const getOneUser =await UserModel.findById(req.params._id)
            return res.status(200).json({isSuccess:true,message:"User Get SuccessFully",data:getOneUser})
            
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: "Something went Wrong" })
        }
    }

};


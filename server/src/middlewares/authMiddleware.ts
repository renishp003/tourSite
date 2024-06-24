import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../services/tokenService";
import dotenv from 'dotenv'
dotenv.config()
export interface AuthRequest extends Request {
    user?: any;
}
const jwtSecretKey = process.env.TOKEN_KEY
const refreshJwtSecretkey = process.env.REFRESHTOKEN_KEY
export const authMiddleware =(req:AuthRequest,res:Response,next:NextFunction)=>{
    const accessToken = req.header('Authorization')?.split(' ')[1]
    if (!accessToken) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        const decoded = verifyToken(accessToken,jwtSecretKey)
        req.user = decoded
        next()
        return decoded

    } catch (error) {
        const refreshToken = req.header('x-refresh-token');
        if (!refreshToken) {
            return res.status(401).json({ message: 'Token is not valid' });
    }
    try {
        const decoded = verifyToken(refreshToken,refreshJwtSecretkey );
        req.user = decoded; 
        next(); 
    } catch (err) {
        res.status(401).json({ message: 'Refresh token is not valid' });
    }

}
}
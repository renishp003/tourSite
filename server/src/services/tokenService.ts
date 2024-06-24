import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
// import { UserData } from '../interfaces/userInterface'
dotenv.config()
interface JwtPayloadWithUserId extends jwt.JwtPayload {
    userId: string;
    role: string;
}
const jwtSecretKey = process.env.TOKEN_KEY
const refreshJwtSecretkey = process.env.REFRESHTOKEN_KEY

if (!jwtSecretKey) {
    throw new Error('JWT_SECRET is not defined in the environment variables');
}

if (!refreshJwtSecretkey) {
    throw new Error('JWT_SECRET is not defined in the environment variables');
}

export const generateToken=(payload:object):any=>{
    return jwt.sign(payload,jwtSecretKey,{expiresIn:'1h'})
}
export const generateRefreshToken=(payload:object)=>{
    return jwt.sign(payload,refreshJwtSecretkey,{expiresIn:'5d'})
}

export const verifyToken = (token: string,secret:any):any => {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        throw new Error('Invalid Token')
    }
    
};

// export const verifyRefreshToken = (token: string):any => {
//     return jwt.verify(token, refreshJwtSecretkey);
// };
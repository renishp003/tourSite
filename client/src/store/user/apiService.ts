import axios from "axios";
import { AddUserResponse, VerifyOtpResponse } from "./apiResponse";

export const addUser = async (email: string): Promise<AddUserResponse> => {
    const response = await axios.post<AddUserResponse>('http://localhost:3001/api/user/addUser', { email });
    localStorage.setItem('email',email)
    return response.data;
  };
  
  export const verifyOtp = async (email: string, otp: string): Promise<VerifyOtpResponse> => {
    const response = await axios.post<VerifyOtpResponse>('http://localhost:3001/api/user/verifyOtp', { email, otp });
    return response.data;
  };
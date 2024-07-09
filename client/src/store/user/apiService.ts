import axios from "axios";
import {  AddDetailsResponse, AddUserResponse, VerifyOtpResponse } from "./apiResponse";
const BASE_API = 'http://localhost:3001/api/user'
export const addUser = async (email: string): Promise<AddUserResponse> => {
    const response = await axios.post<AddUserResponse>(`${BASE_API}/addUser`,{email});
    // localStorage.setItem('email',email)
    return response.data;
  };
  
  export const verifyOtp = async (email: string, otp: string): Promise<VerifyOtpResponse> => {
    const response = await axios.post<VerifyOtpResponse>(`${BASE_API}/verifyOtp`, { email, otp });
    return response.data;
  };
  export const addDetails = async(details:{email:string,password:string,mobile:number,FirstName:string,LastName:string}):Promise<AddDetailsResponse>=>{
    const res = await axios.post<AddDetailsResponse>(`${BASE_API}/addDetails`,details)
    return res.data
  }
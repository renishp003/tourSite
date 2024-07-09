import axios from "axios";
import {  AddDetailsResponse, AddUserResponse, VerifyOtpResponse } from "./apiResponse";
import Swal from "sweetalert2";
const BASE_API = 'http://localhost:3001/api/user'

export const addUser = async (email: string): Promise<AddUserResponse> => {
    const response = await axios.post<AddUserResponse>(`${BASE_API}/addUser`,{email});
    console.log("myresp",response)
    if (response.data.isSuccess === true) {
      localStorage.setItem('email',response.data.data.email)
      Swal.fire({
        title: "Success!",
        text: response.data.message,
        icon: "success",
        confirmButtonText: "Ok",
        timer:2500
      // });
      });
    }else {
      Swal.fire({
        title: "Oops..",
        text: response.data.message,
        icon: "error",
        confirmButtonText: "ok",
        timer:2500
      });
    }
   
  };
  
  export const verifyOtp = async (email: string, otp: string): Promise<VerifyOtpResponse> => {
    const response = await axios.post<VerifyOtpResponse>(`${BASE_API}/verifyOtp`, { email:localStorage.getItem('email'), otp });
    if (response.data.isSuccess === true) {
      
      Swal.fire({
        title: "Success!",
        text: response.data.message,
        icon: "success",
        confirmButtonText: 'OK'
      })
    } else{
      Swal.fire({
        title:  "Error!",
        text:response.data.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
   
  };
  export const addDetails = async(details:{email:string,password:string,mobile:number,FirstName:string,LastName:string}):Promise<AddDetailsResponse>=>{
    await axios.post<AddDetailsResponse>(`${BASE_API}/addDetails`,details).then((res)=>{
      if(res.data.isSuccess === true){
        Swal.fire({
          title:"Success!",
          text:res.data.message,
          icon:"success",
          confirmButtonText:"Ok"
        })
       
      }else{
        Swal.fire({
          title: 'Error!',
          text: res.data.message,
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    })
   
  }
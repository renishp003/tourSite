import Swal from "sweetalert2";
import { AddDetailsResponse, AddUserResponse, VerifyOtpResponse } from "./apiResponse";
import axios from "axios";
import { userSetState } from "./user.slice";
import { AppDispatch } from "../store";
const BASE_API = 'http://localhost:3001/api/user'

export const addUser = (email: string,navigate:any) => async (dispatch:AppDispatch) => {
    const response = await axios.post<AddUserResponse>(`${BASE_API}/addUser`,{email});
       if (response.data.isSuccess === true) {
      navigate("/otpverify");
      // localStorage.setItem('email',response.data.data.email)
      dispatch(userSetState([{key:"email",value:response.data.data.email}]))
      console.log("hi",response.data.data.email)
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
   
    return response
};


export const verifyOtp = (email: string, otp: string)=> async (dispatch) => {
  const response = await axios.post<VerifyOtpResponse>(`${BASE_API}/verifyOtp`, { email, otp });
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
// export const addDetails = async(details:{email:string,password:string,mobile:number,FirstName:string,LastName:string}):Promise<AddDetailsResponse>=>{
//   await axios.post<AddDetailsResponse>(`${BASE_API}/addDetails`,details).then((res)=>{
//     if(res.data.isSuccess === true){
//       Swal.fire({
//         title:"Success!",
//         text:res.data.message,
//         icon:"success",
//         confirmButtonText:"Ok"
//       })
     
//     }else{
//       Swal.fire({
//         title: 'Error!',
//         text: res.data.message,
//         icon: 'error',
//         confirmButtonText: 'OK'
//       })
//     }
//   })
 
// }


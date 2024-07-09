export interface AddUserResponse {
  isSuccess: boolean;
  message: string;
  data: {
    email: string;
    role: string;
    otp: {
      code: string;
      expires_at: string;
    };
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

export interface VerifyOtpResponse {
  isSuccess: boolean;
  message: string;
}

export interface AddDetailsResponse{
  data:{
    FirstName:string
    LastName:string
    mobile:number
    password:string
    email:string
  }
     isSuccess: boolean
  message: string
}
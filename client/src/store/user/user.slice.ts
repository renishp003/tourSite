/* eslint-disable @typescript-eslint/no-explicit-any */
// src/slices/userSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { addDetails, addUser, verifyOtp} from './apiService';
import { AddDetailsResponse, AddUserResponse, VerifyOtpResponse } from './apiResponse';

interface OTP {
  code: string;
  expires_at: string;
  
}

interface UserState {
  email: string;
  otp: OTP["code"] | null;
  error: string | null;
  message: string | null;
  FirstName:string
  LastName:string
  mobile:number
  password:string
}


const initialState: UserState = {
  email: '',
  otp: null,
  error: null,
  message: null,
  FirstName:'',
  LastName:'',
  mobile:0,
  password:''
};

export const addUserThunk = createAsyncThunk<AddUserResponse, string, { rejectValue: string }>(
  'user/addUser',
  async (email, thunkAPI) => {
    try {
      const response = await addUser(email);
      if (response.isSuccess === true) {
        return response;
      } else {
        return thunkAPI.rejectWithValue(response.message);
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to add user');
    }
  }
);
export const verifyOtpThunk = createAsyncThunk<VerifyOtpResponse, { email: string; otp: string }, { rejectValue: string }>(
  'user/verifyOtp',
  async ({ email, otp }, thunkAPI) => {
    console.log("email ",email , "otp", otp)
    try {
      const response = await verifyOtp(email, otp);
      if (response.isSuccess) {
        return response;
      } else {
        return thunkAPI.rejectWithValue(response.message);
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to verify OTP');
    }
  }
);

export const addDetailsThunk = createAsyncThunk<
AddDetailsResponse,
  { email: string; password: string; mobile: number; FirstName: string; LastName: string },
  { rejectValue: string }
>(
  'user/addDetails',
  async (details, thukAPI) => {
    try {
           const res = await addDetails(details);
      if (res.isSuccess === true) {
        return res;
      } else {
        return thukAPI.rejectWithValue(res.message);
      }
    } catch (error: any) {
      return thukAPI.rejectWithValue(error.res?.data?.message || 'Failed to Add Details');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(addUserThunk.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(addUserThunk.fulfilled, (state, action: PayloadAction<AddUserResponse>) => {
  //       state.status = 'succeeded';
  //       state.email = action.payload.data.email;
        
  //     })
  //     .addCase(addUserThunk.rejected, (state, action) => {
  //       state.status = 'failed';
  //       state.error = action.payload || null;
  //       state.message = action.payload || null;
  //     })
  //     .addCase(verifyOtpThunk.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(verifyOtpThunk.fulfilled, (state, action: PayloadAction<VerifyOtpResponse>) => {
  //       state.status = 'succeeded';
  //       state.message = action.payload.message;
  //     })
  //     .addCase(verifyOtpThunk.rejected, (state, action) => {
  //       state.status = 'failed';
  //       state.error = action.payload || null;
  //       state.message = action.payload || null;
  //     })
  //     .addCase(addDetailsThunk.pending,(state,action)=>{
  //       state.status = 'loading'
  //       state.error = action.payload || null
  //       state.message = action.payload || null
  //     })
  //     .addCase(addDetailsThunk.fulfilled,(state,action:PayloadAction<AddDetailsResponse>)=>{
  //       state.status = 'succeeded'
  //      state.message = action.payload.message
  //     })
  //     .addCase(addDetailsThunk.rejected,(state,action)=>
  //     {
  //       state.status = 'failed';
  //       state.error = action.payload || null;
  //       state.message = action.payload || null;
  //     })
  // },
});

export default userSlice.reducer;

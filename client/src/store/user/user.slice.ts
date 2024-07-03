import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addUser } from "./apiService";
interface AddUserResponse {
    email: string;
    otp: {
      code: string;
      expires_at: string;
    };
  }
interface OTP{
    code:string,
    expires_at:string
}

export interface user{
    email:string,
    otp:OTP|null
    
}
interface AsyncThunkConfig {
    rejectValue: string;
  }
const initialState :user={
    email:'',
    otp:null
}

export const addUserThunk = createAsyncThunk<AddUserResponse, string, AsyncThunkConfig>(
    'user/addUser',
    async (email, thunkAPI) => {
      try {
        return await addUser(email);
      } catch (err) {
        return thunkAPI.rejectWithValue('Failed to add user');
      }
    }
  );

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(addUserThunk.fulfilled,(state,action)=>{
            state.email = action.payload.email
            state.otp=action.payload.otp

    }
)}
})
export default userSlice.reducer
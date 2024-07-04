// src/slices/userSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { addUser, verifyOtp} from './apiService';
import { AddUserResponse, VerifyOtpResponse } from './apiResponse';

interface OTP {
  code: string;
  expires_at: string;
}

interface UserState {
  email: string;
  otp: OTP["code"] | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  message: string | null;
}

const initialState: UserState = {
  email: '',
  otp: null,
  status: 'idle',
  error: null,
  message: null,
};

export const addUserThunk = createAsyncThunk<AddUserResponse, string, { rejectValue: string }>(
  'user/addUser',
  async (email, thunkAPI) => {
    try {
      const response = await addUser(email);
      if (response.isSuccess) {
        return response;
      } else {
        return thunkAPI.rejectWithValue(response.message);
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to add user');
    }
  }
);

export const verifyOtpThunk = createAsyncThunk<VerifyOtpResponse, { email: string; otp: string }, { rejectValue: string }>(
  'user/verifyOtp',
  async ({ email, otp }, thunkAPI) => {
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

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUserThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addUserThunk.fulfilled, (state, action: PayloadAction<AddUserResponse>) => {
        state.status = 'succeeded';
        state.email = action.payload.data.email;
        state.otp = action.payload.data.otp;
        state.message = action.payload.message;
      })
      .addCase(addUserThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || null;
        state.message = action.payload || null;
      })
      .addCase(verifyOtpThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(verifyOtpThunk.fulfilled, (state, action: PayloadAction<VerifyOtpResponse>) => {
        state.status = 'succeeded';
        state.message = action.payload.message;
      })
      .addCase(verifyOtpThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || null;
        state.message = action.payload || null;
      });
  },
});

export default userSlice.reducer;

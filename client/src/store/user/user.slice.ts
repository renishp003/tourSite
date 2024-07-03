import { createSlice } from "@reduxjs/toolkit";

interface user{
    email:string
    
}
const initialState :user={
    email:''
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{

    }

})
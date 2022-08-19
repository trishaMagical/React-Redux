import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name :"uday",
    initialState:{
        uday:null
    },
    reducers:{
        login:(state,action)=>{
            state.uday = action.payload;
            
        },
        logout:(state)=>{
            state.uday=null;
        },
    },
});
export const {login,logout} = userSlice.actions;

export const selectUser = (state) =>state.user.user;
export default userSlice.reducer;
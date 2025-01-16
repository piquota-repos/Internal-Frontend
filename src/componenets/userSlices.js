import { createSlice } from "@reduxjs/toolkit";

const initialState= [];

const userSlice = createSlice({
    name :"user",
    initialState : initialState,
    reducers : {
        showUser(state,action){
                state.push(action.payload)
        }
    }
})

export const{showUser}=userSlice.actions;
export default userSlice.reducer
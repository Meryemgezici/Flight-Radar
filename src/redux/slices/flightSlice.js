import { createSlice } from "@reduxjs/toolkit";
import { getFlight } from "../actions/flightAction";


const initialState={
    flights:[],
    isLoading:true,
    isError:false
};


const flightSlice=createSlice({
    name:"flight",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getFlight.pending,(state)=>{
            state.isLoading=true;
        })

        .addCase(getFlight.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.flights=action.payload;
        })

        .addCase(getFlight.rejected,(state)=>{
            state.isError=true;
            state.isLoading=false;
        })
    }
});


export default flightSlice.reducer;
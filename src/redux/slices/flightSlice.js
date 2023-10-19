import { createSlice } from "@reduxjs/toolkit";
import { getFlight } from "../actions/flightAction";


const initialState={
    flights:[],
    isLoading:true,
    isError:false,
    route:[],
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
    },

    reducers:{
        setRoute:(state,action)=>{

           const newRoute= action.payload.map((i)=>[i.lat,i.lng]);
            state.route=newRoute;
        }
    }

});


export default flightSlice.reducer;

export const {setRoute}=flightSlice.actions;
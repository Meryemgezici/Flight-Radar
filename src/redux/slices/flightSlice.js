import { createSlice } from "@reduxjs/toolkit";


const initialState={
    flights:[],
    isLoading:true,
    isError:false
};


const flightSlice=createSlice({
    name:"flight",
    initialState,
    extraReducers:{

    }
});


export default flightSlice.reducer;
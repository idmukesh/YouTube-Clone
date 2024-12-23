import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = new createSlice({
    name:'toggleSlice',
    initialState:{
        toggle:false
    },
    reducers:{
        setToggle:(state,action)=>{
            state.toggle = (!state.toggle)
        }
    }
})

export const {setToggle} = toggleSlice.actions;
export default toggleSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const searchSlice = new createSlice({
    name:"searchSlice",
    initialState:{
        inputValue:"",
        
    },
    reducers:{
        setInput:(state,action)=>{
            state.inputValue = action.payload
        }
    }
})
export const {setInput} = searchSlice.actions;
export default searchSlice.reducer;
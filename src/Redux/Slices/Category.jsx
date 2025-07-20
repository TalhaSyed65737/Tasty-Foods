import { createSlice } from "@reduxjs/toolkit";

const categorySLice = createSlice({
  name:"category",
  initialState:{
    category:"All"
  },

  reducers:{
    setCategory : (state,action)=>{
      state.category = action.payload
    },
  }
})

export const {setCategory}= categorySLice.actions

export default categorySLice.reducer
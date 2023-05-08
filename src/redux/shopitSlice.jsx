import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    productData: [],
    userInfo: null,
};

export const shopitSlice = createSlice({
    name :"shopit",
    initialState,
    reducers:{
        addToCart:(state , action)=>{
            state.productData =action.payload;
        },
    }
});

export const { addToCart }=shopitSlice.actions;
export default shopitSlice.reducer;


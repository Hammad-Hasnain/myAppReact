import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    productsData: []
}


export const fetchData = createAsyncThunk('Prodducts/fetch', async () => {
    try {
        // console.log();
        const data = await axios.get('https://fakestoreapi.com/products')
        console.log('data=====>', data.data);
        return data.data

    } catch (error) {
        console.log('error ====> ', error);
    }

})


const productsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchData.pending, (state, action) => {
            console.log('pending')
            state.isLoading = true;



        })

        builder.addCase(fetchData.fulfilled, (state, action) => {
            console.log('fulfilled')
            state.isLoading = false
            state.productsData = action.payload

        })

        builder.addCase(fetchData.rejected, (state, action) => {
            console.log('pending')
            state.isLoading = true

        })


    }


})



// const { actions, reducer } = productsSlice
const { reducer } = productsSlice

export default reducer 
import {configureStore} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import uiSlice from './ui-slice';

const initialState = {
    title :'test item',
    quantity: 3,
    total: 4,
    price: 20
}



createSlice({
    name: 'cart',
    initialState,
    reducers:{
        AddItemToCart(state,action) {
            
        }
    }
})



const store = configureStore({
    reducer:{
       ui: uiSlice.reducer
    }
})

export default store;
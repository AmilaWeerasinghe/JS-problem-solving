import { configureStore } from "@reduxjs/toolkit";
import authSlicerReducer from "./auth-slice";
import counterSliceReducer from "./counter-slice";




const store = configureStore({
    reducer: {
        counter: counterSliceReducer ,
        auth: authSlicerReducer
    }
})

export default store;

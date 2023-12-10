import {combineReducers} from 'redux';
import accountReducer from "./accountReducer";

const reducers = combineReducers({
    // K-V => 
    // K = whatever the property in the store
    // value = value assigning reducer
    account: accountReducer
})

export default reducers;
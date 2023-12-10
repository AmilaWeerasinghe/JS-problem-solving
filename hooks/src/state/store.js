import { createStore , applyMiddleware} from "redux";
import {thunk} from 'redux-thunk';

import reducers from "./reducers";

// pass reducers and the default state
const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)

export default store;
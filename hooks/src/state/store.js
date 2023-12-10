import { createStore } from "redux";

import reducers from "./reducers";

// pass reducers and the default state
const store = createStore(
    reducers,
    {}
)
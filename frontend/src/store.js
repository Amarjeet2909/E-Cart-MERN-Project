// Redux Implementation : To fetch data directly from backend for the different components without going via via.
// To Work with reducers we need to maintain 3 things: 1.Reducer 2. Action 3. Constant(Not mandatory) 


import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "./reducers/productReducer";

const reducer = combineReducers({
    products: productReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
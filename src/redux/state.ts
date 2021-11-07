import {combineReducers, createStore} from "redux";
import {currencyReducer} from "./currenceReducer";


const reducers = combineReducers({
    currency: currencyReducer,
});

export type GlobalState = ReturnType<typeof reducers>
export const store = createStore(reducers)
import {combineReducers, createStore} from "redux";
import { calendarReducer} from "./calendarReducer";


const reducers = combineReducers({
    calendar: calendarReducer,
});

export type GlobalState = ReturnType<typeof reducers>
export const store = createStore(reducers)
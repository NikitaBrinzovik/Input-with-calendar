import { GlobalState } from "./state";
import {calendarReducer} from "./calendarReducer";

export const selectAllState = (state:GlobalState) =>state.calendar
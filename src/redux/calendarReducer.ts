import {ACTION_TYPE, CalendarReducersTypes} from "./actions";


const initialState:CalendarState ={
    calendar: [
        {
            calendarName: 'Calendar',

        }
    ]
}

export const calendarReducer = (state:CalendarState = initialState, action:CalendarReducersTypes):any => {
    switch (action.type) {
        case ACTION_TYPE.DO_SOMETHING:
            return {
                ...state,
            }

    }
    return state
}

type CalendarState = {
    calendar: Array<CalendarType>
}
type CalendarType = {
    calendarName: string;

}
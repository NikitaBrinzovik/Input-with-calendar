import {calendarReducer} from "./calendarReducer";

export enum ACTION_TYPE{
    DO_SOMETHING='DO_SOMETHING'
}


export const anyAC =(a:any) => {
    return{
        type: ACTION_TYPE.DO_SOMETHING,
        payload:{a},
    }
}

export type anyACType = {
    type: ACTION_TYPE.DO_SOMETHING,
    payload: {a:any},
}

export type CalendarReducersTypes= anyACType

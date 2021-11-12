import {parser} from "./parser";

export type ArrowvalidationType = {
    dayFromDate: number
    monthFromDate: number
    yearFromDate: number
    hoursFromDate: number
    minutesFromDate: number
    secondsFromDate: number

}
type ArrowDayValidatorType = {
    dayFromDate: number
    monthFromDate: number
    hoursFromDate: number
}



export const setTime = (d:number, m:number, y:number, h:number, min:number, s:number) =>{

    return (parser(`${d} ${m} ${y} ${h} ${min} ${s}`))
}
export const arrowSecondsValidator = (minutesFromDate ?: number, secondsFromDate ?: number) => {
    /*if (secondsFromDate > 15) {
        parser(`${22} ${minutesFromDate}`)
    }*/

}
export const arrowMinutesValidator = (hourFromDate ?: number, minutesFromDate ?: number, secondsFromDate ?: number) => {
    /*if (minutesFromDate  > 15) {
        parser(`${22} ${hourFromDate}`)
    }*/

}
export const arrowHoursValidator = (dayFromDate?: number, hourFromDate ?: number, minutesFromDate ?: number) => {
    /*if (hourFromDate > 15) {
        parser(`${22} ${dayFromDate}`)
    }*/

}

export const arrowDayValidator = (hoursFromDate: number, dayFromDate: number, monthFromDate: number)=> {
    //alert(2)
    if (monthFromDate===1 &&dayFromDate > 27) {

        return (`${10} ${monthFromDate}`)
    }
    //return parser(`${dayFromDate} ${monthFromDate}`)
}

export const arrowMonthValidator = (dayFromDate: number, monthFromDate: number, yearFromDate: number) => {
    if (monthFromDate === 12) {
       // parser(`${6666} ${yearFromDate}`)
    }

}

export const arrowYearValidator = (monthFromDate: number, yearFromDate: number) => {
    if (yearFromDate > 15) {
        //parser(`${22} ${monthFromDate}`)
    }
}



export const x = 0;


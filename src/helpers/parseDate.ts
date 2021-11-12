import {months} from "./months";
import {convertStringToArray} from "./convertStringToArray";
import {getValidYear} from "./getValidYear";
import {getCorrectPartOfDate} from "./getCorrectPartOfDate";
import {getDefaultDate} from "./getDefaultDate";
import {convertMonth} from "./convertMonth";
import {comparisonMonthWithArrayElement} from "./comparisonMonthWithArreyElement";




export const parseDate = (value: string | Date): string | Date => {
    if (typeof value === "string") {
        let parsedArray = convertStringToArray(value)
        const isDateValueCorrect = Number(parsedArray[1]) || comparisonMonthWithArrayElement(months, parsedArray[1]);

        if (Number(parsedArray[0]) && isDateValueCorrect) {
            parsedArray = getDefaultDate(parsedArray)
            parsedArray[0] = getCorrectPartOfDate(parsedArray[0])

            if (comparisonMonthWithArrayElement(months, parsedArray[1]).toString()) {
                parsedArray[1] = convertMonth(parsedArray[1])
            }

            if (parsedArray[2]) {
                parsedArray[2] = getValidYear(parsedArray[2])
            }

            if (parsedArray[3]) {
                parsedArray[3] = getCorrectPartOfDate(parsedArray[3])
            }

            if (parsedArray[4]) {
                parsedArray[4] = getCorrectPartOfDate(parsedArray[4])
            }

            if (parsedArray[5]) {
                parsedArray[5] = getCorrectPartOfDate(parsedArray[5])
            }

            return (`${parsedArray[2]}-${parsedArray[1]}-${parsedArray[0]}T${parsedArray[3]}:${parsedArray[4]}:${parsedArray[5]}`)
        }
    }

    return value
}

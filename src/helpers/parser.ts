import {getMonthNumber, months, spliter, validationOfYear, validatorAllDate, validatorByLength} from "./functions";


export const parser = (str: string | Date): string | Date => {
    if (typeof str === "string") {
        let parsedArr = spliter(str)
        if (Number(parsedArr[0]) && (Number(parsedArr[1]) || (months.some(v => v === parsedArr[1])))
        ) {
            parsedArr = validatorAllDate(parsedArr)
            parsedArr[0] = validatorByLength(parsedArr[0])
            if (months.some(monthValue => monthValue === parsedArr[1].toString())) {
                parsedArr[1] = getMonthNumber(parsedArr[1])
            }
            if (parsedArr[2]) {
                parsedArr[2] = validationOfYear(parsedArr[2])
            }
            if (parsedArr[3]) {
                parsedArr[3] = validatorByLength(parsedArr[3])
            }
            if (parsedArr[4]) {
                parsedArr[4] = validatorByLength(parsedArr[4])
            }
            if (parsedArr[5]) {
                parsedArr[5] = validatorByLength(parsedArr[5])
            }
            return (`${parsedArr[2]}-${parsedArr[1]}-${parsedArr[0]}T${parsedArr[3]}:${parsedArr[4]}:${parsedArr[5]}`)
        }
    }
    return str
}

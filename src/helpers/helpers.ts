//----------------init-----------------
export let months: Array<string> = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December",
    "jan", "feb", "mar", "apr", "may", "jun",
    "jul", "aug", "sep", "oct", "nov", "dec",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
];

//////-----functions-----------------
//1
export const spliter = (str: string): Array<string> =>  str.split(' ');
//2
export const validatorAllDate = (arr: Array<string>): Array<string> => {
    if(!arr[2]){ arr[2] = "2021"}
    if(!arr[3]){ arr[3] = "00"}
    if(!arr[4]){ arr[4] = "00"}
    if(!arr[5]){ arr[5] = "00"}
    return arr
}

//3
export const validatorByLength = (date: string): string => {
    return (date.length < 2)
        ? dateValidationFormatter(date)
        : date
}
//4
export const dateValidationFormatter = (date: string | number) => {
    return "0" + date
}
//5
export const getMonthNumber = (month: string ):string => {
    if (month === "jan" || month === "Jan" || month === "January" || month === "1") return "01"
    if (month === "feb" || month === "Feb" || month === "February" || month === "2") return "02"
    if (month === "mar" || month === "Mar" || month === "March" || month === "3") return "03"
    if (month === "apr" || month === "Apr" || month === "April" || month === "4") return "04"
    if (month === "may" || month === "May" || month === "5") return "05"
    if (month === "jun" || month === "Jun" || month === "June" || month === "6") return "06"
    if (month === "jul" || month === "Jul" || month === "July" || month === "7") return "07"
    if (month === "aug" || month === "Aug" || month === "August" || month === "8") return "08"
    if (month === "sep" || month === "Sep" || month === "September" || month === "9") return "09"
    if (month === "oct" || month === "Oct" || month === "October" || month === "10") return "10"
    if (month === "nov" || month === "Nov" || month === "November" || month === "11") return "11"
    if (month === "dec" || month === "Dec" || month === "December" || month === "12") return "12"
    return month
}
//6
export const validationOfYear = (year: string):string => {
    if (year.length === 3) return "2" + year
    if (year.length === 2) return "20" + year
    if (year.length === 1) return  "202" + year
    return year
}
///---------------------------------------------------------------------------------------------------------------------
/*export const mapper = (arr: Array<string>): string | void => {
    arr.map((date, key) => {
        let helper: string
        if (key === 2) {
            if (date.length === 3) return "2" + date
            if (date.length === 2) return "20" + date

            if (date.length === 1) {
                helper = "202" + date
                console.log("--helper----", helper, "----here----")
                return helper
            }
        }
        return validatorByLength(date)
    })
}*/

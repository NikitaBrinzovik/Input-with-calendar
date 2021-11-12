
// let hoursHelper = (+hoursFromDate + 1)
// let dayHelper = (+dayFromDate + 1)
// let monthHelper = "0" + (+monthFromDate + 1)
// let yearHelper = +yearFromDate + 1
//
// if (monthFromDate === 2 && dayFromDate > 26) {
//     if (!((yearFromDate % 100 !== 0 && yearFromDate % 4 === 0)
//         || (yearFromDate % 100 === 0 && yearFromDate % 400 === 0))) { ///- високосный год
//         return setInputValue(
//             parseDate(`${"01"} ${"03"} ${yearFromDate} ${hoursFromDate} ${minutesFromDate} ${secondsFromDate}`))
//     }
//     if (dayFromDate > 27) {
//         return setInputValue(
//             parseDate(`${"01"} ${"03"} ${yearFromDate} ${hoursFromDate} ${minutesFromDate} ${secondsFromDate}`))
//     }
// }
// //месяца
// if (dayFromDate > 29
//     && (monthFromDate === 4 || monthFromDate === 6 || monthFromDate === 9 || monthFromDate === 11)) {
//
//     if (monthHelper === "010") {
//         return setInputValue(
//             parseDate(`${"01"} ${"10"} ${yearFromDate} ${hoursFromDate} ${minutesFromDate} ${secondsFromDate}`))
//     }
//     if (monthHelper === "012") {
//         return setInputValue(
//             parseDate(`${"01"} ${"12"} ${yearFromDate} ${hoursFromDate} ${minutesFromDate} ${secondsFromDate}`))
//     } else {
//         return setInputValue(
//             parseDate(`${"01"} ${monthHelper} ${yearFromDate} ${hoursFromDate} ${minutesFromDate} ${secondsFromDate}`))
//     }
// }
// if (dayFromDate > 30) {
//     if (monthHelper === "011") {
//         return setInputValue(
//             parseDate(`${"01"} ${"11"} ${yearFromDate} ${hoursFromDate} ${minutesFromDate} ${secondsFromDate}`))
//     }
//
//     return setInputValue(
//         parseDate(`${"01"} ${monthHelper} ${yearFromDate} ${hoursFromDate} ${minutesFromDate} ${secondsFromDate}`))
// }
// //циферблат
// if (hoursFromDate === 23) {
//     return setInputValue(
//         parseDate(`${dayHelper} ${monthFromDate} ${yearFromDate} ${"00"} ${minutesFromDate} ${secondsFromDate}`))
// }
// if (minutesFromDate === 59) {
//     if (hoursFromDate === 23) {
//         return setInputValue(
//             parseDate(`${dayHelper} ${monthFromDate} ${yearFromDate} ${"00"} ${"00"} ${secondsFromDate}`))
//     }
//     return setInputValue(
//         parseDate(`${dayFromDate} ${monthFromDate} ${yearFromDate} ${hoursHelper} ${"00"} ${secondsFromDate}`))
// }
// if (secondsFromDate === 59) {
//     return setInputValue(
//         parseDate(`${dayFromDate} ${monthFromDate} ${yearFromDate} ${hoursFromDate} ${minutesFromDate} ${"00"}`))
// }
// if (monthHelper === "013") {
//     return setInputValue(
//         parseDate(`${dayFromDate} ${"01"} ${yearHelper} ${hoursFromDate} ${minutesFromDate} ${secondsFromDate}`))
// }
// let time: string

//////////////////////////////////////////////////////////////
/*   let a = document.querySelector(".wrapper")
   const imgChanger = (yearTime:string)=>{
       if(a){
           if(yearTime=== "winter"){return a.classList.add("winter")}
           if(yearTime=== "spring"){return a.classList.add("spring")}
           if(yearTime=== "summer"){ return a.classList.add("summer")}
           if(yearTime=== "autumn"){return a.classList.add("autumn")}
       }
   }
   const watcher = () => {
       if (monthFromDate === 11|| monthFromDate === 0 || monthFromDate === 1){
           imgChanger("winter")
       }
       if (monthFromDate === 2|| monthFromDate === 3 || monthFromDate === 4){
           imgChanger("autumn")
       }
       if (monthFromDate === 5|| monthFromDate === 6 || monthFromDate === 7){
           imgChanger("summer")
       }
       if (monthFromDate === 8|| monthFromDate === 9 || monthFromDate === 10){
           imgChanger("spring")
       }
   }*/
//////////////////////////////////////////////////////////////

// if (month === "jan" || month === "Jan" || month === "January" || month === "1") return "01"
// if (month === "feb" || month === "Feb" || month === "February" || month === "2") return "02"
// if (month === "mar" || month === "Mar" || month === "March" || month === "3") return "03"
// if (month === "apr" || month === "Apr" || month === "April" || month === "4") return "04"
// if (month === "may" || month === "May" || month === "5") return "05"
// if (month === "jun" || month === "Jun" || month === "June" || month === "6") return "06"
// if (month === "jul" || month === "Jul" || month === "July" || month === "7") return "07"
// if (month === "aug" || month === "Aug" || month === "August" || month === "8") return "08"
// if (month === "sep" || month === "Sep" || month === "September" || month === "9") return "09"
// if (month === "oct" || month === "Oct" || month === "October" || month === "10") return "10"
// if (month === "nov" || month === "Nov" || month === "November" || month === "11") return "11"
// if (month === "dec" || month === "Dec" || month === "December" || month === "12") return "12"
export let fff = 4//3
// export const validatorByLength = (date: string): string => {
//     return (date.length < 2)
//         ? "0" + date
//         : date
// }

export const getCorrectPartOfDate = (date: string): string => date.length < 2 ? "0" + date : date;

//4
// export const dateValidationFormatter = (date: string | number) => {
//     return "0" + date
// }
//5

//6
// export const validationOfYear = (year: string): string => {
//     if (year.length === 3) return "2" + year
//     if (year.length === 2) return "20" + year
//     if (year.length === 1) return "202" + year
//     return year
// }
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

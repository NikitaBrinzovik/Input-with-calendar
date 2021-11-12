const getMonthNumber = (
    month: string,
    selectedMonthLowerCase: string,
    selectedSlicedMonth: string,
    selectedMonthUpperCaseCase: string,
    selectedMonthNumber: string,

) => month === selectedMonthLowerCase
    || month === selectedSlicedMonth
    || month === selectedMonthUpperCaseCase
    || month === selectedMonthNumber;

export const convertMonth = (month: string): string => {
    if (getMonthNumber(month, 'jan', 'Jan', 'January', "1")) return "01"
    if (getMonthNumber(month, "feb", "Feb", "February", "2")) return "02"
    if (getMonthNumber(month, "mar", "Mar", "March", "3")) return "03"
    if (getMonthNumber(month, "apr", "Apr", "April", "4")) return "04"
    if (getMonthNumber(month, "may", "May", "May", "5")) return "05"
    if (getMonthNumber(month, "jun", "Jun", "June", "6")) return "06"
    if (getMonthNumber(month, "jul", "Jul", "July", "7")) return "07"
    if (getMonthNumber(month, "aug", "Aug", "August", "8")) return "08"
    if (getMonthNumber(month, "sep", "Sep", "September", "9")) return "09"
    if (getMonthNumber(month, "oct", "Oct", "October", "10")) return "10"
    if (getMonthNumber(month, "nov", "Nov", "November", "11")) return "11"
    if (getMonthNumber(month, "dec", "Dec", "December", "12")) return "12"
    return month
}
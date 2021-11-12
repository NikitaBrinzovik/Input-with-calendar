export const getDate = (inputValue: Date | string) => {
    const day = new Date(inputValue).getDate()
    const month = new Date(inputValue).getMonth() + 1
    const year = new Date(inputValue).getFullYear()
    const hours = new Date(inputValue).getHours()
    const minutes = new Date(inputValue).getMinutes()
    const seconds = new Date(inputValue).getSeconds()
    const dateInThisMoment = {
        day,
        month,
        year,
        hours,
        minutes,
        seconds
    }

    return {day, month, year, hours, minutes, seconds, dateInThisMoment}
}
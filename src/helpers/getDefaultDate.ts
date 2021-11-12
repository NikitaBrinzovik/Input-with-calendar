export const getDefaultDate = (date: string[]): string[] => {
    if (!date[2]) {
        date[2] = "2021"
    }

    if (!date[3]) {
        date[3] = "00"
    }

    if (!date[4]) {
        date[4] = "00"
    }

    if (!date[5]) {
        date[5] = "00"
    }

    return date
}

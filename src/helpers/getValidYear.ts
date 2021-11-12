export const getValidYear = (year: string): string => {
    if (year.length === 3) {
        return "2" + year
    }

    if (year.length === 2) {
        return "20" + year
    }

    if (year.length === 1) {
        return "202" + year
    }

    return year
}

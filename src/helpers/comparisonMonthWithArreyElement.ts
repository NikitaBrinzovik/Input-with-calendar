export const comparisonMonthWithArrayElement = (months: string[], parsedArrayElement: string | number) => {
    return months.some((month: string) => month === parsedArrayElement)
}
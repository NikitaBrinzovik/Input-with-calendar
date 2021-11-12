export const getCorrectPartOfDate = (date: string): string => date.length < 2 ? "0" + date : date;

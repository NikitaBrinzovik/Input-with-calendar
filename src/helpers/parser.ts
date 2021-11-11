import {getMonthNumber, months, spliter, validationOfYear, validatorAllDate, validatorByLength} from "./helpers";


export const parser = (str: string | Date): string | Date => {
    if(typeof str === "string"){
        let govno = spliter(str)
        alert(govno)
        if (Number(govno[0]) && (Number(govno[1]) || (months.some(v => v === govno[1])))
        ) {
            govno = validatorAllDate(govno)
            govno[0] = validatorByLength(govno[0])
            if (months.some(monthValue => monthValue === govno[1].toString())) {
                govno[1] = getMonthNumber(govno[1])
            }
            if (govno[2]) {
                govno[2] = validationOfYear(govno[2])
            }
            if (govno[3]) {
                govno[3] = validatorByLength(govno[3])
            }
            if (govno[4]) {
                govno[4] = validatorByLength(govno[4])
            }
            if (govno[5]) {
                govno[5] = validatorByLength(govno[5])
            }
            /*time = (`${govno[2]}-${govno[1]}-${govno[0]}T${govno[3]}:${govno[4]}:${govno[5]}`)
            setInputValue(time)
            return inputValue*/
            alert(`${govno[2]}-${govno[1]}-${govno[0]}T${govno[3]}:${govno[4]}:${govno[5]}`)
            return (`${govno[2]}-${govno[1]}-${govno[0]}T${govno[3]}:${govno[4]}:${govno[5]}`)
        }
    }
    //alert("NOT a STRING")
    return str
}
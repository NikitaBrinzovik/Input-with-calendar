import {useState, KeyboardEvent} from "react";
import {
    getMonthNumber,
    months,
    spliter,
    validationOfYear,
    validatorAllDate,
    validatorByLength
} from "../helpers/helpers";

let time: string

export const Calendar = () => {
    const [inputType, setInputType] = useState<string>("");
    const [inputValue, setInputValue] = useState<Date | string>("");

    const parser = (str: string | Date): string | Date => {
        if(typeof str === "string"){
            let govno = spliter(str)


        if (Number(govno[0]) && (Number(govno[1]) || (months.some(v => v === govno[1])))
        ) {
            setInputType("datetime-local")

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

            time = (`${govno[2]}-${govno[1]}-${govno[0]}T${govno[3]}:${govno[4]}:${govno[5]}`)
            setInputValue(time)
            return inputValue
        }
        }
        alert("NOT a STRING")
        return str
    }

    const onKeyDown = () => {
        if(typeof inputValue === "object" ){
            alert("obj")
        }
        if(typeof inputValue === "function" ){
            alert("func")
        }
        if(inputValue){
            alert  (11111111111111)
        }
        alert(typeof inputValue + "fuck")
        parser(inputValue)




    }


    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') onKeyDown()
        if (e.code === 'Escape') reset()
        if(e.code === 'ArrowUp'){ arrowUp()}
    }
    const reset = () => {
        setInputType("")
        setInputValue('')
    }
    const arrowUp = () => {
        let dayFromDate = new Date(inputValue).getDate()
        let monthFromDate = getMonthNumber(new Date(inputValue).getMonth().toString())
        let yearFromDate = new Date(inputValue).getFullYear()
        let hourFromDate = new Date(inputValue).getHours()
        let minutesFromDate = new Date(inputValue).getMinutes()
        let secondsFromDate = new Date(inputValue).getSeconds()
        console.log("/////////////////////////////////////////////////////")
        console.log({dayFromDate, monthFromDate, yearFromDate, hourFromDate, minutesFromDate, secondsFromDate})
        time = (`${yearFromDate}-${monthFromDate}-${dayFromDate}T${hourFromDate}:${minutesFromDate}:${secondsFromDate}`)
        console.log("/////////////////////////////////////////////////////")
        return time
    }
    // ----------button helpers------
    const helper1 = () => {
        setInputValue('1 1 1 1 1 1')
    }
    const helper2 = () => {
        setInputValue('1 2 3')
    }
    const helper3 = () => {
        setInputValue('1 1')
    }
    const helper4 = () => {
        setInputValue('11 11 1999 23 59 11')
    }
    const helper5 = () => {
        setInputValue('11 feb 1111')
    }
    const helper6 = () => {
        setInputValue('11 feb 1111 23 59 11')
    }

    //------------------------------
    const onInputValueChange = (date: string) => {
        // приходит: 1112-01-11T23:59:11

        if (inputType === "datetime-local") {
            return setInputValue(date)
        }
        return setInputValue(date)
    }

    console.log('inputValue', inputValue)
    return (<div>
        <input
            type={inputType}
            className={'calendar'}
            placeholder={'hey'}
            value={inputValue.toString()}
            onKeyDown={e => handleKeyDown(e)}
            id={'calendar'}
            onChange={(e) => setInputValue(e.currentTarget.value)}
            // onChange={(e) => onInputValueChange(e.currentTarget.value)}
        />

        {/*-------------Button - HELPERS--------------*/}
        <button className="see-result button" onClick={onKeyDown}>Exchange</button>
        <button className="see-result button" onClick={reset}>reset</button>

        {/*-------------setInput HELPERS--------------*/}
        <div style={{"background": "rgba(54, 225, 112, 0.68)", "margin": "40px", "display": "flex"}}>
            <button className="see-result button" onClick={helper1}>1 1 1 1 1 1</button>
            <button className="see-result button" onClick={helper2}>1 2 3</button>
            <button className="see-result button" onClick={helper3}>1 1</button>
            <button className="see-result button" onClick={helper4}>11 11 1999 23 59 11</button>
            <button className="see-result button" onClick={helper5}>11 feb 1111</button>
            <button className="see-result button" onClick={helper6}>11 feb 1111 23 59 11</button>
            <div style={{"background": "rgba(54, 225, 112, 0.68)", "padding": "20px"}}/>
            {'"1991-02-03T22:01" -> 02/03/1991 10:01 PM или заканчивается на 22:01. ВТОРОЕ ЧИСЛО-ЭТО МЕСЯЦ '}
        </div>
        <div style={{"background": "rgba(54, 225, 112)", "margin": "40px", "width": "400px"}}>
            1) По нажатию на клавиатуре стрелок вверх (↑) и вниз (↓) в зависимости от положения курсора увеличивается
            или уменьшается на 1 часть даты по циклу и выделяется изменяемая часть инпута. Если поставить курсор на
            месяц и нажать вверх то дата переключится на следующий месяц, при увеличении декабря дата переключается на
            январь, год при этом не изменяется. <br/> <br/>
            2) По нажатию на клавиатуре комбинаций ctrl + ↑ или ctrl + ↓ происходит то же самое, но не по циклу.
            Например, при увеличении дня в декабре номер дня увеличивается по одному до 31 числа,
            после чего 31/December/2021 12:13:00 + 1 день 01/January/2022 12:13:00. <br/> <br/>
            3) В input можно вводить обычный текст. <br/> <br/>
            4) Дата вводится посредством клавиатуры. День-месяц-год время, можно вводить не полностью <br/>

        </div>
    </div>)
}


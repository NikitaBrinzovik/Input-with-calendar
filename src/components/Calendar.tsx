import {useState, KeyboardEvent} from "react";
import {getMonthNumber, months, validation} from "../assets/mask";

let time: string

export const Calendar = () => {
    const [inputType, setInputType] = useState<string>("");
    const [inputValue, setInputValue] = useState<Date | string>("");

    const strParser = (str: string | Date): string | Date => {
        if(typeof str === "object") {

            let incoming = str
            let dayFromDate =  new Date(str).getDate()
            let monthFromDate = getMonthNumber( new Date(str).getMonth().toString() )
            let yearFromDate = new Date(str).getFullYear()
            let hourFromDate = new Date(str).getHours()
            let minutesFromDate = new Date(str).getMinutes()
            let secondsFromDate = new Date(str).getSeconds()
            console.log({dayFromDate, monthFromDate, yearFromDate, hourFromDate, minutesFromDate, secondsFromDate})
            time = (`${yearFromDate}-${monthFromDate}-${dayFromDate}T${hourFromDate}:${minutesFromDate}:${secondsFromDate}`)
            return time
        }
            if(str) {

                let validatedDate = validation(str)
                if (Number(validatedDate.day) && (Number(validatedDate.month) || (months.some(v => v === validatedDate.month)))
                ) {
                    setInputType("datetime-local")
                    if (months.some(monthValue => monthValue === validatedDate.month)) {
                        validatedDate.month = getMonthNumber(validatedDate.month)
                    }
                    time = (`${validatedDate.year}-${validatedDate.month}-${validatedDate.day}T${validatedDate.hours}:${validatedDate.minutes}:${validatedDate.seconds}`)
                    setInputValue(time)
                    return inputValue

                }
            }
        return str
    }

    const onKeyDown = () => strParser(inputValue)


    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            onKeyDown()
        }
        if (e.code === 'Escape') {
            setInputType("")
        }

    }
    const reset = () => {
        setInputType("")
        setInputValue('')
    }
    // ----------button helpers------
    const helper1 = () => {
        setInputValue('1 1 1 1 1 1')
    }
    const helper2 = () => {
        setInputValue('1 1 1')
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
            onChange={(e) => onInputValueChange(e.currentTarget.value)}
        />

        {/*-------------Button - HELPERS--------------*/}
        <button className="see-result button" onClick={onKeyDown}>Exchange</button>
        <button className="see-result button" onClick={reset}>reset</button>

        {/*-------------setInput HELPERS--------------*/}
        <div style={{"background": "rgba(54, 225, 112, 0.68)", "margin": "40px", "display": "flex"}}>
            <button className="see-result button" onClick={helper1}>1 1 1 1 1 1</button>
            <button className="see-result button" onClick={helper2}>1 1 1</button>
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


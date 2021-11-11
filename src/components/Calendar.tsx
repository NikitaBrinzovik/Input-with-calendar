import {KeyboardEvent, useState} from "react";
import {parser} from "../helpers/parser";
import {ArrowvalidationType} from "../helpers/arrowvalidation";

let time: string

export const Calendar = () => {
    const [inputType, setInputType] = useState<string>("");
    const [inputValue, setInputValue] = useState<Date | string>("");

    /*const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'ArrowDown') {
            alert('down')
        }
    }*/
    // const getChousenTime = ()=> {}
    /*const onInputValueChange = (date: string) => {
        // приходит: 1112-01-11T23:59:11

        if (inputType === "datetime-local") {
            return setInputValue(date)
        }
        return setInputValue(date)
    }*/

    const onKeyDown = () => {
        setInputType("datetime-local")
        setInputValue(parser(inputValue))
    }
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') onKeyDown()
        if (e.code === 'Escape') reset()
        if (e.code === 'ArrowUp') arrowUp()

        if (e.ctrlKey) {
            if (e.code === 'ArrowUp') arrowUpCtrlKey()
            if (e.code === 'ArrowDown') arrowDownCtrlKey()
        }
    }
    const reset = () => {
        setInputType("")
        setInputValue('')
    }

    let dayFromDate = new Date(inputValue).getDate()
    let monthFromDate = new Date(inputValue).getMonth() + 1
    let yearFromDate = new Date(inputValue).getFullYear()
    let hoursFromDate = new Date(inputValue).getHours()
    let minutesFromDate = new Date(inputValue).getMinutes()
    let secondsFromDate = new Date(inputValue).getSeconds()
    let dateInThisMoment = {
        dayFromDate,
        monthFromDate,
        yearFromDate,
        hoursFromDate,
        minutesFromDate,
        secondsFromDate
    }

    const arrowUp = () => {
        //const bisSextus = "^(?:(?:(?:0[1-9]|1\\d|2[0-8])(?:0[1-9]|1[0-2])|(?:29|30)(?:0[13-9]|1[0-2])|31(?:0[13578]|1[02]))[1-9]\\d{3}|2902(?:[1-9]\\d(?:0[48]|[2468][048]|[13579][26])|(?:[2468][048]|[13579][26])00))$"
        const validData = (dateInThisMoment: ArrowvalidationType) => {
            if (monthFromDate === 2 && dayFromDate > 26) {//--------------------February-------------------
                if (!((yearFromDate % 100 !== 0 && yearFromDate % 4 === 0) || (yearFromDate % 100 === 0 && yearFromDate % 400 === 0))) { ///- високосный год
                    setInputValue(parser(`{"01"} ${monthFromDate} ${yearFromDate} ${hoursFromDate} ${minutesFromDate} ${secondsFromDate}`))
                }
                if (dayFromDate > 27) {
                    setInputValue(parser(`{"01"} ${monthFromDate} ${yearFromDate} ${hoursFromDate} ${minutesFromDate} ${secondsFromDate}`))
                }
            }
            if (dayFromDate > 29 && (monthFromDate === 4 || monthFromDate === 6 || monthFromDate === 9 || monthFromDate === 11)) {
                setInputValue(parser(`{"01"} ${monthFromDate} ${yearFromDate} ${hoursFromDate} ${minutesFromDate} ${secondsFromDate}`))
                //------------------------------30 day months----------------------
            }
        }
        validData(dateInThisMoment)
        return time
    }

    const arrowUpCtrlKey = () => {
        const validData = (dateInThisMoment: ArrowvalidationType) => {
            let hoursHelper =  (+hoursFromDate + 1)
            let dayHelper =  (+dayFromDate + 1)
            let monthHelper = "0" + (+monthFromDate + 1)
            let yearHelper =  +yearFromDate + 1
            // if(monthHelper.length === 3) monthHelper.substr(-2,2)
            if(monthFromDate === 11){
                setInputValue(parser(`${dayFromDate} {"01"} ${yearHelper} ${hoursFromDate} ${minutesFromDate} ${secondsFromDate}`))
            }
            if (monthFromDate === 2 && dayFromDate > 26) {//--------------------February-------------------
                if (!((yearFromDate % 100 !== 0 && yearFromDate % 4 === 0) || (yearFromDate % 100 === 0 && yearFromDate % 400 === 0))) { ///- високосный год
                    setInputValue(parser(`{"01"} {"03"} ${yearFromDate} ${hoursFromDate} ${minutesFromDate} ${secondsFromDate}`))
                }
                if (dayFromDate > 27) {
                    setInputValue(parser(`{"01"} {"03"} ${yearFromDate} ${hoursFromDate} ${minutesFromDate} ${secondsFromDate}`))
                }
            }
            if (dayFromDate > 29 && (monthFromDate === 4 || monthFromDate === 6 || monthFromDate === 9 || monthFromDate === 11)) {
                if(monthHelper === "010") monthHelper = "10"
                if(monthHelper === "012") monthHelper = "12"
                setInputValue(parser(`{"01"} ${monthHelper} ${yearFromDate} ${hoursFromDate} ${minutesFromDate} ${secondsFromDate}`))
                //------------------------------30 day months----------------------
            }
            if (dayFromDate > 30) {
                if(monthHelper === "010") monthHelper = "10"
                if(monthHelper === "011") monthHelper = "11"
                setInputValue(parser(`{"01"} ${monthHelper} ${yearFromDate} ${hoursFromDate} ${minutesFromDate} ${secondsFromDate}`))
                if(monthHelper === "013") {
                    let yearHelper =  +yearFromDate + 1
                    setInputValue(parser(`{"01"} {"01"} ${yearHelper} ${hoursFromDate} ${minutesFromDate} ${secondsFromDate}`))
                }
            }
            if(hoursFromDate === 23){
                setInputValue(parser(`${dayHelper} ${monthFromDate} ${yearFromDate} {"00"} ${minutesFromDate} ${secondsFromDate}`))
            }
            if(minutesFromDate === 59){
                setInputValue(parser(`${dayFromDate} ${monthFromDate} ${yearFromDate} ${hoursHelper} {"00"} ${secondsFromDate}`))
            }
            if(secondsFromDate === 59){
                setInputValue(parser(`${dayFromDate} ${monthFromDate} ${yearFromDate} ${hoursFromDate} ${minutesFromDate} {"00"}`))
            }
        }
        validData(dateInThisMoment)
        return time
    }

    const arrowDownCtrlKey = () => {}

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



    console.log('inputValue', inputValue)
    return (<div>
        <input
            type={inputType}
            className={'calendar'}
            placeholder={'hey'}
            value={inputValue.toString()}
            onKeyDown={e => handleKeyDown(e)}
            // onKeyUp={e => handleKeyUp(e)}
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
            или уменьшается на 1 часть даты по циклу и выделяется изменяемая часть input-a. Если поставить курсор на
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


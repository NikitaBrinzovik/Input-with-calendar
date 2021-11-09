import {useState, KeyboardEvent} from "react";
import {getMonthNumber, months} from "../assets/mask";

let year: string
let month: string
let day: string
let hour: string
let minutes: string
let seconds: string
let time: string

export const Calendar = () => {
    const [inputType, setInputType] = useState<string>("");
    const [inputValue, setInputValue] = useState<string>("");

    const dateValidationFormatter = (date: string | number) => "0" + date

    const strParser = (str: string) => {

        const dateArrFromInput = str.split(' ');
        let mappedDateArr = dateArrFromInput.map((date, key) => {
            if (key === 2) {
                if (date.length === 3) return "2" + date
                if (date.length === 2) return "20" + date
                if (date.length === 1) return "202" + date
            }
            /*switch (key === 2) {
                case date.length === 3: return "2" + date
                case date.length === 2: return "20" + date
                case date.length === 1: return "202" + date
                //default: return date
            }*/
            return (date.length < 2)
                ? dateValidationFormatter(date)
                : date
        })

        day = mappedDateArr[0];
        month = mappedDateArr[1];
        mappedDateArr[2] ? year = mappedDateArr[2] : year = "2021";
        mappedDateArr[3] ? hour = mappedDateArr[3] : hour = "00";
        mappedDateArr[4] ? minutes = mappedDateArr[4] : minutes = "00";
        mappedDateArr[5] ? seconds = mappedDateArr[5] : seconds = "00";

        if (Number(day) && (Number(month) || (months.some(v => v === month)))
        ) {
            setInputType("datetime-local")

            if (months.some(monthValue => monthValue === month)) {
                month = getMonthNumber(month)
            }

            time = (`${year}-${month}-${day}T${hour}:${minutes}:${seconds}`)
            return setInputValue(time)

        }
    }


    const onKeyDown = () => {
        const values = strParser(inputValue)
    }
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            onKeyDown()
        }
        if (e.code === 'Escape') {
            setInputType("")
        }
        // if (e.code === 'Backspace') {
        //     setInputType("")
        //     setInputValue("")
        // }
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

    console.log('inputValue', inputValue)
    return (<div>
        <input
            type={inputType}
            className={'calendar'}
            placeholder={'hey'}
            value={inputValue}
            onKeyDown={e => handleKeyDown(e)}
            onChange={(e) => setInputValue(e.currentTarget.value)}
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

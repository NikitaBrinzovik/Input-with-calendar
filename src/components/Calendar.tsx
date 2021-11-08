import {useState, KeyboardEvent} from "react";
import {mounths} from "./blocknote";

let year: undefined | string
let month: undefined | string
let day: undefined | string
let hour: undefined | string
let minutes: undefined | string
let seconds: undefined | string
//let mask:


export const Calendar = () => {
    const [inputType, setInputType] = useState<string>("");
    const [inputValue, setInputValue] = useState<string>("");
    let time: any ///????????????????????????????????

    const zeroFarmater = (d: string | number) => "0" + d
    const strParser = (str: string) => {
        const dateArr = str.split(' ');

        let mappedDateArr = dateArr.map((d) => {
            (d.length < 2)
                ? zeroFarmater(d)
                : console.log(`max-${d}`)
        })
        console.table(mappedDateArr)

        
        day = dateArr[0];
        month = dateArr[1];
        dateArr[2] ? year = dateArr[2]: year = "2021";
        //АХТУНГ ТУТ ГОВНОКОДИЩЕ
        dateArr[3] ?( hour = (dateArr[3].length < 2)? zeroFarmater(dateArr[3]): dateArr[3]) : hour = "12";
        //дальше не так страшно, но всё равно будь аккуратнее, случайный путник. говнокод работает кстати)
        dateArr[4] ? minutes = dateArr[4] : minutes = "00";
        dateArr[5] ? seconds = dateArr[5] : seconds = "00";
        console.table(dateArr)
        if (Number(dateArr[0]) && (Number(dateArr[1]) || (mounths.some(v => v === dateArr[1])))
        ) {
            if (mounths.some(v => v === dateArr[1])) {
                //попадаем, если ввели месяц буквами
            } else {
                //если ввод цифрами

            }
            setInputType("datetime-local")
            //меняем год и день местами
            time = (`${year}-${month}-${day}T${hour}:${minutes}:${seconds}`)
            // time = (`${dateArr[2]}-${dateArr[1]}-${dateArr[0]}T${dateArr[3]}:${dateArr[4]}:${dateArr[5]}`)
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
        if (e.code === 'Backspace'){
            setInputType("")
            setInputValue("")
        }
    }

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
        <button className="see-result button" onClick={onKeyDown}>Exchange</button>


        {/*-------------HELPERS--------------*/}
        <input type="date" value={"1991-02-03"}/>
        <input type="datetime-local" value={"1991-02-03T22:01"}/>
        <div style={{"background": "rgba(54, 225, 112, 0.68)", "margin": "40px"}}>

            {"1991-02-03"}
            <br/>
            {"01 mar->01/March/2023 20:55:04"}
            <div style={{"background": "rgba(54, 225, 112, 0.68)", "padding": "20px"}}/>
            {'"1991-02-03T22:01" -> 02/03/1991 10:01 PM или заканчивается на 22:01. ВТОРОЕ ЧИСЛО-ЭТО МЕСЯЦ '}
            <br/>
            {'11 feb 1111'}
            <br/>
            {'11 11 1999 23 59 11'}
            <input type="datetime-local"/>
            <input type="datetime-local" value={`2021-11-26T02:16:11`}/>
        </div>
    </div>)
}
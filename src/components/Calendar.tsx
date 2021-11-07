import {useState, KeyboardEvent} from "react";


export const Calendar = () => {
    const [inputValue, setInputValue] = useState<string>("")

    const strParser = (str: string) => {
        const arrStr = str.split(' ').filter(el => el !== 'in');
        return {
            sumToExchange: arrStr[0],
            originalValute: arrStr[1],
            resultValute: arrStr[2],
        }
    }
    const onKeyDown = () => {
        const values = strParser(inputValue)}

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            onKeyDown()
        }
    }
    if(inputValue){

    }
    return (<div>
        <input
            // type="date"
            className="calendar"
            placeholder={'hey'}
            value={inputValue}
            onChange={(e) => setInputValue(e.currentTarget.value)}
        />


    </div>)
}
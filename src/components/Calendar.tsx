import {useState, KeyboardEvent} from "react";

let consoleHelper: any
//new Date('1 2 3 4:3:2')
export const Calendar = () => {
    const [inputValue, setInputValue] = useState<string>("")
    const [inputType, setInputType] = useState<string>("")
    const strParser = (str: string) => {
        const arrStr = str.split(' ')
        // .filter(el => el !== 'in');


        if (Number(arrStr[0]) &&
            Number(arrStr[1]) &&
            Number(arrStr[2]) &&
            Number(arrStr[3]) &&
            Number(arrStr[4])) {

            setInputType("datetime-local")
            return console.table({
                    firstValue: arrStr[0],
                    secondValue: arrStr[1],
                    thirdValue: arrStr[2],
                    forthValue: arrStr[3],
                    fifthValue: arrStr[4],
                    sixthValue: arrStr[5],
                    seventhValue: arrStr[6],
                }
            )

        } else if (
            Number(arrStr[0]) &&
            Number(arrStr[1]) &&
            Number(arrStr[2])
        ) {
            setInputType("date")
        }

        return console.log('NaN')

    }
    const onKeyDown = () => {
        const values = strParser(inputValue)


    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            onKeyDown()
        }
    }
    if (inputValue) {

    }
    return (<div>
        <input
            type={inputType}
            // className="calendar"
            className={'calendar'}
            placeholder={'hey'}
            value={inputValue}
            onKeyDown={e => handleKeyDown(e)}
            onChange={(e) => setInputValue(e.currentTarget.value)}
        />
        <button className="see-result button" onClick={onKeyDown}>Exchange</button>

    </div>)
}
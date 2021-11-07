import {useState, KeyboardEvent} from "react";


export const Calendar = () => {
    const [inputValue, setInputValue] = useState<string>("")


    return (<div>
        <input
            // type="date"
            className="calendar"
            placeholder='hey'
            value={inputValue}
        />


    </div>)
}
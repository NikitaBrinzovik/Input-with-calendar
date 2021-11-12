import {KeyboardEvent, useState} from "react";
import {parseDate} from "../helpers/parseDate";
import {getDate} from "../helpers/getDate";
import {KeyboardKey} from "../enums/keyboardKey";

export const Calendar = () => {
    const [inputType, setInputType] = useState<string>("");
    const [inputValue, setInputValue] = useState<Date | string>("");

    const {
        day, month, year, hours, minutes, seconds
    } = getDate(inputValue)

    const ZERO = "0"
    const DOUBLE_ZERO = "00"
    const ZERO_ONE = "01"
    const ZERO_TWO = "02"
    const ZERO_THREE = "03"
    const ZERO_TEN = "010"
    const ZERO_ELEVEN = "011"
    const ZERO_TWELVE = "012"
    const ZERO_THIRTEEN = "013"
    const TEN = "10"
    const ELEVEN = "11"
    const TWELVE = "12"
    const TWENTY_THREE = "23"
    const TWENTY_SEVEN = "27"
    const TWENTY_EIGHT = "28"
    const THIRTY = "30"
    const THIRTY_ONE = "31"
    const FIFTY_NINE = "59"


    const updatedDay = (+day + 1)
    const updatedYear = (+year + 1)
    const updatedHours = (+hours + 1)
    const updatedMonth = ZERO + (+month + 1)

    const updatedNegativeHours = (+hours - 1)
    const updatedNegativeDay = (+day - 1)
    const updatedNegativeMonth = ZERO + (+month - 1)
    const updatedNegativeYear = (+year - 1)
    const leapYear = ((year % 100 !== 0 && year % 4 === 0) || (year % 100 === 0 && year % 400 === 0))

    const notLeapYear = !((year % 100 !== 0 && year % 4 === 0) || (year % 100 === 0 && year % 400 === 0))
    const february = month === 2 && day > 26
    const februaryInLeapYear = day > 27
    const monthWithThirtyDays = day > 29 && (month === 4 || month === 6 || month === 9 || month === 11)
    const monthWithThirtyOneDays = day > 30
    const endOfDay = hours === 23
    const endOfHour = minutes === 59
    const endOfMinute = seconds === 59
    const endOfYear = updatedMonth === ZERO_THIRTEEN

    const firstOfMarch = month === 3 && day === 1
    const beforeMonthWithThirtyDays = day === 1 && (month === 5 || month === 7 || month === 10 || month === 12)
    const firstDay = day === 1
    const zeroHour = hours === 0
    const zeroMinutes = minutes === 0
    const zeroSeconds = seconds === 0
    const previousYear = updatedNegativeMonth === DOUBLE_ZERO

    const firstOfFebruary = month === 2 && day === 1
    const firstDayOfMonthWithThirtyDays = day === 1 && (month === 4 || month === 6 || month === 9 || month === 11)


    const handlePressArrowUpAndCtrl = () => {

        if (february) {
            if (notLeapYear) {
                return setInputValue(parseDate(`${ZERO_ONE} ${ZERO_THREE} ${year} ${hours} ${minutes} ${seconds}`))
            }

            if (februaryInLeapYear) {
                return setInputValue(parseDate(`${ZERO_ONE} ${ZERO_THREE} ${year} ${hours} ${minutes} ${seconds}`))
            }
        }

        if (monthWithThirtyDays) {

            if (updatedMonth === ZERO_TEN) {
                return setInputValue(parseDate(`${ZERO_ONE} ${TEN} ${year} ${hours} ${minutes} ${seconds}`))
            }

            if (updatedMonth === ZERO_TWELVE) {
                return setInputValue(parseDate(`${ZERO_ONE} ${TWELVE} ${year} ${hours} ${minutes} ${seconds}`))
            }

            return setInputValue(parseDate(`${ZERO_ONE} ${updatedMonth} ${year} ${hours} ${minutes} ${seconds}`))
        }

        if (monthWithThirtyOneDays) {
            if (updatedMonth === ZERO_ELEVEN) {
                return setInputValue(parseDate(`${ZERO_ONE} ${ELEVEN} ${year} ${hours} ${minutes} ${seconds}`))
            } else {
                return setInputValue(parseDate(`${ZERO_ONE} ${updatedMonth} ${year} ${hours} ${minutes} ${seconds}`))

            }

        }

        if (endOfDay) {
            return setInputValue(parseDate(`${updatedDay} ${month} ${year} ${DOUBLE_ZERO} ${minutes} ${seconds}`))
        }

        if (endOfHour) {
            if (endOfDay) {
                return setInputValue(parseDate(`${updatedDay} ${month} ${year} ${DOUBLE_ZERO} ${DOUBLE_ZERO} ${seconds}`))
            }

            return setInputValue(parseDate(`${day} ${month} ${year} ${updatedHours} ${DOUBLE_ZERO} ${seconds}`))
        }

        if (endOfMinute) {
            return setInputValue(parseDate(`${day} ${month} ${year} ${hours} ${minutes} ${DOUBLE_ZERO}`))
        }

        if (endOfYear) {
            return setInputValue(parseDate(`${day} ${ZERO_ONE} ${updatedYear} ${hours} ${minutes} ${seconds}`))
        }
    }

    const handlePressArrowUp = () => {
        if (february) {
            if (notLeapYear) {
                return setInputValue(parseDate(`${ZERO_ONE} ${month} ${year} ${hours} ${minutes} ${seconds}`))
            }

            if (februaryInLeapYear) {
                return setInputValue(parseDate(`${ZERO_ONE} ${month} ${year} ${hours} ${minutes} ${seconds}`))
            }
        }
        if (monthWithThirtyDays) {
            return setInputValue(parseDate(`${ZERO_ONE} ${month} ${year} ${hours} ${minutes} ${seconds}`))
        }

    }


    const handlePressArrowDownCtrlKey = () => {
        // проверить февраль
        // magic in firstDay

        if (firstOfMarch) {
            if (leapYear) {
                return setInputValue(parseDate(`${TWENTY_EIGHT} ${ZERO_TWO} ${year} ${hours} ${minutes} ${seconds}`))
            }
            return setInputValue(parseDate(`${TWENTY_SEVEN} ${ZERO_TWO} ${year} ${hours} ${minutes} ${seconds}`))
        }

        if (beforeMonthWithThirtyDays) {
            if (updatedNegativeMonth === ZERO_ELEVEN) {
                return setInputValue(parseDate(`${THIRTY} ${ELEVEN} ${year} ${hours} ${minutes} ${seconds}`))
            }

            return setInputValue(parseDate(`${THIRTY} ${updatedNegativeMonth} ${year} ${hours} ${minutes} ${seconds}`))
        }
        if (firstDay) {
            if (updatedNegativeMonth === ZERO_TEN) {

                return setInputValue(parseDate(`${THIRTY_ONE} ${TEN} ${year} ${hours} ${minutes} ${seconds}`))
            }
            if (updatedNegativeMonth === DOUBLE_ZERO) {
                return setInputValue(parseDate(`${THIRTY_ONE} ${TWELVE} ${updatedNegativeYear} ${hours} ${minutes} ${seconds}`))
            }
            return setInputValue(
                parseDate(`${THIRTY_ONE} ${updatedNegativeMonth} ${year} ${hours} ${minutes} ${seconds}`))
        }

        if (zeroHour) {
            return setInputValue(parseDate(`${updatedNegativeDay} ${month} ${year} ${TWENTY_THREE} ${minutes} ${seconds}`))
        }
        if (zeroMinutes) {
            if (zeroHour) {
                return setInputValue(
                    parseDate(`${updatedNegativeDay} ${month} ${year} ${TWENTY_THREE} ${FIFTY_NINE} ${seconds}`))
            }
            return setInputValue(
                parseDate(`${day} ${month} ${year} ${updatedNegativeHours} ${FIFTY_NINE} ${seconds}`))
        }
        if (zeroSeconds) {
            return setInputValue(
                parseDate(`${day} ${month} ${year} ${hours} ${minutes} ${FIFTY_NINE}`))
        }

        if (previousYear) {
            return setInputValue(
                parseDate(`${day} ${TWELVE} ${updatedNegativeYear} ${hours} ${minutes} ${seconds}`))
        }

    }
    const handlePressArrowDown = () => {
        if (firstOfFebruary) {
            if (leapYear) {
                return setInputValue(parseDate(`${TWENTY_EIGHT} ${ZERO_TWO} ${year} ${hours} ${minutes} ${seconds}`))
            }
            if (firstDay) {
                return setInputValue(parseDate(`${TWENTY_SEVEN} ${ZERO_TWO} ${year} ${hours} ${minutes} ${seconds}`))
            }
        }

        if (firstDayOfMonthWithThirtyDays) {
            return setInputValue(
                parseDate(`${THIRTY} ${month} ${year} ${hours} ${minutes} ${seconds}`))
        }
    }


    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === KeyboardKey.Enter) {
            handlePressEnter()
        }
        if (e.code === KeyboardKey.Escape) {
            handleResetInput()
        }

        if (e.ctrlKey) {
            if (e.code === KeyboardKey.ArrowUp) {
                return handlePressArrowUpAndCtrl()
            }
            if (e.code === KeyboardKey.ArrowDown) {
                return handlePressArrowDownCtrlKey()
            }
        }

        if (e.code === KeyboardKey.ArrowUp) {
            handlePressArrowUp()
        }

        if (e.code === KeyboardKey.ArrowDown) {
            handlePressArrowDown()
        }

    }
    const handleResetInput = () => {
        setInputType('')
        setInputValue('')
    }

    const handlePressEnter = () => {
        setInputType("datetime-local")
        setInputValue(parseDate(inputValue))
    }

    return (
        <div>
            <input
                type={inputType}
                className={'calendar'}
                placeholder={'hey'}
                value={inputValue.toString()}
                onKeyDown={onKeyDown}
                id={'calendar'}
                onChange={(e) => setInputValue(e.currentTarget.value)}
            />
        </div>
    )
}

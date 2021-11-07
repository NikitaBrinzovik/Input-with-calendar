import {ACTION_TYPE, CurrencyReducersTypes} from "./actions";


const initialState:CurrencyState ={
    currencies: [
        {
            currencyName: 'USD',
            buyRate: 71,
            sellRate: 70,
        }
    ]
}

export const currencyReducer = (state:CurrencyState = initialState, action:CurrencyReducersTypes):any => {
    switch (action.type) {
        case ACTION_TYPE.DO_SOMETHING:
            return {
                ...state,
            }

    }
    return state
}

type CurrencyState = {
    currencies: Array<CurrencyType>
}
type CurrencyType = {
    currencyName: string;
    buyRate: number;
    sellRate: number;
}
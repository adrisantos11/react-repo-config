import { IClock, IReducer } from '../model'

const addZero = (number: number): string => {
    const stringNumber = String(number);
    if (stringNumber.length === 1) {
        return `0${stringNumber}`;
    } else return stringNumber;
};

export const CLOCK_INITIAL_STATE: IClock = {
    id: ''
}

export const REDUCER_INITIAL_STATE: IReducer = {
    date: {day:'',
    hours:'',
    minutes:'',
    month: '',
    seconds: '',
    year:''}
}

export const reducer = (state: IReducer, action: any): IReducer => {
    const { type } = action;

    if (type === 'update_date') {
        const date = new Date();
        return {
            ...state,
            date: {
                seconds: addZero(date.getSeconds()),
                minutes: addZero(date.getMinutes()),
                hours: addZero(date.getHours()),
                day: addZero(date.getDate()),
                month: addZero(date.getMonth() + 1),
                year: addZero(date.getFullYear()),
            }
        }
    }
}
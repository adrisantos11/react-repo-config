import { IBox, IReducer } from '../model'

export const BOX_INITIAL_STATE: IBox = {
    id: ''
}

export const REDUCER_INITIAL_STATE: IReducer = {
    // Properties here
}

export const reducer = (state: IReducer, action: any): IReducer => {
    const { type } = action;

    if (type === '') {
        return {
            ...state
        }
    }
}
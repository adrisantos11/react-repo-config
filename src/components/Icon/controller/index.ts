import { IIcon, IReducer } from '../model'

export const ICON_INITIAL_STATE: IIcon = {
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
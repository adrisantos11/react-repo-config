import { ICarrousel, IReducer } from '../model'

export const CARROUSEL_INITIAL_STATE: ICarrousel = {
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
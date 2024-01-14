import { ILegend, IReducer } from '../model'

export const LEGEND_INITIAL_STATE: ILegend = {
    id: '',
    direction: 'horizontal',
    items: [],
    itemSelected: null
}

export const REDUCER_INITIAL_STATE: IReducer = {
    itemSelected: null
}

export const LEGEND_COLORS = ['#419bc7'
,'#254e70'
,'#0d1d2a'
,'#abdef7'
,'#67727b'
,'#35434f']

export const reducer = (state: IReducer, action: any): IReducer => {
    const { type, id } = action;

    if (type === '') {
        return {
            ...state
        }
    } else if (type === 'select_item') {
        return {
            ...state,
            itemSelected: id
        }
    }
}
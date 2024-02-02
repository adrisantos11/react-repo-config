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

export const LEGEND_COLORS = ['#f23b3b'
,'#ad3bf2'
,'#3ed856'
,'#3b84f2'
,'transparent']

export const reducer = (state: IReducer, action: any): IReducer => {
    const { type, id } = action;

    if (type === '') {
        return {
            ...state
        }
    } else if (type === 'select_item') {
        return {
            ...state,
            itemSelected: id === state.itemSelected ? null : id
        }
    }
}
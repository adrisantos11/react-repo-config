import { IMenu, IReducer } from '../model'

export const MENU_INITIAL_STATE: IMenu = {
    id: '',
    items: []
}

export const REDUCER_INITIAL_STATE: IReducer = {
    itemSelected: '',
    elementHeight: 0
}

export const reducer = (state: IReducer, action: any): IReducer => {
    const { type, itemSelected, elementHeight } = action;

    if (type === 'update_selected') {
        return {
            ...state,
            itemSelected: itemSelected
        }
    } else if(type === 'set_element_height') {
        return {
            ...state,
            elementHeight: elementHeight
        }
    }
}
import { IBox, IReducer } from '../model'

export const BOX_INITIAL_STATE: IBox = {
    id: '',
    skill: 'expert',
    disabled: false,
    tags: [],
    experience: '',
    title: ''
}

export const REDUCER_INITIAL_STATE: IReducer = {
    // Properties here
}

export const SKILL_LITERALS = {
    'expert': 'Expert',
    'proficient': 'Proficient',
    'intermediate': 'Intermediate',
    'novice': 'Novice',
    'to-learn': 'To learn'
}

export const reducer = (state: IReducer, action: any): IReducer => {
    const { type } = action;

    if (type === '') {
        return {
            ...state
        }
    }
}
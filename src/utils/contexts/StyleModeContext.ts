import {createContext, Dispatch, SetStateAction} from 'react';

export interface IStyleModeContext {
    styleMode: string;
    setStyleMode: Dispatch<SetStateAction<string>>;
}

export const StyleModeContext = createContext<IStyleModeContext>({
    styleMode: '',
    setStyleMode: () => {}
})
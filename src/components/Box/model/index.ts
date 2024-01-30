import { ReactNode } from 'react'

export type IBox = {
	id: string;
    title: string;
    experience: string;
    skill: 'expert' | 'proficient' | 'intermediate' | 'novice' | 'to-learn';
    tags: string[];
    disabled?: boolean;
    children?: ReactNode;
};

export type IReducer = {
    // Put properties here
}
export type IMenuItem = {
    id: string;
    text: string,
    disabled?: boolean
}

export type IMenu = {
	id: string;
    items: IMenuItem[];
    onClick?: (id: string, value: string) => void;
};

export type IReducer = {
    itemSelected: string;
    elementHeight: number;
}
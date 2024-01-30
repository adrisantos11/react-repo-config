export type ILegend = {
	id: string;
    direction: 'vertical' | 'horizontal';
    items: {
        id: string,
        value: string
    }[];
    itemSelected: number;
    onClickOption?: (id: string, color: string) => void;
};

export type IReducer = {
    itemSelected: string;
}
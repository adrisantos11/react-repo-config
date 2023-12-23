export type IClock = {
	id: string;
};

interface IDate {
    seconds: string;
    minutes: string;
    hours: string;
    day: string;
    month: string;
    year: string;
}

export type IReducer = {
    date: IDate;
}
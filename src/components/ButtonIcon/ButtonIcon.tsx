import * as React from "react";
import "./ButtonIcon.scss";

export type IButtonIcon = {
	id: string;
	disabled?: boolean;
	children?: React.ReactNode;
};

export const ButtonIcon: React.FC<IButtonIcon> = (props: IButtonIcon) => {
	return (
		<button className="c-button-icon" type="button" disabled={!!props.disabled}>
			{props.children}
		</button>
	);
};

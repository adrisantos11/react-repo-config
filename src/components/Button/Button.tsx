import * as React from "react";
import "./Button.scss";

export type IButton = {
	id: string;
	disabled?: boolean;
	children?: React.ReactNode;
};

export const Button: React.FC<IButton> = (props: IButton) => {
	return (
		<button className="c-button" type="button" disabled={!!props.disabled}>
			{props.children}
		</button>
	);
};

export default Button;
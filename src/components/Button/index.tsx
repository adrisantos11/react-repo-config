import * as React from "react";
import "./index.scss";

export type IButton = {
	id: string;
	disabled?: boolean;
	children?: React.ReactNode;
};

const Button: React.FC<IButton> = (props: IButton) => {
	return (
		<button
			className="c-button"
			id={props.id}
			type="button"
			disabled={!!props.disabled}
		>
			{props.children}
		</button>
	);
};

export default React.memo(Button);

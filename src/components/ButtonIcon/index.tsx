import * as React from "react";
import "./index.scss";

export type IButtonIcon = {
	id: string;
	disabled?: boolean;
	children?: React.ReactNode;
};

const ButtonIcon: React.FC<IButtonIcon> = (props: IButtonIcon) => {
	return (
		<button
			className="c-button-icon"
			id={props.id}
			type="button"
			disabled={!!props.disabled}
		>
			{props.children}
		</button>
	);
};

export default React.memo(ButtonIcon);

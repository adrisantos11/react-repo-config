import * as React from "react";
import "./index.scss";

export type IDropdown = {
	id: string;
	disabled?: boolean;
};

export const Dropdown: React.FC<IDropdown> = (props: IDropdown) => {
	return (
		<div className="c-dropdown" id={`${props.id}-select`}>
			<label htmlFor=""></label>
			<input type="text" />
		</div>
	);
};

export default React.memo(Dropdown);

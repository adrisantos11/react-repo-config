import * as React from "react";
import "./index.scss";

export type IDropdown = {
	id: string;
	disabled?: boolean;
};

export const Dropdown: React.FC<IDropdown> = (props: IDropdown) => {
	return (
		<div className="c-dropdown" id={`${props.id}-select`}>
			<input
				className="c-dropdown__input"
				type="checkbox"
				id={`${props.id}-input`}
			/>
			<label className="c-dropdown__header" htmlFor={`${props.id}-input`}>
				<span className="c-dropdown__header-text">Selected</span>
				<span className="c-dropdown__header-icon"></span>
			</label>
			<div className="c-dropdown__body"></div>
		</div>
	);
};

export default React.memo(Dropdown);

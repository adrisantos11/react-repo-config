import * as React from "react";
import "./index.scss";

export type IPrettierConfiguration = {
	id: string;
};

/**
 * Page to explain how to configure and use prettier as a code formatter.
 * @param props PrettierConfiguration properties
 * @returns PrettierConfiguration component
 */
const PrettierConfiguration: React.FC<IPrettierConfiguration> = (props: IPrettierConfiguration) => {
	return <div className="p-prettier-configuration">PrettierConfiguration</div>;
};

export default PrettierConfiguration;

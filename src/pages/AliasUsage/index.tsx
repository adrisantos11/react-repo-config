import * as React from "react";
import "./index.scss";

export type IAliasUsage = {
	id: string;
};

/**
 * Blog page to describe the usage of alias in Typescript and Webpack
 * @param props AliasUsage properties
 * @returns AliasUsage component
 */
const AliasUsage: React.FC<IAliasUsage> = (props: IAliasUsage) => {
	return <div className="p-alias-usage">AliasUsage</div>;
};

export default AliasUsage;

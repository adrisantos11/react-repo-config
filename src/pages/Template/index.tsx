import * as React from "react";
import "./index.scss";

export type ITemplate = {
	id: string;
};

/**
 * Page to use as a temmplate for the rest of the pages (pcommon styles)
 * @param props Template properties
 * @returns Template component
 */
const Template: React.FC<ITemplate> = (props: ITemplate) => {
	return <div className="p-template">Template</div>;
};

export default Template;

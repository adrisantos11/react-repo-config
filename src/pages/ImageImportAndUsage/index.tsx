import * as React from "react";
import "./index.scss";

export type IImageImportAndUsage = {
	id: string;
};

/**
 * Blog page to explain how to use images in a web based on Webpack and typesccript.
 * @param props ImageImportAndUsage properties
 * @returns ImageImportAndUsage component
 */
const ImageImportAndUsage: React.FC<IImageImportAndUsage> = (
	props: IImageImportAndUsage
) => {
	return <div className="p-image-import-and-usage">ImageImportAndUsage</div>;
};

export default ImageImportAndUsage;

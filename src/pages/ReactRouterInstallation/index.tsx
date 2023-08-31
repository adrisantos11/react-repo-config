import * as React from "react";
import "./index.scss";

export type IReactRouterInstallation = {
	id: string;
};

/**
 * Blog page to exlplain the installation and usage of React Router.
 * @param props ReactRouterInstallation properties
 * @returns ReactRouterInstallation component
 */
const ReactRouterInstallation: React.FC<IReactRouterInstallation> = (
	props: IReactRouterInstallation
) => {
	return (
		<div className="p-react-router-installation">ReactRouterInstallation</div>
	);
};

export default ReactRouterInstallation;

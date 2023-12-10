import * as React from "react";
import "./index.scss";
import { reducer, REDUCER_INITIAL_STATE } from "../controller";
import { IIcon } from "../model";
import { IconTypes } from "@assets/icons";

/**
 * Icon component to display SVG images
 * @param props Icon properties
 * @returns Icon component
 */
export const Icon: React.FC<IIcon> = (props: IIcon) => {
    const [state, dispach] = React.useReducer(reducer, REDUCER_INITIAL_STATE);

    return <span className={`icon-${IconTypes["pinterest"]} c-icon`} />;
};

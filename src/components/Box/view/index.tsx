import * as React from "react";
import "./index.scss";
import { reducer, REDUCER_INITIAL_STATE } from "../controller";
import { IBox } from "../model";

/**
 * Box component to encapsulate content.
 * @param props Box properties
 * @returns Box component
 */
export const Box: React.FC<IBox> = (props: IBox) => {
    const [state, dispach] = React.useReducer(reducer, REDUCER_INITIAL_STATE);

    return (
        <div className="c-box">
            <span className="c-box__decoration-1"></span>
            <span className="c-box__decoration-2"></span>
            <span className="c-box__children">{props.children}</span>
        </div>
    );
};

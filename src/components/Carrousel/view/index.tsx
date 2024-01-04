import * as React from "react";
import "./index.scss";
import { reducer, REDUCER_INITIAL_STATE } from "../controller";
import { ICarrousel } from "../model";

/**
 * Carrousel to display different cards.
 * @param props Carrousel properties
 * @returns Carrousel component
 */
export const Carrousel: React.FC<ICarrousel> = (props: ICarrousel) => {
    const [state, dispach] = React.useReducer(reducer, REDUCER_INITIAL_STATE);

    return (
        <div className="c-carrousel">
            <div className="c-carrousel__element"></div>
            <div className="c-carrousel__element"></div>
            <div className="c-carrousel__element"></div>
        </div>
    );
};

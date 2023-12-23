import * as React from "react";
import "./index.scss";
import { reducer, REDUCER_INITIAL_STATE } from "../controller";
import { IClock } from "../model";

/**
 * Digital clock to display the current time.
 * @param props Clock properties
 * @returns Clock component
 */
export const Clock: React.FC<IClock> = (props: IClock) => {
    const [state, dispach] = React.useReducer(reducer, REDUCER_INITIAL_STATE);

    React.useEffect(() => {
        setInterval(() => dispach({ type: "update_date" }), 1000);
    });

    return (
        <div className="c-clock">
            <div className="c-clock__date">
                <span>{state.date.day}</span>
                <span>/</span>
                <span>{state.date.month}</span>
                <span>/</span>
                <span>{state.date.year}</span>
            </div>
            <div className="c-clock__hour">
                <span>{state.date.hours}</span>
                <span>:</span>
                <span>{state.date.minutes}</span>
                <span>:</span>
                <span>{state.date.seconds}</span>
            </div>
        </div>
    );
};

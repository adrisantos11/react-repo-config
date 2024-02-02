import * as React from "react";
import "./index.scss";
import { reducer, REDUCER_INITIAL_STATE, SKILL_LITERALS } from "../controller";
import { IBox } from "../model";

/**
 * Box component to encapsulate content.
 * @param props Box properties
 * @returns Box component
 */
export const Box: React.FC<IBox> = (props: IBox) => {
    const [state, dispach] = React.useReducer(reducer, REDUCER_INITIAL_STATE);

    return (
        <div
            className={`c-box ${props.hover ? "c-box--hover" : ""} ${
                props.disabled ? "c-box--disabled" : ""
            }`}
        >
            <div className="c-box__info">
                <span className="c-box__title">{props.title}</span>
                <div className="c-box__subtitle">
                    <div className="c-box__skill">
                        <span
                            className={`c-box__skill-color c-box__skill-color--${props.skill}`}
                        />
                        <span className="c-box__skill-name">
                            {SKILL_LITERALS[props.skill]}
                        </span>
                    </div>
                    <span className="c-box__experience">
                        {props.experience} years
                    </span>
                </div>
            </div>
            <div className="c-box__tags">
                {props.tags.length
                    ? props.tags.map((tag: string) => (
                          <span className="c-box__tag">{tag}</span>
                      ))
                    : "--"}
            </div>
            {props.children ? (
                <span className="c-box__children">{props.children}</span>
            ) : (
                ""
            )}
        </div>
    );
};

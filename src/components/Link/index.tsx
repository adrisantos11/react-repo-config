import * as React from "react";
import "./index.scss";
import { IconTypes } from "@/assets/icons";

export type ILink = {
    id: string;
    text: string;
    icon?: IconTypes;
    onClick?: () => void;
};

/**
 * Component to redirect to different urls, pages, external urls, ...
 * @param props Link properties
 * @returns Link component
 */
const Link: React.FC<ILink> = (props: ILink) => {
    return (
        <div
            className="c-link"
            onClick={() => props.onClick && props.onClick()}
        >
            <div className="c-link__body">
                <span
                    className={`c-link__icon icon-${
                        IconTypes[props.icon || "link"]
                    }`}
                ></span>
                <span className="c-link__text">{props.text}</span>
            </div>
            <span className="c-link__hover-background"></span>
            <span className="c-link__underline"></span>
        </div>
    );
};

export default React.memo(Link);

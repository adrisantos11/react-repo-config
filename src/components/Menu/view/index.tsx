import * as React from "react";
import "./index.scss";
import { reducer, REDUCER_INITIAL_STATE } from "../controller";
import { IMenu, IMenuItem } from "../model";

/**
 * Menu component to display a list of options to navigate
 * @param props Menu properties
 * @returns Menu component
 */
export const Menu: React.FC<IMenu> = (props: IMenu) => {
    const [state, dispach] = React.useReducer(reducer, REDUCER_INITIAL_STATE);
    const menuElemRef = React.useRef(null);

    const onClick = (item: IMenuItem) => {
        props.onClick && props.onClick(item.id, item.text);
        dispach({
            type: "update_selected",
            itemSelected: item.id,
        });
    };

    React.useEffect(() => {
        props.items.length &&
            dispach({
                type: "update_selected",
                itemSelected: props.items[0].id,
            });
        dispach({
            type: "set_element_height",
            itemSelected: menuElemRef.current?.offsetHeight,
        });
    }, []);

    React.useEffect(() => {
        console.log("state:", state);
    }, [state]);

    return (
        <div className="c-menu">
            {props.items.length &&
                props.items.map((item: IMenuItem, index: number) => {
                    return (
                        <span
                            className={`c-menu__item ${
                                state.itemSelected === item.id
                                    ? "c-menu__item--active"
                                    : ""
                            } ${item.disabled ? "c-menu__item--disabled" : ""}`}
                            {...(!item.disabled && {
                                onClick: () => onClick(item),
                            })}
                            {...(index === 0 && { ref: menuElemRef })}
                        >
                            {item.text}
                        </span>
                    );
                })}
            <span
                className="c-menu__side-bar"
                style={{
                    top: `${
                        (100 / props.items.length) *
                        props.items.findIndex(
                            (item: IMenuItem) => item.id === state.itemSelected
                        )
                    }%`,
                    height: "1.5rem",
                }}
            ></span>
        </div>
    );
};

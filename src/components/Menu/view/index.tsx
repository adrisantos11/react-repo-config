import * as React from "react";
import "./index.scss";
import { reducer, REDUCER_INITIAL_STATE } from "../controller";
import { IMenu, IMenuItem } from "../model";
import { useWindowScroll } from "@/utils/custom_hooks";

/**
 * Menu component to display a list of options to navigate
 * @param props Menu properties
 * @returns Menu component
 */
export const Menu: React.FC<IMenu> = (props: IMenu) => {
    const [state, dispach] = React.useReducer(reducer, REDUCER_INITIAL_STATE);
    const menuElemRef = React.useRef(null);
    const { scroll } = useWindowScroll();

    const [elementPositions, setElementPositions] = React.useState<number[]>(
        []
    );

    const onClick = (item: IMenuItem) => {
        props.onClick && props.onClick(item.id, item.text);
        dispach({
            type: "update_selected",
            itemSelected: item.id,
        });
        window.scrollTo(0, document.getElementById(item.id).offsetTop);
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
        const positions: number[] = [];
        props.items.length
            ? props.items.forEach((item: IMenuItem) => {
                  if (!item.disabled) {
                      const element = document.getElementById(item.id);
                      positions.push(element.offsetTop);
                  }
              })
            : [];
        setElementPositions(positions);
    }, [props.items]);

    /**
     * Auto select option when user scrolls
     * How it works?
     *
     * 1. Need to get the offsetTop positions of the props.items in the previous useEffect.
     * 2. Find the index of the actual selected item to allocate it in the elementPositions list.
     *      Ex:
     *          props.items = ['el1', 'el2', 'el3'];
     *          elementPositions = [0, 345, 756];
     *          Selected item = 'el3' => pros.items position = 2 => elementPositions value = 756
     * 3. Depending on the scroll direction, the logic is different:
     *      - 'UP' direction:
     *          Loop until the scroll.position is higher than the [element - 1] position.
     *          Ex: scroll.position = 100
     *              element positions = [0, 56, 124, 345, 678]
     *              Element to select => index = 2 (124)
     *      - 'DOWN' direction:
     *          Loop until scroll.position is lower than the [element + 1] position.
     *          In this case, as the last element position is 1px higher than the maximun scroll, its
     *          necessary to add another condition to make it work.
     *          Ex: scroll.position = 678
     *              element positions = [0, 56, 124, 345, 678]
     *              Element to select => index = 3 (345)
     * 4. Stop loop with 'stop' variable
     */
    React.useEffect(() => {
        console.log("elementPositions:", elementPositions);
        console.log("scroll:", scroll.position);

        const position = props.items.findIndex(
            (item: IMenuItem) => item.id === state.itemSelected
        );
        let index = position;
        let stop = false;
        if (scroll.direction === "up") {
            while (index >= 0 && !stop) {
                if (scroll.position < elementPositions[index - 1]) {
                    index--;
                } else if (scroll.position === 0) {
                    dispach({
                        type: "update_selected",
                        itemSelected: props.items[0].id,
                    });
                    stop = true;
                } else {
                    dispach({
                        type: "update_selected",
                        itemSelected: props.items[index].id,
                    });
                    stop = true;
                }
            }
        } else if (scroll.direction === "down") {
            while (index < props.items.length && !stop) {
                if (scroll.position > elementPositions[index + 1]) {
                    index++;
                } else if (scroll.position - 1 < elementPositions[index + 1]) {
                    dispach({
                        type: "update_selected",
                        itemSelected: props.items[index + 1].id,
                    });
                    stop = true;
                } else {
                    dispach({
                        type: "update_selected",
                        itemSelected: props.items[index].id,
                    });
                    stop = true;
                }
            }
        }
    }, [scroll]);

    return (
        <div className="c-menu">
            {props.items.length &&
                props.items.map((item: IMenuItem, index: number) => {
                    return (
                        <span
                            id={`${item.id}-menu-item`}
                            className={`c-menu__item ${
                                state.itemSelected === item.id
                                    ? "c-menu__item--active"
                                    : ""
                            } ${item.disabled ? "c-menu__item--disabled" : ""}`}
                            {...(!item.disabled && {
                                onClick: () => onClick(item),
                            })}
                            {...(index === 0 && { ref: menuElemRef })}
                            key={`${item.id}-menu-item`}
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

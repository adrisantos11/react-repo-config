import * as React from "react";
import "./index.scss";
import { reducer, REDUCER_INITIAL_STATE } from "../controller";
import { ILegend } from "../model";
import { LEGEND_COLORS } from "../controller";

/**
 * Legend used for data tables and charts
 * @param props Legend properties
 * @returns Legend component
 */
export const Legend: React.FC<ILegend> = (props: ILegend) => {
    const [state, dispach] = React.useReducer(reducer, REDUCER_INITIAL_STATE);

    React.useEffect(() => {
        dispach({
            type: "select_item",
            id: props.items[props.itemSelected || 0].id,
        });
    }, []);

    return (
        <div className={`c-legend c-legend--horizontal`}>
            {props.items.map((item: any, index: number) => (
                <div
                    className={`c-legend__item ${
                        state.itemSelected === item.id
                            ? "c-legend__item--selected"
                            : ""
                    }`}
                    id={item.id}
                    key={`${item.id}-key`}
                    onClick={() => {
                        props.onClickOption &&
                            props.onClickOption(item.id, LEGEND_COLORS[index]);
                        dispach({ type: "select_item", id: item.id });
                    }}
                    onMouseEnter={(ev) => {
                        ev.preventDefault();
                        props.onMouseEnterOption &&
                            props.onMouseEnterOption(item.id);
                    }}
                    onMouseLeave={(ev) => {
                        ev.preventDefault();
                        props.onMouseLeaveOption &&
                            props.onMouseLeaveOption(item.id);
                    }}
                >
                    <span
                        className="c-legend__tag"
                        style={{ backgroundColor: LEGEND_COLORS[index] }}
                    />
                    <span className="c-legend__text">{item.value}</span>
                </div>
            ))}
        </div>
    );
};

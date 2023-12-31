import * as React from "react";
import "./index.scss";
import Button from "@components/Button";
import ButtonIcon from "@components/ButtonIcon";
import Dropdown from "@components/Dropdown";
import Link from "@components/Link";

import { useNavigate } from "react-router-dom";

export type IComponentLibrary = {
    id: string;
};

/**
 * Page where all the components will be displayed.
 * @param props ComponentLibrary properties
 * @returns ComponentLibrary component
 */
const ComponentLibrary: React.FC<IComponentLibrary> = (
    props: IComponentLibrary
) => {
    const navigate = useNavigate();
    return (
        <div className="p-component-library">
            <div className="p-component-library__title-container">
                <span className="p-component-library__title">
                    Component library
                </span>
                <span className="p-component-library__subtitle">
                    Little library with all the components developed
                </span>
            </div>

            <div className="p-component-library__component-wrapper">
                <Button id="button-testing-1">Testing</Button>
                <Button id="button-testing-2">Testing 🥳</Button>
                <Button id="button-testing-3" disabled>
                    Testing 🥳
                </Button>
            </div>
            <div className="p-component-library__component-wrapper">
                <ButtonIcon id="button-icon-testing-1">😊</ButtonIcon>
                <ButtonIcon id="button-icon-testing-2">T</ButtonIcon>
                <ButtonIcon id="button-icon-testing-3" disabled>
                    T
                </ButtonIcon>
            </div>
            <div className="p-component-library__component-wrapper">
                <Dropdown id="dropdown-testing-1"></Dropdown>
            </div>
            <div
                className="p-component-library__component-wrapper"
                style={{ flexDirection: "row" }}
            >
                <span>Link example:</span>
                <Link
                    id="link-test"
                    text="Go to home page"
                    onClick={() => navigate("/")}
                ></Link>
            </div>
        </div>
    );
};

export default ComponentLibrary;

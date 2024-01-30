import * as React from "react";
import "./index.scss";
import Button from "@components/Button";
import ButtonIcon from "@components/ButtonIcon";
import Dropdown from "@components/Dropdown";
import Link from "@components/Link";

import { useNavigate } from "react-router-dom";
import Box from "@/components/Box";
import Legend from "@/components/Legend";
import Menu from "@/components/Menu";

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
            <div
                className="p-component-library__component-wrapper"
                style={{ width: "70%" }}
            >
                <Box
                    id="box-testing-1"
                    skill="expert"
                    tags={[]}
                    title="Test 1"
                    experience="1"
                />
                <Box
                    id="box-testing-2"
                    skill="proficient"
                    disabled
                    tags={[]}
                    title="Test 2"
                    experience="1"
                />
                <Box
                    id="box-testing-3"
                    skill="intermediate"
                    tags={[]}
                    title="Test 3"
                    experience="1"
                />
                <Box
                    id="box-testing-4"
                    skill="novice"
                    tags={[]}
                    title="Test 4"
                    experience="1"
                />
                <Box
                    id="box-testing-5"
                    skill="to-learn"
                    tags={[]}
                    title="Test 5"
                    experience="1"
                />
            </div>
            <div className="p-component-library__component-wrapper">
                <Legend
                    id="legend-testing-1"
                    direction="vertical"
                    items={[
                        { id: "test1", value: "Test 1" },
                        { id: "test2", value: "Test 2" },
                        { id: "test3", value: "Test 3" },
                    ]}
                    itemSelected={0}
                />
            </div>
            <div className="p-component-library__component-wrapper">
                {/* <Menu
                    id="testing-menu"
                    items={[
                        { id: "menu-item-1", text: "Test1" },
                        { id: "menu-item-2", text: "Test2" },
                        { id: "menu-item-3", text: "Test3" },
                    ]}
                ></Menu> */}
            </div>
        </div>
    );
};

export default ComponentLibrary;

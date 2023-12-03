import * as React from "react";
import "./index.scss";
import Image from "@components/Image";
import imagesObj from "@/assets/images";
import Button from "@components/Button";
import { useNavigate } from "react-router-dom";

export type INavbar = {
    id: string;
};

/**
 * Navbar component to navigate through the pages of
 * @param props Navbar properties
 * @returns Navbar component
 */
const Navbar: React.FC<INavbar> = (props: INavbar) => {
    const navigate = useNavigate();

    return (
        <div className="w-navbar">
            <span onClick={() => navigate("/")}>
                <Image id="logo-web" image={imagesObj["web-logo"]}></Image>
            </span>
            <div className="w-navbar__items">
                <span
                    className="w-navbar__item"
                    onClick={() => navigate("/component-library")}
                >
                    Component library
                </span>
                <span
                    className="w-navbar__item"
                    onClick={() => navigate("/react-router-installation")}
                >
                    React router installation
                </span>
                <span
                    className="w-navbar__item"
                    onClick={() => navigate("/app")}
                >
                    App
                </span>
                <span
                    className="w-navbar__item"
                    onClick={() => navigate("/web-utilities")}
                >
                    Web utilities
                </span>
            </div>
            <Button id="login-button" disabled>
                Login
            </Button>
        </div>
    );
};

export default React.memo(Navbar);

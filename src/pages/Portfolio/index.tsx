import * as React from "react";
import "./index.scss";
import imagesObj from "@/assets/images";
import Image from "@components/Image";
import Button from "@components/Button";
import { IconTypes, getIconNames } from "@/assets/icons";
import { useNavigate } from "react-router-dom";
import { StyleModeContext } from "@/utils/contexts";
import useScreenSize from "@/utils/custom_hooks/useScreenSize";
import { IUrl, useFetch } from "@/utils/custom_hooks";
import { fetchDownloadAPI } from "@/utils/custom_hooks/useFetchDownload";
import Menu from "@/components/Menu";

const addZero = (number: number): string => {
    const stringNumber = String(number);
    if (stringNumber.length === 1) {
        return `0${stringNumber}`;
    } else return stringNumber;
};

interface IDate {
    seconds: string;
    minutes: string;
    hours: string;
    day: string;
    month: string;
    year: string;
}

const DATE_INITIAL_STATE: IDate = {
    seconds: "--",
    minutes: "--",
    hours: "--",
    day: "--",
    month: "--",
    year: "--",
};

export type IPortfolio = {
    id: string;
};

/**
 * Portfolio page
 * @param props Portfolio properties
 * @returns Portfolio component
 */
const Portfolio: React.FC<IPortfolio> = (props: IPortfolio) => {
    const navigate = useNavigate();
    const { styleMode, setStyleMode } = React.useContext(StyleModeContext);
    const [date, setDate] = React.useState<IDate>(DATE_INITIAL_STATE);
    const [menu, setMenu] = React.useState<number>(1);
    const { size } = useScreenSize();
    const [url, setUrl] = React.useState<IUrl>(null);
    const { data } = useFetch(url, "test", false);
    const menuRef = React.useRef(null);
    const menuElemRef = React.useRef(null);
    const [menuElementSize, setMenuElementSize] = React.useState<any>({
        menu: 0,
        element: 0,
    });

    React.useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setDate({
                seconds: addZero(date.getSeconds()),
                minutes: addZero(date.getMinutes()),
                hours: addZero(date.getHours()),
                day: addZero(date.getDate()),
                month: addZero(date.getMonth() + 1),
                year: addZero(date.getFullYear()),
            });
        }, 1000);
    });

    const downloadCV = () =>
        fetchDownloadAPI(
            // "http://localhost:3000/get-cv",
            "https://sm-api-adrisantos11.vercel.app/get-cv",
            "Adrián_Santos_2023"
        );

    React.useEffect(() => {
        setUrl({
            url: "https://sm-api-adrisantos11.vercel.app/",
            method: "GET",
        });
        setMenuElementSize({
            menu: menuRef.current.offsetHeight,
            element: menuElemRef.current.offsetHeight,
        });
    }, []);

    React.useEffect(() => {
        if (data && data.id === "test") {
            const { data: endpointData } = data;
            console.log(endpointData);
        }
    }, [data]);

    React.useEffect(() => {
        console.log(size);
        console.log(getIconNames());
    }, [size]);

    React.useEffect(() => {
        console.log(menuElementSize);
    }, [menuElementSize]);

    return (
        <div className="p-portfolio">
            <div className="p-portfolio__background-shadow"></div>
            <div className="p-portfolio__header">
                <span
                    className={`icon-${IconTypes["web-logo"]} p-portfolio__web-logo`}
                    onClick={() => navigate("/")}
                />

                <div className="p-portfolio__header-description">
                    <div className="p-portfolio__name">
                        <span className="p-portfolio__name-text">Hi 👋</span>
                        <span className="p-portfolio__name-text">
                            I'm{" "}
                            <span className="p-portfolio__name-text p-portfolio__name-text--bold">
                                Adrián Santos
                            </span>
                        </span>
                    </div>
                    <span className="p-portfolio__profile">
                        Software Engineer | Full-stack dev
                    </span>
                </div>
                {size.width >= 991 ? (
                    <Button id="download-cv" onClick={downloadCV}>
                        Download CV
                    </Button>
                ) : (
                    ""
                )}
            </div>
            <div className="p-portfolio__clock">
                <div className="p-portfolio__date">
                    <span>{date.day}</span>
                    <span>/</span>
                    <span>{date.month}</span>
                    <span>/</span>
                    <span>{date.year}</span>
                </div>
                <div className="p-portfolio__hour">
                    <span>{date.hours}</span>
                    <span>:</span>
                    <span>{date.minutes}</span>
                    <span>:</span>
                    <span>{date.seconds}</span>
                </div>
            </div>
            <div
                className="p-portfolio__style-mode-toogle"
                onClick={() => {
                    if (styleMode === "light") setStyleMode("dark");
                    else if (styleMode === "dark") setStyleMode("light");
                }}
            >
                <span
                    id="dark-mode-icon"
                    className={`icon-${
                        styleMode === "light"
                            ? IconTypes["moon"]
                            : IconTypes["sun1"]
                    } p-portfolio__style-mode-button`}
                />
            </div>
            <div className="p-portfolio__center-content">
                <div className="p-portfolio__bckg-circle"></div>
                <div className="p-portfolio__slogan">
                    <span className="p-portfolio__slogan-text">THINK</span>
                    <span className="p-portfolio__slogan-text p-portfolio__slogan-text--bold">
                        RIGHT,
                    </span>
                    <span className="p-portfolio__slogan-text">DO IT</span>
                    <span className="p-portfolio__slogan-text p-portfolio__slogan-text--bold">
                        BETTER
                    </span>
                </div>
                <span
                    className={`icon-${IconTypes["bulb-light"]} p-portfolio__bulb`}
                />
                <Image
                    id="portfolio-self-img"
                    image={imagesObj["portfolio-self-img"]}
                    height={4}
                ></Image>
            </div>
            {size.width < 991 ? (
                <Button id="download-cv-mobile" onClick={downloadCV}>
                    Download CV
                </Button>
            ) : (
                ""
            )}
            <div className="p-portfolio__social-container">
                <span
                    className={`icon-${IconTypes["linkedin"]} p-portfolio__social-icon p-portfolio__social-icon--linked-in`}
                    onClick={() =>
                        window.open(
                            "https://www.linkedin.com/in/adrian-santos-mena-66578712a",
                            "_blank"
                        )
                    }
                ></span>
                <span
                    className={`icon-${IconTypes["github"]} p-portfolio__social-icon p-portfolio__social-icon--insta`}
                    onClick={() =>
                        window.open(
                            "https://github.com/adrisantos11?tab=repositories",
                            "_blank"
                        )
                    }
                ></span>
                <span
                    className={`icon-${IconTypes["pinterest"]} p-portfolio__social-icon p-portfolio__social-icon--pinterest`}
                    onClick={() =>
                        window.open(
                            "https://www.pinterest.es/adrisantos11/",
                            "_blank"
                        )
                    }
                ></span>
            </div>
            <div className="p-portfolio__menu" ref={menuRef}>
                <span
                    className={`p-portfolio__menu-item ${
                        menu === 1 ? "p-portfolio__menu-item--active" : ""
                    }`}
                    onClick={() => setMenu(1)}
                    ref={menuElemRef}
                >
                    HOME
                </span>
                <span
                    className={`p-portfolio__menu-item ${
                        menu === 2 ? "p-portfolio__menu-item--active" : ""
                    }`}
                    onClick={() => setMenu(2)}
                >
                    ABOUT ME
                </span>
                <span
                    className={`p-portfolio__menu-item ${
                        menu === 3 ? "p-portfolio__menu-item--active" : ""
                    }`}
                    onClick={() => setMenu(3)}
                >
                    EXPERIENCE
                </span>
                <span
                    className={`p-portfolio__menu-item ${
                        menu === 4 ? "p-portfolio__menu-item--active" : ""
                    } p-portfolio__menu-item--disabled`}
                    // onClick={() => setMenu(4)}
                >
                    PERSONAL PROJECTS
                </span>
                <span
                    className="p-portfolio__menu-bar"
                    style={{
                        top: `${(100 / 4) * (menu - 1)}%`,
                        height: menuElementSize.element,
                    }}
                ></span>
            </div>
            <Menu
                id="portfolio-menu"
                items={[
                    { id: "home-item", text: "HOME" },
                    { id: "about-me-item", text: "ABOUT ME" },
                    { id: "experience-item", text: "EXPERIENCE" },

                    { id: "experience-item1", text: "EXPERIENCE" },
                    { id: "experience-item2", text: "EXPERIENCE" },
                    { id: "experience-item3", text: "EXPERIENCE" },
                    {
                        id: "personal-projects-item",
                        text: "PERSONAL PROJECTS",
                        disabled: true,
                    },
                ]}
            ></Menu>
        </div>
    );
};

export default Portfolio;

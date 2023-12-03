import * as React from "react";
import "./index.scss";
import imagesObj from "@/assets/images";
import Image from "@components/Image";
import Button from "@components/Button";
import { IconTypes } from "@/assets/icons";
import { useNavigate } from "react-router-dom";

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

    return (
        <div className="p-portfolio">
            <div className="p-portfolio__background-shadow"></div>
            <div className="p-portfolio__header">
                <span onClick={() => navigate("/")}>
                    <Image
                        id="sm-portfolio-logo"
                        image={imagesObj["web-logo-dark"]}
                        height={4}
                    ></Image>
                </span>

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
                <Button id="download-cv">Download CV</Button>
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
                <Image
                    id="bulb-portfolio-image"
                    image={imagesObj["bulb-light"]}
                ></Image>
                <Image
                    id="portfolio-self-img"
                    image={imagesObj["portfolio-self-img"]}
                    height={4}
                ></Image>
            </div>
            <div className="p-portfolio__social">
                <span
                    className={`icon-${IconTypes["linkedin"]} p-portfolio__social-icon`}
                    onClick={() =>
                        window.open(
                            "https://www.linkedin.com/in/adrian-santos-mena-66578712a",
                            "_blank"
                        )
                    }
                ></span>
                <span
                    className={`icon-${IconTypes["instagram"]} p-portfolio__social-icon`}
                    onClick={() =>
                        window.open(
                            "https://www.instagram.com/adrisantos_11/",
                            "_blank"
                        )
                    }
                ></span>
                <span
                    className={`icon-${IconTypes["pinterest"]} p-portfolio__social-icon`}
                    onClick={() =>
                        window.open(
                            "https://www.pinterest.es/adrisantos11/",
                            "_blank"
                        )
                    }
                ></span>
            </div>
        </div>
    );
};

export default Portfolio;

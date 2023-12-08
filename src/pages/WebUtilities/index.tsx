import * as React from "react";
import "./index.scss";
import Link from "@components/Link";
import Button from "@components/Button";
import Icons from "@/assets/icons/selection.json";
import { IconTypes, getIconNames } from "@/assets/icons";
import { useNavigate } from "react-router-dom";

export type IWebUtilities = {
    id: string;
};

/**
 * Page to include all web utilities usefull for the web development.
 * @param props WebUtilities properties
 * @returns WebUtilities component
 */
const WebUtilities: React.FC<IWebUtilities> = (props: IWebUtilities) => {
    const navigate = useNavigate();
    return (
        <div className="p-web-utilities">
            <Button id="get-icons-button" onClick={getIconNames}>
                Get icon names
            </Button>
            <Link
                id="what-is-doker-link"
                text="[DOCKER] What is Docker?"
                onClick={() =>
                    window.open(
                        "https://www.linkedin.com/feed/update/urn:li:activity:7091009189396758528/",
                        "_blank"
                    )
                }
            ></Link>
            <Link
                id="catto-css-link"
                text="[CSS] Catto CSS: CSS Animations"
                onClick={() =>
                    window.open("https://www.cattocss.com/", "_blank")
                }
            ></Link>
            <Link
                id="animate-style-link"
                text="[CSS] Animate Style page"
                onClick={() => window.open("https://animate.style/", "_blank")}
            ></Link>
            <Link
                id="xs-games-animatis-link"
                text="[CSS] XS Games animations"
                onClick={() =>
                    window.open("https://xsgames.co/animatiss/", "_blank")
                }
            ></Link>
            <Link
                id="home-link"
                text="Back Home page"
                icon={IconTypes["arrow-left"]}
                onClick={() => navigate("/")}
            ></Link>
        </div>
    );
};

export default WebUtilities;

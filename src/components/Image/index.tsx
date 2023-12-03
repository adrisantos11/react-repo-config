import * as React from "react";
import "./index.scss";

import imagesObj from "../../assets/images";

export interface IImage {
    id: string;
    image: keyof typeof imagesObj;
    height?: number;
}

const Image: React.FC<IImage> = (props: IImage) => {
    return (
        <img
            className="c-image"
            // {...(props.height && { style: { height: `${props.height}rem` } })}
            id={props.id}
            src={props.image}
        ></img>
    );
};

export default React.memo(Image);

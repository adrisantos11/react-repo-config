import * as React from "react";
import "./Image.scss";

import imagesObj from "../../assets/images";

export interface IImage {
	id: string;
	image: keyof typeof imagesObj;
}

export const Image: React.FC<IImage> = (props: IImage) => {
	return <img className="c-image" id={props.id} src={props.image}></img>;
};

import * as React from "react";
import "./index.scss";

import imagesObj from "../../assets/images";

export interface IImage {
	id: string;
	image: keyof typeof imagesObj;
}

const Image: React.FC<IImage> = (props: IImage) => {
	return <img className="c-image" id={props.id} src={props.image}></img>;
};

export default React.memo(Image);

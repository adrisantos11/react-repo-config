import * as React from "react";
import "./index.scss";

export type IBlogTemplate = {
    id: string;
    children: React.ReactNode;
};

/**
 * Default template for a blog page
 * @param props BlogTemplate properties
 * @returns BlogTemplate component
 */
const BlogTemplate: React.FC<IBlogTemplate> = (props: IBlogTemplate) => {
    return (
        <div className="p-blog-template">
            <div className="p-blog-template__container">{props.children}</div>
        </div>
    );
};

export default BlogTemplate;

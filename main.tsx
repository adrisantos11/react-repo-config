import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./src/styles/main_styles.scss";
import router from "./src/router";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <div className="react-repo-config light-mode">
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </div>
);

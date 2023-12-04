import * as React from "react";
import { createRoot } from "react-dom/client";
import "./src/styles/main_styles.scss";
import router from "./src/router";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

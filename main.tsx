import * as React from "react";
import { createRoot } from "react-dom/client";
import "./src/styles/main_styles.scss";
import { routerObject } from "./src/router";
import { RouterProvider } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={routerObject()} />
        <Analytics />
    </React.StrictMode>
);

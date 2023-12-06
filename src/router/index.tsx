import * as React from "react";
import { Outlet, createBrowserRouter, useNavigate } from "react-router-dom";
import ReactRouterInstallation from "@pages/ReactRouterInstallation";
import ComponentLibrary from "@pages/ComponentLibrary";
import App from "../../app";
import WebUtilities from "@/pages/WebUtilities";
import Link from "@components/Link";
import BlogTemplate from "@pages/BlogTemplate";
import Navbar from "@widgets/Navbar";

const TestComponent: React.FC = () => (
    <div style={{ color: "orange" }}>
        <b>Test component example!!</b>
    </div>
);

const Navigate: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}
        >
            <Link
                id="portfolio-link"
                text="Portfolio"
                onClick={() => navigate("/portfolio")}
            />
            <Link
                id="component-library-link"
                text="Component library"
                onClick={() => navigate("/component-library")}
            />
            <Link
                id="react-router-installation-link"
                text="React router installation"
                onClick={() => navigate("/react-router-installation")}
            />
            <Link id="app-link" text="App" onClick={() => navigate("/app")} />
            <Link
                id="web-utilities-link"
                text="Web utilities"
                onClick={() => navigate("/web-utilities")}
            />
        </div>
    );
};

export const routerObject = () => {
    const MainApp = React.lazy(() => import("@pages/MainApp"));
    const Portfolio = React.lazy(() => import("@pages/Portfolio"));

    return createBrowserRouter(
        [
            {
                path: "/",
                element: <MainApp id="main-app" />,
                children: [
                    {
                        path: "/",
                        element: (
                            <>
                                <Navbar id="navbar-test"></Navbar>
                                <Outlet></Outlet>
                            </>
                        ),
                        children: [
                            {
                                path: "/",
                                element: <Navigate />,
                            },
                            {
                                path: "react-router-installation",
                                element: (
                                    <BlogTemplate id="react-router-blog-template">
                                        <ReactRouterInstallation id="react-router-installation-page" />
                                    </BlogTemplate>
                                ),
                            },
                            {
                                path: "component-library",
                                element: (
                                    <BlogTemplate id="component-library-template">
                                        <ComponentLibrary id="component-library-page" />
                                    </BlogTemplate>
                                ),
                            },
                            {
                                path: "app",
                                element: <App />,
                            },
                            {
                                path: "web-utilities",
                                element: (
                                    <WebUtilities id="web-utilities-page" />
                                ),
                            },
                            {
                                path: "nested-1",
                                element: (
                                    <div>
                                        First nested page!! <Outlet />
                                    </div>
                                ),
                                children: [
                                    {
                                        path: "nested-2",
                                        element: (
                                            <div>Second nested page!!</div>
                                        ),
                                    },
                                    {
                                        path: "test-component",
                                        element: <TestComponent />,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        path: "portfolio",
                        element: <Portfolio id="portfolio-page" />,
                    },
                ],
            },
        ],
        { basename: "/" }
    );
};

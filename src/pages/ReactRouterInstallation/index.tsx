import * as React from "react";
import "./index.scss";
import imagesObj from "@images/index";
import Image from "@components/Image";

export type IReactRouterInstallation = {
    id: string;
};

/**
 * Blog page to exlplain the installation and usage of React Router.
 * @param props ReactRouterInstallation properties
 * @returns ReactRouterInstallation component
 */
const ReactRouterInstallation: React.FC<IReactRouterInstallation> = (
    props: IReactRouterInstallation
) => {
    return (
        <div className="p-react-router-installation">
            <h1 className="p-react-router-installation__title">
                REACT ROUTER INSTALLATION AND CONFIGURATION
            </h1>
            <span>
                <span>
                    <b>IMPORTANT!!</b>
                </span>
                <th></th>
                <span>
                    Have a look to the webpack installation and configuration to
                    start from the same point.
                </span>
            </span>
            <span style={{ color: "red" }}>
                Introduce little explanation of how react router works (with
                some
                <b> images</b>)
            </span>
            <div>
                <h2>1. React router installation</h2>
                Install last version of react-router-dom (actual version
                v6.15.0) using npm install react-router-dom Do not install it in
                dev deps because we will need it in our final prod bundle.
            </div>
            <div>
                <h2>2. Create file where the routes will be</h2>
                In a new file (important to create it with the .tsx or .jsx
                extension, depending wich language are you using in the project{" "}
                {`=>`} go to troubleshooting 1), import from react-router-dom:
                createBrowserRouter.
                <span style={{ color: "red" }}>
                    CreateBrowser definition and explanation (with images) with
                    an explanation of RouteObject
                </span>
                <code>{`import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world</div>,
  },
]);

export default router;`}</code>
                <span>
                    Now going to the / url (in my case: http://localhost:3030/
                    or just http://localhost:3030), and you will see the Hello
                    World! string.
                </span>
                <div style={{ width: "300px" }}>
                    <Image
                        id="nested-urls-img"
                        image={imagesObj["hello-world-url-example"]}
                    />
                </div>
            </div>
            <div>
                <h2>3. Adding a nested url</h2>
                <span>
                    Each RouteObjects have the possibility to have a children
                    property. This children property is also an array of new
                    RouteObjects, creating a nested group of RouteObjects from
                    the previous one.
                </span>
                <span>
                    Inside the parent component html, its needed to create the
                    Outlet component. With this component, we will indicate
                    where the children have to appear. To use it, import from
                    react-router-dom library:{" "}
                    <code>{`import { Outlet, createBrowserRouter } from "react-router-dom";
`}</code>
                </span>
                <span>
                    <code>
                        {`[
  {
    path: "/",
    element: (
      <div>
        Hello world!
        <span>
          <Outlet />
        </span>
      </div>
    ),
    children: [
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
            element: <div>Second nested page!!</div>,
          },
        ],
      },
    ],
  },
]`}
                    </code>
                </span>
                <br />
                <div style={{ width: "500px" }}>
                    <Image
                        id="nested-urls-img"
                        image={imagesObj["nested-urls-example"]}
                    />
                </div>
            </div>
            <h2>4. Component redirection</h2>
            <span>
                To redirect to an specific component, the way of doing it is the
                same.
            </span>
            <ol>
                <li>
                    Create the component.
                    <span>
                        <code>{`const TestComponent: React.FC = () => (
  <div style={{ color: "orange" }}>
    <b>Test component example!!</b>
  </div>
);`}</code>
                    </span>
                </li>
                <li>
                    Create new RouteObject inside the nested-1 route.
                    <span>
                        <code>{`{
            path: "test-component",
            element: <TestComponent />,
          }`}</code>
                    </span>
                    <Image
                        id="react-router-component-example"
                        image={imagesObj["react-router-component-example"]}
                    ></Image>
                </li>
            </ol>
            <h2>X. Url params</h2>
            <h2>X. Lazy loading with Webpack</h2>
            <span style={{ color: "red" }}>
                Redirect to another page where I explain the lazy loading with
                visual examples
            </span>
            <h2>X. Page navigation coding</h2>
            <span>asdfasd</span>
            <h1>TROUBLESHOOTING</h1>
            <h2>1. Not allowed to create HTMLElement in element property</h2>
            <span>
                I have created a file named index.ts inside "router" folder, and
                also the createBrowserRouter object instance, but when I try to
                create an element inside the array of createBrowserRouter, it
                doesn't allow me to create an HTMLElement inside the element
                property
                <span>
                    SOLUTION: it allows to input and HTML Template (string), but
                    not React.Node elements like components, etc The solution is{" "}
                    <b>
                        to change the file extension to .tsx/.jsx instead of
                        .ts/.js
                    </b>
                    .
                </span>
            </span>
            <h2>2. Nested redirection doest not work</h2>
            <span>
                Adding a new object to the array does not work:
                <code>{`{
    path: "react-router-installation",
    element: <ReactRouterInstallation id="react-router-installation-page" />,
  },`}</code>
                <span>
                    SOLUTION: its important to have a proper webpack
                    configuration to enable nested urls. Inside webpack
                    configuration, inside the devServer property, add{" "}
                    <code>historyApiFallback: true</code>
                    To lear how to configure it, please go the the{" "}
                    <b>Webpack configuration tutorial</b>
                </span>
            </span>
        </div>
    );
};

export default ReactRouterInstallation;

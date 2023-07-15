import * as React from "react";
import "./app.scss";
import { Button, IButton } from "./src/components/Button";

function App() {
  return (
    <div>
      <Button id="button-testing">Testing 🥳</Button>
      <h1>React app configuration (10/2022)</h1>
      <p>
        React application using <b>Webpack</b>, <b>React</b> and{" "}
        <b>Typescript</b>.
      </p>
      <a href="https://medium.com/@abuduabiodunsulaiman/setup-react-app-with-webpack-ts-and-js-da80cf3b7278">
        Setup React App With Webpack Typescript and Javascript
      </a>
      <h2>1. Install node</h2>
      <p>
        Install Node JS from the official page (
        <a href="https://nodejs.org/en/">Node JS</a>) and install version{" "}
        <b>16.18.0 LTS (Long Term Support)</b>.
      </p>
      <h2>2. Create new project</h2>
      <p>
        Once Node JS is installed, create a new project using{" "}
        <code>npm init</code>. This will create a new package.json file in the
        current folder you are.
      </p>
      <h2>3. Install React</h2>
      <p>
        The application is empty, so we have to specify that is going to be a
        React application. Thats why we have to install React and React DOM.
      </p>
      <ul>
        <li>
          <b>React</b>: This library has all the utilities needed to create
          React components.
        </li>
        <li>
          <b>React DOM</b>: Is the bridge between the client and the DOM and the
          server renderers for React.
        </li>
      </ul>
      <h2>X. MUI instalation</h2>
      <ol>
        <li>
          Npm command:
          <pre>
            <code>
              npm install @mui/material @emotion/react @emotion/styled
            </code>
          </pre>
        </li>
        <li>
          Peer dependences:
          <ul>
            <li>
              <code>react</code> {">"}= 17.0.0
            </li>
            <li>
              <code>react-dom</code> {">"}= 17.0.0
            </li>
          </ul>
        </li>
      </ol>
      EXAMPLE:
      <h2>FIXED PROBLEMS</h2>
      <h3>Ts-config... ????</h3>
      <p>
        In the tutorial says to create a new file called{" "}
        <code>ts-config.json</code> to introduce all the Typescript
        configuration - <b>IT DOESN'T WORK</b>
      </p>
      <p>
        Instead of that, create it as <code>tsconfig.json</code>, and it will
        work properly.
      </p>
      <h3>CSS and SCSS loader configuration steps</h3>
      <ol>
        <li>
          Install loaders:
          <ul>
            <li>
              CSS loader: <code>css-loader</code>
            </li>
            <li>
              Style loader: <code>style-loader</code>
            </li>
            <li>
              SASS: <code>sass</code>
            </li>
            <li>
              Sass loader: <code>sass-loader</code>
            </li>
          </ul>
          <pre>
            <code>npm install -D css-loader style-loader sass sass-loader</code>
          </pre>
        </li>
        <li>
          Introduce it on the <code>webpack.config</code> as a new rule:{" "}
          <pre>
            <code>
              {`{
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
    },
    {
    	test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader",
        options: { limit: false },
    },`}
            </code>
          </pre>
        </li>
        <li>
          Import stylesheet in the prefered JS file:{" "}
          <code>{`import "./app.scss"`}</code>
        </li>
      </ol>
    </div>
  );
}
export default App;

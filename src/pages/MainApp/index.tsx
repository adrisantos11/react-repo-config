import * as React from "react";
import "./index.scss";
import { Outlet } from "react-router-dom";
import { IStyleModeContext, StyleModeContext } from "@utils/contexts";

const STYLE_MODE_INITIAL_STATE = "light";

export type IMainApp = {
    id: string;
};

/**
 * Page to use as a temmplate for the rest of the pages (pcommon styles)
 * @param props Template properties
 * @returns Template component
 */
const MainApp: React.FC<IMainApp> = (props: IMainApp) => {
    const [styleMode, setStyleMode] = React.useState<string>(
        STYLE_MODE_INITIAL_STATE
    );

    const styleModeMemoContext = React.useMemo(
        (): IStyleModeContext => ({
            styleMode: styleMode,
            setStyleMode: setStyleMode,
        }),
        [styleMode]
    );
    return (
        <StyleModeContext.Provider value={styleModeMemoContext}>
            <div className={`main-app ${styleMode}-mode`}>
                <Outlet></Outlet>
            </div>
        </StyleModeContext.Provider>
    );
};

export default MainApp;

import React from "react";
import MainLayouts from "Layouts/MainLayouts";
import LoginRouter from "./Routing/LoginRouter";
import { BrowserRouter } from "react-router-dom";
import GlobalStoreProvider from "HOC/GlobalStoreProvider";

const App = (props) => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <GlobalStoreProvider>
                    <MainLayouts>
                        <LoginRouter />
                    </MainLayouts>
                </GlobalStoreProvider>
            </BrowserRouter>
        </React.Fragment>
    )
};

export default App;
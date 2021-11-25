import React from "react";
import MainLayouts from "Layouts/MainLayouts";
import LoginRouter from "./Routing/LoginRouter";
import { BrowserRouter } from "react-router-dom";
import GlobalStoreProvider from "HOC/GlobalStoreProvider";
import GlobalModalProvider from "HOC/GlobalModalProvider";

const App = (props) => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <GlobalStoreProvider>
                    <GlobalModalProvider>
                        <MainLayouts>
                            <LoginRouter />
                        </MainLayouts>
                    </GlobalModalProvider>
                </GlobalStoreProvider>
            </BrowserRouter>
        </React.Fragment>
    )
};

export default App;
import React from "react";
import MainLayouts from "Layouts/MainLayouts";
import RootRouter from "Routing/Root"
import { BrowserRouter } from "react-router-dom";
import GlobalStoreProvider from "HOC/GlobalStoreProvider";

const App = (props) => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <GlobalStoreProvider>
                    <MainLayouts>
                        <RootRouter />
                    </MainLayouts>
                </GlobalStoreProvider>
            </BrowserRouter>
        </React.Fragment>
    )
};

export default App;
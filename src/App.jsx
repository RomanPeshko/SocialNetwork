import React from "react";
import MainLayouts from "Layouts/MainLayouts";
import RootRouter from "Routing/Root"
import { BrowserRouter } from "react-router-dom";

const App = (props) => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <MainLayouts>
                    <RootRouter />
                </MainLayouts>
            </BrowserRouter>
        </React.Fragment>
    )
};

export default App;
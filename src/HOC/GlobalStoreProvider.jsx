import React from "react";
import { Provider } from "react-redux";
import { store } from "store/initStore";

const GlobalStoreProvider = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
};

export default GlobalStoreProvider;
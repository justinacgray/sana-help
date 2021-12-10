import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Fragment } from "react";
import Routes from "./Routes";

const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Fragment>
    );
};

export default App;

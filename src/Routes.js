import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import SearchTool from "./Components/SearchTool/SearchTool";
import DisplayResults from "./Components/DisplayResults/DisplayResults";

const Routes = () => {
    return (
        <Fragment>
            <Switch>
                <Route component={SearchTool} exact path="/" />
                <Route
                    component={DisplayResults}
                    exact
                    path="/display-results"
                />
            </Switch>
        </Fragment>
    );
};

export default Routes;

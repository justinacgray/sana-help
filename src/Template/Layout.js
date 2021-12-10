import React, { Fragment } from "react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

const Layout = (props) => {
    const { children } = props;
    return (
        <Fragment>
            <NavBar />
            {children}
            <Footer />
        </Fragment>
    );
};

export default Layout;

import React, { Fragment, useState, useEffect } from "react";

import * as Icons from "react-icons/fa";

const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">
                    HelpTool
                </a>
                <form className="d-flex">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default NavBar;

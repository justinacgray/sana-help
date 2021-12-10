import "./SearchTool.css";
import React, { Fragment, useState, useEffect } from "react";
import Layout from "../../Template/Layout";
import Helmet from "react-helmet";
import SearchForm from "../SearchForm/SearchForm";

// child component to Layout
const SearchTool = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Search Tool</title>
            </Helmet>
            <Layout>
                <SearchForm />
                <div className="sliding-background"></div>
            </Layout>
        </Fragment>
    );
};

export default SearchTool;

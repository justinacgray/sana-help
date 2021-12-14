import "./SearchTool.css";
import React, { Fragment, useState, useEffect } from "react";
import Layout from "../../Template/Layout";
import Helmet from "react-helmet";
import SearchForm from "../SearchForm/SearchForm";
import DisplayResults from "../DisplayResults/DisplayResults";
import Pagination from "../Pagination/Pagination";

// child component to Layout
const SearchTool = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Search Tool</title>
            </Helmet>
            <Layout>
                <SearchForm />
                <DisplayResults />
                <Pagination />
            </Layout>
        </Fragment>
    );
};

export default SearchTool;

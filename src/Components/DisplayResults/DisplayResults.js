import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Layout from "../../Template/Layout";

const DisplayResults = (props) => {
    //create state to hold result details

    // const [resultDetails, setResultDetails] = useState({});

    //need to take data from res and render it on page
    useEffect(() => {
        axios
            .get()
            .then((res) => {
                console.log();
                // resultDetails(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Fragment>
            <Helmet>Results</Helmet>
            <h3>Results from your search:</h3>
        </Fragment>
    );
};

export default DisplayResults;

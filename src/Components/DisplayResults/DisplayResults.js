import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Layout from "../../Template/Layout";
import "./DisplayResults.css";

const DisplayResults = (props) => {
    //create state to hold result details

    const [resultDetails, setResultDetails] = useState([]);

    // need to take data from res and render it on page
    useEffect(() => {
        axios
            .get()
            .then((res) => {
                console.log();
                setResultDetails(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Fragment>
            <Helmet>Results</Helmet>
            <section className="container">
                <h3>Results from your search:</h3>
                <table className="results-table">
                    <thead className="results-table-head">
                        <tr>Full Name</tr>
                        <tr>Full Address</tr>
                        <tr>Specialty</tr>
                    </thead>
                    <tbody className="results-table-body">
                        {resultDetails.map((result, index) => {
                            <tr key={index}>
                                <td>result</td>
                                <td>result</td>
                                <td>result</td>
                            </tr>;
                        })}
                    </tbody>
                </table>
            </section>
        </Fragment>
    );
};

export default DisplayResults;

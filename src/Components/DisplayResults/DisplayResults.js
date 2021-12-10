import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Layout from "../../Template/Layout";

const DisplayResults = (props) => {
    //create state to hold result details

    const [resultDetails, setResultDetails] = useState({});

    //need to take data from res and render it on page
    useEffect(() => {
        axios
            .get()
            .then((res) => {
                console.log();
                resultDetails(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Fragment>
            <Helmet>Results</Helmet>
            <Layout>
                <h3>Results from your search:</h3>
                <div>
                    {/* link to go back will be placed here */}
                    <div className="container">
                        <div className="row">
                            {resultDetails.map((oneResult, index) => (
                                <div class="card">
                                    <div class="card-header">
                                        {oneResult.firstName}
                                        {oneResult.lastName}
                                    </div>
                                    <div class="card-body">
                                        <blockquote class="blockquote mb-0">
                                            <p>Full Address goes here</p>
                                            <footer class="blockquote-footer">
                                                {oneResult.speciality}
                                                <cite title="Source Title">
                                                    not sure if necessary
                                                </cite>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
        </Fragment>
    );
};

export default DisplayResults;

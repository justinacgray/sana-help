import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import "./DisplayResults.css";
import Pagination from "../Pagination/Pagination";

const DisplayResults = (props) => {
    // console.log(props);
    //create state to hold result details
    const [resultDetails, setResultDetails] = useState([]);
    // const [loaded, setLoaded] = useState(false);
    const {
        submitURL,
        setSubmitURL,
        loaded,
        setLoaded,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        city,
        setCity,
        state,
        setState,
        providerName,
        setProviderName,
        speciality,
        setSpeciality,
    } = props;

    useEffect(() => {
        axios
            .get(submitURL)
            .then((res) => {
                console.log(res.data);
                setResultDetails(res.data[3]);
                setFirstName("");
                setLastName("");
                setCity("");
                setState("");
                setProviderName("");
                setSpeciality("");
            })
            .catch((err) => {
                console.log(err);
            });
    }, [loaded]);

    return (
        <Fragment>
            <Helmet>Results</Helmet>
            <section className="container">
                <h3>Results from your search:</h3>
                <table className="results-table">
                    <thead className="results-table-head">
                        <th>Full Name</th>
                        <th>NPI</th>
                        <th>Specialty</th>
                        <th>Full Address</th>
                    </thead>
                    <tbody className="results-table-body">
                        {resultDetails.map((result, index) => {
                            // console.log(result);
                            return (
                                <tr key={index}>
                                    <td>{result[0]}</td>
                                    <td>{result[1]}</td>
                                    <td>{result[2]}</td>
                                    <td>{result[3]}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <Pagination />
            </section>
        </Fragment>
    );
};

export default DisplayResults;

import "./SearchTool.css";
import React, { Fragment, useState } from "react";
import Layout from "../../Template/Layout";
import Helmet from "react-helmet";
import SearchForm from "../SearchForm/SearchForm";
import DisplayResults from "../DisplayResults/DisplayResults";

// child component to Layout
const SearchTool = () => {
    //sharing with both components
    const [submitURL, setSubmitURL] = useState(
        "https://clinicaltables.nlm.nih.gov/api/npi_idv/v3/search?terms&q="
    );
    const [loaded, setLoaded] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [providerName, setProviderName] = useState("");
    const [speciality, setSpeciality] = useState("");

    return (
        <Fragment>
            <Helmet>
                <title>Search Tool</title>
            </Helmet>
            <Layout>
                <SearchForm
                    submitURL={submitURL}
                    setSubmitURL={setSubmitURL}
                    loaded={loaded}
                    setLoaded={setLoaded}
                    firstName={firstName}
                    setFirstName={setFirstName}
                    lastName={lastName}
                    setLastName={setLastName}
                    city={city}
                    setCity={setCity}
                    state={state}
                    setState={setState}
                    providerName={providerName}
                    setProviderName={setProviderName}
                    speciality={speciality}
                    setSpeciality={setSpeciality}
                />
                <DisplayResults
                    submitURL={submitURL}
                    setSubmitURL={setSubmitURL}
                    loaded={loaded}
                    setLoaded={setLoaded}
                    firstName={firstName}
                    setFirstName={setFirstName}
                    lastName={lastName}
                    setLastName={setLastName}
                    city={city}
                    setCity={setCity}
                    state={state}
                    setState={setState}
                    providerName={providerName}
                    setProviderName={setProviderName}
                    speciality={speciality}
                    setSpeciality={setSpeciality}
                />
            </Layout>
        </Fragment>
    );
};

export default SearchTool;

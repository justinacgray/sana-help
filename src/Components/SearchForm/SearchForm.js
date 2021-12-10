import React, { useState, useEffect } from "react";
import "./SearchForm.css";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchForm = (props) => {
    const BASE_URL = "https://npiregistry.cms.hhs.gov/api/?version=2.0";
    // const CROSS_DOMAIN = "https://cors-anywhere.herokuapp.com";
    // const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [providerName, setProviderName] = useState("");
    const [speciality, setSpeciality] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let submitURL = BASE_URL + "&pretty=on";
        submitURL += `&first_name=${firstName}`;
        submitURL += `&last_name=${lastName}`;
        submitURL += `&city=${city}`;
        submitURL += `&state=${state}`;
        submitURL += `&organization_name=${providerName}`;
        submitURL += `&taxonomy_description=${speciality}`;
        // console.log(submitURL);
        //use axios to call that submit URL
        axios
            .get(submitURL)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => console.log(error));
        //save response data into state so we can display it
    };

    //using state because we want to stay on the page while we search
    // const [search, setSearch] = useState({
    //     firstName: "",
    //     lastName: "",
    //     city: "",
    //     state: "",
    //     providerName: "",
    //     speciality: "",
    // });

    //handles user's input- valiations would be here
    // const inputChange = (e) => {
    //     console.log(e);
    // };
    return (
        <form onSubmit={handleSubmit} className="container">
            <div className="row">
                <label className="col">
                    First Name:{" "}
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>
                <label className="col">
                    Last Name:{" "}
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label>
                <label className="col">
                    Provider Name:{" "}
                    <input
                        type="text"
                        name=""
                        placeholder="Provider Name"
                        value={providerName}
                        onChange={(e) => setProviderName(e.target.value)}
                    />
                </label>
            </div>
            <div className="row">
                <label className="col">
                    City:
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </label>
                <label className="col">
                    State:
                    <select
                        className="state"
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}>
                        <option value="">Select a State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </label>
                <label className="col">
                    Speciality
                    <select
                        className="state"
                        id="state"
                        value={speciality}
                        onChange={(e) => setSpeciality(e.target.value)}>
                        <option>Select a Speciality</option>
                        <option> Allergy and immunology </option>
                        <option> Anesthesiology</option>
                        <option> Dermatology</option>
                        <option> Diagnostic radiology</option>
                        <option> Family medicine</option>
                        <option> Internal medicine</option>
                        <option> Medical genetics</option>
                        <option> Neurology</option>
                        <option> Nuclear medicine</option>
                        <option> Obstetrics and gynecology</option>
                        <option> Ophthalmology</option>
                        <option> Pathology</option>
                        <option> Pediatrics</option>
                        <option>Physical medicine and rehabilitation</option>
                        <option> Preventive medicine</option>
                        <option> Psychiatry</option>
                        <option> Radiation oncology</option>
                        <option> Surgery</option>
                        <option> Urology</option>
                    </select>
                </label>
            </div>

            <div>
                <button
                    onClick={handleSubmit}
                    type="button"
                    className="btn btn-info">
                    Find My Doctor!
                </button>
            </div>
        </form>
    );
};

export default SearchForm;

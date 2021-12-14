import React, { useState, useEffect, Fragment } from "react";
import "./SearchForm.css";
import axios from "axios";

const SearchForm = (props) => {
    const BASE_URL =
        "https://clinicaltables.nlm.nih.gov/api/npi_idv/v3/search?terms&q=";
    // const BASE_URL = " https://www.hipaaspace.com/api/npi/search?q=";
    // const SECURITY_TOKEN =
    //     "3932f3b0-cfab-11dc-95ff-0800200c9a663932f3b0-cfab-11dc-95ff-0800200c9a66";
    // const BASE_URL ="https://clinicaltables.nlm.nih.gov/api/npi_org/v3/search";
    // const BASE_URL = "https://npiregistry.cms.hhs.gov/api/?version=2.1";
    // const BASE_URL = "https://npi-registry-proxy.herokuapp.com/";
    // const CROSS_DOMAIN = "cors-anywhere.herokuapp.com";
    // const CROSS_DOMAIN = "https://npi-registry-proxy.herokuapp.com/";
    // const REQUEST_URL = `${CROSS_DOMAIN}${BASE_URL}`;

    useEffect(() => {}, []);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [providerName, setProviderName] = useState("");
    const [speciality, setSpeciality] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let submitURL = BASE_URL;
        if (firstName !== "") {
            submitURL += `name.first:${firstName}`;
        }
        if (lastName !== "") {
            submitURL += `+name.last:${lastName}`;
        }
        if (city !== "") {
            submitURL += `+addr_practice.city:${city}`;
        }
        if (state !== "") {
            submitURL += `+addr_practice.state:${state}`;
        }
        if (providerName !== "") {
            submitURL += `+addr_practice.zip:${providerName}`;
        }
        if (speciality !== "") {
            submitURL += `+provider_type:${speciality}`;
        }
        console.log(submitURL);

        axios
            .get(submitURL)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                console.log(res.data);
            })
            .catch((error) => console.log(error));
    };

    return (
        <Fragment>
            <div className="container">
                <div className="wrapper">
                    <div className="doc-img">
                        <p>
                            Let us help you find your next healthcare
                            specialist!
                        </p>
                    </div>
                    {/* FORM STARTS HERE */}
                    <div className="form">
                        <h3>Tell us what you are looking for:</h3>
                        <form onSubmit={handleSubmit} className="">
                            <p>
                                <label>
                                    First Name:
                                    <input
                                        type="text"
                                        name="name.first"
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={(e) =>
                                            setFirstName(e.target.value)
                                        }
                                    />
                                </label>
                            </p>
                            <p>
                                <label>
                                    Last Name:
                                    <input
                                        type="text"
                                        name="name.last"
                                        placeholder="Last Name"
                                        value={lastName}
                                        onChange={(e) =>
                                            setLastName(e.target.value)
                                        }
                                    />
                                </label>
                            </p>
                            <p>
                                <label>
                                    Zipcode:
                                    <input
                                        type="text"
                                        name="addr_practice.zip"
                                        placeholder="Zipcode"
                                        value={providerName}
                                        onChange={(e) =>
                                            setProviderName(e.target.value)
                                        }
                                    />
                                </label>
                            </p>
                            <p>
                                <label>
                                    City:
                                    <input
                                        type="text"
                                        name="addr_practice.city"
                                        placeholder="City"
                                        value={city}
                                        onChange={(e) =>
                                            setCity(e.target.value)
                                        }
                                    />
                                </label>
                            </p>
                            <p>
                                <label>
                                    State:
                                    <select
                                        name="addr_practice.state"
                                        value={state}
                                        onChange={(e) =>
                                            setState(e.target.value)
                                        }>
                                        <option value="">Select a State</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">
                                            District Of Columbia
                                        </option>
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
                                        <option value="MA">
                                            Massachusetts
                                        </option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">
                                            New Hampshire
                                        </option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">
                                            North Carolina
                                        </option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">
                                            South Carolina
                                        </option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">
                                            West Virginia
                                        </option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </select>
                                </label>
                            </p>
                            <p>
                                <label>
                                    Speciality
                                    <select
                                        name="provider_type"
                                        id="provider_type"
                                        value={speciality}
                                        onChange={(e) =>
                                            setSpeciality(e.target.value)
                                        }>
                                        <option>Select a Speciality</option>
                                        <option value="Allergy and immunology">
                                            Allergy and immunology
                                        </option>
                                        <option value="Anesthesiology">
                                            Anesthesiology
                                        </option>
                                        <option value="Dermatology">
                                            Dermatology
                                        </option>
                                        <option value="Family Medicine">
                                            Family Medicine
                                        </option>
                                        <option value="Gynecology">
                                            Gynecology
                                        </option>
                                        <option value="Internal medicine">
                                            Internal medicine
                                        </option>
                                        <option value="Neurology">
                                            Neurology
                                        </option>
                                        <option value="Oncology">
                                            Oncology/Cancer
                                        </option>
                                        <option value="Ophthalmology">
                                            {" "}
                                            Ophthalmology
                                        </option>
                                        <option value="Pathology">
                                            Pathology
                                        </option>
                                        <option value="Pediatrics">
                                            Pediatrics
                                        </option>
                                        <option value="Preventive medicine">
                                            Preventive medicine
                                        </option>
                                        <option value="Psychiatry">
                                            Psychiatry
                                        </option>
                                        <option value="Surgery">Surgery</option>
                                        <option value="Urology">Urology</option>
                                    </select>
                                </label>
                            </p>
                            <p>
                                <button
                                    onClick={handleSubmit}
                                    type="button"
                                    className="">
                                    Find My Doctor!
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SearchForm;

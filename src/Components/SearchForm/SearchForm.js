import React, { useState, Fragment } from "react";
import "./SearchForm.css";

const SearchForm = (props) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();

        // let URLAfterSubmit = submitURL;
        // let submitURL = BASE_URL; - passed through props
        let submitCopy = submitURL;
        if (firstName !== "") {
            setSubmitURL((submitCopy += `name.first:${firstName}`));
        }
        if (lastName !== "") {
            setSubmitURL((submitCopy += `+name.last:${lastName}`));
        }
        if (city !== "") {
            setSubmitURL((submitCopy += `+addr_practice.city:${city}`));
        }
        if (state !== "") {
            setSubmitURL((submitCopy += `+addr_practice.state:${state}`));
        }
        if (providerName !== "") {
            setSubmitURL((submitCopy += `+addr_practice.zip:${providerName}`));
        }
        if (speciality !== "") {
            setSubmitURL((submitCopy += `+provider_type:${speciality}`));
        }
        console.log(submitURL);

        setLoaded(!loaded);
        //clears inputs on the front-end but not the back
        setFirstName("");
        setLastName("");
        setCity("");
        setState("");
        setProviderName("");
        setSpeciality("");
        //sends back to default
        // setSubmitURL(URLAfterSubmit);
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

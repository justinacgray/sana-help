import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Layout from "../../Template/Layout";

const DisplayResults = (props) => {
    //create state to hold result details

    // const [resultDetails, setResultDetails] = useState({});

    //need to take data from res and render it on page
    // useEffect(() => {
    //     axios
    //         .get()
    //         .then((res) => {
    //             console.log();
    //             // resultDetails(res);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);

    return (
        <Fragment>
            <Helmet>Results</Helmet>
            <h3>Results from your search:</h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos, sequi quaerat voluptatem eaque nisi dolorum ipsum eius
            cumque maiores natus repellendus sapiente corrupti non. Beatae
            voluptatum dolor amet eum quam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolore ea enim pariatur rerum
            doloribus suscipit eius modi illum architecto voluptate quisquam
            quasi iste, voluptates voluptatibus numquam dolorum, iure, amet
            assumenda delectus reprehenderit consequuntur! Iste, cumque
            repudiandae animi fugit maiores voluptatibus adipisci. Dicta
            obcaecati quisquam asperiores dolor quasi repellat distinctio fugit
            deleniti in accusantium, et, excepturi consequuntur quod nostrum
            porro voluptates aut cupiditate ad magni explicabo beatae! Alias
            voluptatum tempora perspiciatis fuga accusamus dolorem sed
            voluptates rerum perferendis? Vel minus repudiandae voluptates
            tempore aliquid, reprehenderit corrupti atque, nesciunt tenetur
            voluptatem soluta libero explicabo. Minus ipsam reprehenderit
            numquam distinctio! Enim, corporis alias? Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Autem quas amet dignissimos.
            Itaque laudantium aspernatur, consequuntur voluptate, esse nam
            magnam saepe cupiditate nihil repellendus aperiam nostrum eligendi
            eaque accusantium consequatur deleniti totam, asperiores molestiae
            commodi unde. Vitae assumenda fuga ut earum saepe cum officiis odit
            doloremque quaerat, quisquam odio esse, in recusandae voluptas
            eligendi suscipit dicta. Amet nostrum soluta ad error unde placeat
            dolores illo eum non veritatis voluptatem obcaecati voluptatum
            culpa, molestias sint aliquam similique repellendus. Error aperiam
            cupiditate esse commodi reiciendis rem quae perspiciatis non placeat
            quaerat atque et ipsam, neque eos nihil nostrum. Architecto, eum
            expedita. Sint illo ex dolore aspernatur dolor aperiam corporis, nam
            architecto quo esse, placeat quibusdam non culpa, recusandae ducimus
            saepe excepturi sed labore iste commodi alias rerum. Laborum iure
            earum alias. Est iusto nesciunt laboriosam vitae ad nemo itaque
            corporis labore sint minima eaque totam optio facere, voluptatum
            culpa praesentium odit. Officia excepturi architecto similique
            eveniet harum numquam praesentium maiores, deserunt sed consequatur
            ea vitae ad rem voluptatem repellat, neque ut a obcaecati quam
            exercitationem dolor unde laborum. Et assumenda ipsa dolorum
            consequuntur voluptas voluptatem similique fugit molestiae
            reprehenderit totam rerum nulla nostrum saepe ab harum deserunt,
            asperiores quibusdam obcaecati quas quasi?
        </Fragment>
    );
};

export default DisplayResults;

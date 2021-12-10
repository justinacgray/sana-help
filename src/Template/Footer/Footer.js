import "./Footer.css";
import React, { Fragment } from "react";

const Footer = (props) => {
    return (
        <Fragment>
            <footer id="footer">
                <div className="footer-text">
                    <small>Copyright &copy; Your Website</small>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;

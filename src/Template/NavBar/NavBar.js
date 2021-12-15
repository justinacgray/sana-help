import React from "react";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <h4>Sana Help</h4>
            </div>
            <ul className="nav-links">
                <li>
                    <a href="#">Employers</a>
                </li>
                <li>
                    <a href="#">Members</a>
                </li>
                <li>
                    <a href="#">Brokers</a>
                </li>
                <li>
                    <a href="#">Sana MD</a>
                </li>
                <li>
                    <a href="#">Resources</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;

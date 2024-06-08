import React from "react";
import logo from "../Assets/logo.png";
import inst_icon from "../Assets/inst-icon.png";
import tg_icon from "../Assets/tg-icon.png";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={logo} alt="website-logo" />
                <p>SHOP</p>
            </div>
            <div className="footer-links">
                <li>About</li>
                <li>Contact</li>
            </div>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={inst_icon} alt="inst-icon" />
                </div>
                <div className="footer-icons-container">
                    <img src={tg_icon} alt="tg-icon" />
                </div>
            </div>
            <div className="footer-copyright">
                <p>&copy;Copyright 2024 - All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;

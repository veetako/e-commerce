import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
    return (
        <div className="newsletter">
            <h2>Get The Offers To Your Email</h2>
            <p>Sign up and stay informed</p>
            <div>
                <input type="email" placeholder="Your email" />
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;

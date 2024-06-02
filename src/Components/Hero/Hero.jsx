import React from "react";
import chair from "../Assets/chair.png";
import apple from "../Assets/apple.png";
import lipstick from "../Assets/lipstick.png";
import ckfragrance from "../Assets/ckfragrance.png";
import click from "../Assets/click.png";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>PRODUCTS FOR EVERYONE</h2>
                <div className="hero-start-btn">
                    <div>Start Shopping</div>
                    <img src={click} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img className="hero-apple" src={apple} alt="apple image" />
                <img className="hero-chair" src={chair} alt="chair image" />
                <img
                    className="hero-ckfragrance"
                    src={ckfragrance}
                    alt="calvin klein parfume image"
                />
                <img
                    className="hero-lipstick"
                    src={lipstick}
                    alt="lipstick image"
                />
            </div>
        </div>
    );
};

export default Hero;

import React from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import "./Slider.css";

const Slider = (props) => {
    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 270;
    };

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 270;
    };

    return (
        <div className="slider-container">
            <div className="row-container" id="slider">
                {props.products}
            </div>
            <div className="buttons">
                <button title="scroll left" onClick={slideLeft}>
                    <BsArrowLeftCircleFill />
                </button>
                <button title="scroll right" onClick={slideRight}>
                    <BsArrowRightCircleFill />
                </button>
            </div>
        </div>
    );
};

export default Slider;

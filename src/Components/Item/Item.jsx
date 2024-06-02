import React from "react";
import "./Item.css";

const Item = (props) => {
    return (
        <div className="item">
            <img src={props.images} alt="" />
            <div className="price-title">
                <p>{props.title}</p>
                <div className="item-price">&euro;{props.price}</div>
            </div>
        </div>
    );
};

export default Item;

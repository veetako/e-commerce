import React from "react";
import "./Item.css";

const Item = (props) => {
    if (props.discountPercentage > 18) {
        return (
            <div className="item">
                <img src={props.images} alt="" />
                <div className="price-title">
                    <p>{props.title}</p>
                    <div className="item-old-price">&euro;{props.price}</div>
                    <div className="item-new-price">
                        &euro;
                        {Math.round(
                            props.price -
                                (props.price / 100) * props.discountPercentage
                        )}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="item">
                <img src={props.images} alt="" />
                <div className="price-title">
                    <p>{props.title}</p>
                    <div className="item-new-price">&euro;{props.price}</div>
                </div>
            </div>
        );
    }
};

export default Item;

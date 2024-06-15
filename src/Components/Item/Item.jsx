import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = (props) => {
    if (props.discountPercentage > 18 && props.price > 1) {
        return (
            <Link to={`/product/${props.id}`}>
                <div className="item">
                    <img src={props.images} alt="" />

                    <div className="price-title">
                        <p>{props.title}</p>
                        <div className="item-old-price">
                            &euro;{props.price}
                        </div>
                        <div className="item-new-price">
                            &euro;
                            {Math.round(
                                props.price -
                                    (props.price / 100) *
                                        props.discountPercentage
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        );
    } else {
        return (
            <Link to={`/product/${props.id}`}>
                <div className="item">
                    <img src={props.images} alt="" />

                    <div className="price-title">
                        <p>{props.title}</p>
                        <div className="item-new-price">
                            &euro;{props.price}
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
};

export default Item;

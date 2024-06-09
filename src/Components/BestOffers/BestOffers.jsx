import React from "react";
import "./BestOffers.css";
import { useData } from "../../Hooks/useData";
import Item from "../Item/Item";

const BestOffers = () => {
    const { data } = useData();
    const products = data.map((item) => {
        if (item.discountPercentage > 18) {
            return (
                <Item
                    key={item.id}
                    title={item.title}
                    images={item.images[0]}
                    price={item.price}
                    discountPercentage={item.discountPercentage}
                />
            );
        }
    });
    return (
        <div className="best">
            <h2>BEST OFFERS</h2>
            <div className="best-offers">{products}</div>
        </div>
    );
};

export default BestOffers;

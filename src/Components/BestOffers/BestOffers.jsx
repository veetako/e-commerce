import React from "react";
import "./BestOffers.css";
import { useData } from "../../Hooks/useData";
import Item from "../Item/Item";
import Slider from "../Slider/Slider";

const BestOffers = () => {
    const { data } = useData();
    const products = data.map((item) => {
        if (item.discountPercentage > 18 && item.price > 1) {
            return (
                <Item
                    key={item.id}
                    id={item.id}
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
            <div className="best-offers">
                <Slider products={products} />
            </div>
        </div>
    );
};

export default BestOffers;

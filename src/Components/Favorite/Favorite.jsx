import React from "react";
import "./Favorite.css";
import { useData } from "../../Hooks/useData";
import Item from "../Item/Item";

const Favorite = () => {
    const { data } = useData();
    const products = data.map((item) => {
        if (item.rating >= 4.5) {
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
        <div className="favorite">
            <h2>FAVORITE PRODUCTS</h2>
            <div className="favorite-items">{products}</div>
        </div>
    );
};

export default Favorite;

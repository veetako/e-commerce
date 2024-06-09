import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./CSS/Category.css";
import dropdown from "../Components/Assets/dropdown.png";
import Item from "../Components/Item/Item";

const Category = (props) => {
    const { data } = useContext(ShopContext);
    const products = data.map((item, i) => {
        if (props.category === item.category) {
            return (
                <Item
                    key={i}
                    id={item.id}
                    title={item.title}
                    images={item.images[0]}
                    price={item.price}
                    discountPercentage={item.discountPercentage}
                />
            );
        } else {
            return null;
        }
    });
    return (
        <div className="shop-category">
            <div className="shop-category-amount">
                <p>
                    <span>Showing 1-15 products</span>
                </p>
                <div className="shop-category-sort">
                    Sort by <img src={dropdown} alt="" />
                </div>
            </div>
            <div className="shop-category-products">{products}</div>
            <div className="shop-category-more">More Products</div>
        </div>
    );
};

export default Category;

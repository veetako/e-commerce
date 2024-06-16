import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductPage from "../Components/ProductPage/ProductPage";
import BestOffers from "../Components/BestOffers/BestOffers";
const Product = () => {
    const { data } = useContext(ShopContext);
    const { productId } = useParams();
    const product = data.find((e) => e.id === Number(productId));
    return (
        <>
            <ProductPage product={product} />
            <BestOffers />
        </>
    );
};

export default Product;

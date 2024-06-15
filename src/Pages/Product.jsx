import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductPage from "../Components/ProductPage/ProductPage";
const Product = () => {
    const { data } = useContext(ShopContext);
    const { productId } = useParams();
    const product = data.find((e) => e.id === Number(productId));
    return (
        <>
            <ProductPage product={product} />
        </>
    );
};

export default Product;

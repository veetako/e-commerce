import React from "react";
import "./ProductPage.css";

const ProductPage = (props) => {
    const { product } = props;
    let newPrice;
    let oldPrice;
    if (product.discountPercentage > 18 && product.price > 1) {
        newPrice = Math.round(
            product.price - (product.price / 100) * product.discountPercentage
        );
        oldPrice = product.price;
    } else {
        newPrice = product.price;
        oldPrice = null;
    }
    return (
        <div className="product-page">
            <div className="productpage-left">
                <div className="productpage-images">
                    <img src={product.images[0]} alt=""></img>
                    <img src={product.images[0]} alt=""></img>
                </div>
                <div className="productpage-main-image">
                    <img
                        className="productpage-main-img"
                        src={product.images[0]}
                    />
                </div>
            </div>
            <div className="productpage-right">
                <h1>{product.title}</h1>
                <div className="productpage-prices">
                    <div className="new">&euro;{newPrice}</div>
                    <div className="old">
                        {oldPrice !== null ? <>&euro;{oldPrice}</> : <></>}
                    </div>
                </div>
                <div className="productpage-description">
                    {product.description}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;

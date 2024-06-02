import { useEffect, useState } from "react";

export const useData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://dummyjson.com/products");
            const products = await response.json();
            setData(products.products);
        };
        fetchProducts();
    });
    return {
        data,
    };
};

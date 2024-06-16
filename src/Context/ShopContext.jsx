import React, { createContext } from "react";
import { useData } from "../Hooks/useData";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const { data } = useData();
    const allProducts = { data };
    const getDefaultCart = ()=> {
        let cart = {};
        for (let i = 0; i<data.length;i++) {
            cart[i] = 0;
        }
        return cart
    }
    return (
        <ShopContext.Provider value={allProducts}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

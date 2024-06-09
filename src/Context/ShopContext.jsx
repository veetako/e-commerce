import React, { createContext } from "react";
import { useData } from "../Hooks/useData";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const { data } = useData();
    const allProducts = { data };
    return (
        <ShopContext.Provider value={allProducts}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

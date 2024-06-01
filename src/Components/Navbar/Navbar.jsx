import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart-icon.png";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [menu, setMenu] = useState("groceries");
    return (
        <>
            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <p>SHOP</p>
                </div>
                <ul className="nav-menu">
                    <li
                        onClick={() => {
                            setMenu("shop");
                        }}
                    >
                        <Link to="/">Shop</Link>
                        {menu === "shop" ? <hr /> : <></>}
                    </li>
                    <li
                        onClick={() => {
                            setMenu("groceries");
                        }}
                    >
                        <Link to="/groceries">Groceries</Link>{" "}
                        {menu === "groceries" ? <hr /> : <></>}
                    </li>
                    <li
                        onClick={() => {
                            setMenu("furniture");
                        }}
                    >
                        <Link to="/furniture">Furniture</Link>{" "}
                        {menu === "furniture" ? <hr /> : <></>}
                    </li>
                    <li
                        onClick={() => {
                            setMenu("fragrances");
                        }}
                    >
                        <Link to="/fragrances">Fragrances</Link>{" "}
                        {menu === "fragrances" ? <hr /> : <></>}
                    </li>
                    <li
                        onClick={() => {
                            setMenu("beauty");
                        }}
                    >
                        <Link to="/beauty">Beauty</Link>{" "}
                        {menu === "beauty" ? <hr /> : <></>}
                    </li>
                </ul>
                <div className="nav-login-cart">
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                    <Link to="/cart">
                        <img src={cart_icon} alt="" />
                    </Link>
                    <div className="nav-cart-counter">0</div>
                </div>
            </div>
        </>
    );
};

export default Navbar;

import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Shop />} />
                    <Route
                        path="/groceries"
                        element={<Category category="groceries" />}
                    />
                    <Route
                        path="/furniture"
                        element={<Category category="furniture" />}
                    />
                    <Route
                        path="/fragrances"
                        element={<Category category="fragrances" />}
                    />
                    <Route
                        path="/beauty"
                        element={<Category category="beauty" />}
                    />
                    <Route path="product" element={<Product />}>
                        <Route path=":productId" element={<Product />} />
                    </Route>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

import Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Pages/Shop";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import PageRoot from "./Pages/PageRoot";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageRoot />,
        children: [
            {
                path: "/",
                element: <Shop />,
            },
            {
                path: "/groceries",
                element: <Category category="groceries" />,
            },
            {
                path: "/furniture",
                element: <Category category="furniture" />,
            },
            {
                path: "/fragrances",
                element: <Category category="fragrances" />,
            },
            {
                path: "/beauty",
                element: <Category category="beauty" />,
            },
            {
                path: "/product/:productId",
                element: <Product />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;

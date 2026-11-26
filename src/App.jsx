import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoginPage from "./pages/Login/LoginPage";
import ShopCartPage from "./pages/Shopcart/ShopCartPage";
import ProductDetailsPage from "./pages/ProductDetails/ProductDetailsPage";

export default function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/cart" element={<ShopCartPage />} />
                    <Route path="/product" element={<ProductDetailsPage />} />
                </Route>
            </Routes>
        </>
    );
}
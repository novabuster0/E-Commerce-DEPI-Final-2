import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import CartPage from "./pages/Cart/CartPage";

import ProductDetailsPage from "./pages/ProductDetails/ProductDetailsPage";
import AllCollectionsPage from "./pages/ShopCollection/AllCollectionsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/product" element={<ProductDetailsPage />} />
        <Route path="/collections" element={<AllCollectionsPage />} />
      </Route>
    </Routes>
  );
}
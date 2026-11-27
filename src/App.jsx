import "./App.css";
import { useEffect } from "react";
import { Routes, Route ,useLocation} from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import CartPage from "./pages/Cart/CartPage";

import ProductDetailsPage from "./pages/ProductDetails/ProductDetailsPage";
import AllCollectionsPage from "./pages/ShopCollection/AllCollectionsPage";

export default function App() {
  function handlescroll(){
    window.scrollTo(0,0);
  }

  const loc = useLocation();
  useEffect(handlescroll,[loc.pathname])


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
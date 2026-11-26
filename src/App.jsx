import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoginPage from "./pages/Login/LoginPage";
import CartPage from "./pages/Cart/CartPage";
import ProductDetailsPage from "./pages/ProductDetails/ProductDetailsPage";

export default function App() {
  return (
    <Routes>
      {/* pages with navbar and footer */}
      <Route element={<Layout />}>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product" element={<ProductDetailsPage />} />
      </Route>

      {/* pages without them */}
    </Routes>
  );
}
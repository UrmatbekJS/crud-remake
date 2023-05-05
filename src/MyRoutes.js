import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import AddProductPage from "./pages/AddProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import EditProductPage from "./pages/EditProductPage";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/detail/:id" element={<ProductDetailsPage />} />
        <Route path="/edit/:id" element={<EditProductPage />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;

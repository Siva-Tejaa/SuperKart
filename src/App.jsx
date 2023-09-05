import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categories/Categories";
import Body from "./components/Body/Body";
import SearchPage from "./components/SearchPage/SearchPage";

import "react-loading-skeleton/dist/skeleton.css";

import { Routes, Route, Navigate } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductCategory from "./components/ProductCategory/ProductCategory";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <>
      <Header />
      <Categories />
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route
          exact
          path="/productdetails/:productid"
          element={<ProductDetails />}
        />
        <Route
          exact
          path="/category/:categoryText"
          element={<ProductCategory />}
        />
        <Route exact path="/category/all" element={<Navigate to="/" />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/search/:searchtext" element={<SearchPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

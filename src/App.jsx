import React, { useEffect } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categories/Categories";
import Body from "./components/Body/Body";
import SearchPage from "./components/SearchPage/SearchPage";
import NotFound from "./components/Error/NotFound";

import "react-loading-skeleton/dist/skeleton.css";

import { Routes, Route, Navigate } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductCategory from "./components/ProductCategory/ProductCategory";
import Cart from "./components/Cart/Cart";
import SignUp from "./components/Auth/SignUp/SignUp";
import SignIn from "./components/Auth/SignIn/SignIn";
// import AuthComponents from "./components/authComponents";

import { useSelector, useDispatch } from "react-redux";
import { currentUser } from "./redux/features/userSlice";
import Profile from "./components/Profile/Profile";

const App = () => {

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);


  let userSessData = sessionStorage.getItem("userDetails");


  // console.log(JSON.parse(userSessData));

  useEffect(() => {
    dispatch(currentUser(JSON.parse(userSessData)));
  },[]);

  return (
    <>
      <Header />
      <Categories />
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn/>} />
        <Route exact path="/profile" element={<Profile/>} />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

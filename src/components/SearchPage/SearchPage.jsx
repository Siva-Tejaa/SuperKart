import React, { useState, useEffect } from "react";
import "./SearchPage.css";
import { Link, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getSearchProducts } from "../../redux/features/searchSlice";

const SearchPage = () => {
  const { searchtext } = useParams();

  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.searchProducts);

  useEffect(() => {
    dispatch(getSearchProducts(searchtext));
  }, [searchtext]);

  return (
    <div className="search-page">
      <div className="category-main">
        <div className="category-main-vertical"></div>
        <div className="category-main-text">Search Results</div>
      </div>
      <div className="products">
        {data?.products?.map((product) => (
          <Link to={`/productdetails/${product?.id}`} key={product?.id}>
            <div className="product" title={product?.title}>
              <p className="wishlist" title="Add to WishList">
                <span class="material-icons-outlined">favorite</span>
              </p>
              <img
                src={product?.images[0]}
                className="product-image"
                loading="lazy"
                alt={product?.title}
              />
              <div className="product-title">{product?.title}</div>
              <div className="rating-stock">
                <div className="product-rating">
                  {product?.rating?.toFixed(1)}
                  <span class="material-icons-outlined star">star</span>
                </div>
                <div className="stock">
                  {product?.stock > 0
                    ? `In Stock (${product?.stock})`
                    : "Out of Stock"}
                </div>
              </div>
              <div className="product-price">
                <h4>
                  ₹
                  {Math.round(
                    product?.price * 50 -
                      (Math.ceil(product?.discountPercentage) / 100) *
                        (product?.price * 50)
                  ).toLocaleString()}
                </h4>
                <del className="prod-price">
                  ₹{(product?.price * 50).toLocaleString("en-IN")}
                </del>
                <div className="product-off">
                  {Math.ceil(product?.discountPercentage)}%off
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

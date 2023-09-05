import React, { useEffect } from "react";
import "./Products.css";

import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../../redux/features/productsSlice";

import ProductsSkeleton from "../ProductsSkeleton/ProductsSkeleton";
import Error from "../Error/Error";

import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();

  const { data, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  if (status === "Loading") {
    return (
      <div className="skeleton-map">
        {Array(12)
          .fill("")
          .map((skeleton, index) => (
            <div className="skeleton-child" key={index}>
              <ProductsSkeleton />
            </div>
          ))}
      </div>
    );
  }

  if (status === "Error") {
    return <Error />;
  }

  // {console.log(data)}

  return (
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
  );
};

export default Products;

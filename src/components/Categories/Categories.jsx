import React, { useEffect } from "react";
import "./Categories.css";

import { useSelector, useDispatch } from "react-redux";
import { getProductCategories } from "../../redux/features/productsSlice";

import { Link } from "react-router-dom";

const Categories = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductCategories());
  }, []);

  const updtCategories = ["all", ...categories];

  const categoriesAsObjects = updtCategories?.map((category) => ({
    name: category,
  }));

  if (categories.length < 1) {
    return "";
  }

  return (
    <div className="categories-main">
      <div className="categories">
        {categoriesAsObjects?.map((category, index) => (
          <Link
            to={`/category/${category?.name?.name}`}
            key={index}
            className="cat"
          >
            {category?.name?.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;

import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItems from "../components/ProductItems";
import { ShopContext } from "../context/ShopContext";

const Collection = () => {
  const { products } = useContext(ShopContext);
  
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortOption, setSortOption] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  /**---------------apply filter --------------------------*/
  const applyFilter = () => {
    let productsCopy = [...products];

    // Filter by category
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    // Filter by subCategory
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.type));
    }

    setFilterProducts(productsCopy);
  };

  /**---------------apply sorting --------------------------*/
  const applySort = () => {
    let sorted = [...filterProducts];

    switch (sortOption) {
      case "low-high":
        sorted = sorted.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sorted = sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        // Relevant (default sort)
        sorted = filterProducts;
        break;
    }

    setSortedProducts(sorted);
  };

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  useEffect(() => {
    applySort();
  }, [filterProducts, sortOption]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/**---------------------filter Options ------------------- */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 uppercase select-none"
        >
          filters
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>

        {/**----------------------------category filter--------------- */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium uppercase">categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                onChange={toggleCategory}
              />
              MEN
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
              />
              WOMEN
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Kids"}
                onChange={toggleCategory}
              />
              KIDS
            </p>
          </div>
        </div>
        {/**----------------------------subCategory filter-------------------- */}
       
      </div>

      {/**---------------right side -------------------------- */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title txt1={"all"} txt2={"collections"} />
          {/**------------products sort------------------- */}
          <select
            className="border-2 border-gray-600 text-sm px-2"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Price (Low to High)</option>
            <option value="high-low">Sort by: Price (High to Low)</option>
          </select>
        </div>
        {/**---------------MAP products------------------- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((item, index) => (
              <ProductItems
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;

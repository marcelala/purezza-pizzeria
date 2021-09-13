import React from "react";
import { useParams } from "react-router-dom";
import Category from "../../components/Category";
import List from "../../components/List";
import ProductCard from "./ProductCard";

import { productsData } from "../../data/productData";

export default function CategoryPage() {
  const category = useParams();
  const selectedCategory = productsData.filter((item) => {
    return item.categoryTitle.toLowerCase() === category.category.toLowerCase();
  })[0];

  return (
    <section className={category.category}>
      {/* If this component is only used on CategoryPage, why is the components folder instead of the category folder */}
      {/* consistency -1. Check how well you organized the home */}
      <Category item={selectedCategory} />
      <div className="products-list">
        <List list={selectedCategory.products} Component={ProductCard} />
      </div>
    </section>
  );
}

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
			<Category item={selectedCategory} />
			<div className="products-list">
				<List list={selectedCategory.products} Component={ProductCard} />
			</div>
		</section>
	);
}

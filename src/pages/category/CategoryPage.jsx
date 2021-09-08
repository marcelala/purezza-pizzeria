import React from "react";
import { useParams } from "react-router-dom";
import Categories from "../../components/Categories";
import { productsData } from "../../data/productData";

export default function CategoryPage() {
	const category = useParams();
	const selectedCategory = productsData.filter((item) => {
		return item.categoryTitle.toLowerCase() === category.category.toLowerCase();
	});
	return (
		<section className={category.category}>
			<Categories data={selectedCategory} />
		</section>
	);
}

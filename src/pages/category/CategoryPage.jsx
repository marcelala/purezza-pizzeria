import React from "react";
import { useParams } from "react-router-dom";
import Category from "../../components/Category";
import List from "../../components/List";

import { productsData } from "../../data/productData";

export default function CategoryPage() {
	const category = useParams();
	const selectedCategory = productsData.filter((item) => {
		return item.categoryTitle.toLowerCase() === category.category.toLowerCase();
	});
	return (
		<section className={category.category}>
			<List list={selectedCategory} Component={ Category}/>
		</section>
	);
}

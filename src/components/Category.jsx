import React from "react";
import { useLocation } from "react-router-dom";

import List from "./List";
import ProductCard from "../pages/category/ProductCard";

export default function Category({ category }) {
	const { id, categoryTitle, subtitle, description, img, products } = category;
	const imageSrc = require(`../assets/img/categories/${img}`).default;
	const path = useLocation().pathname;
	return (
		<button className="category-card" key={id}>
			<img className="category-img" src={imageSrc} alt="delicious food" />
			<h2 className="category-subtitle">{subtitle}</h2>
			<h1 className="category-name">{categoryTitle}</h1>
			<p className="category-name">{description}</p>
			{path !== "/" && <List list={products} Component={ProductCard} />}
		</button>
	);
}

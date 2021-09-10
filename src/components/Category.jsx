import React from "react";
import { useLocation } from "react-router-dom";

import List from "./List";
import ProductCard from "../pages/category/ProductCard";

export default function Category({ item }) {
	const { id, categoryTitle, subtitle, description, img, products } = item;
	const imageSrc = require(`../assets/img/categories/${img}`).default;
	const path = useLocation().pathname;
	return (
		<article className="category-card">
			<button key={id}>
				<img src={imageSrc} alt="delicious food" />
				<div className="text-box">
					<h2 className="category-subtitle">{subtitle}</h2>
					<h1 className="category-name">{categoryTitle}</h1>
					<p className="category-description">{description}</p>
				</div>
				{path !== "/" && <List list={products} Component={ProductCard} />}
			</button>
		</article>
	);
}

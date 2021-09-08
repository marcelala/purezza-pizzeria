import React from "react";
import Products from "./Products";

export default function Category({ category }) {
	const { id, categoryTitle, subtitle, description, img, products } = category;
	const imageSrc = require(`../assets/img/categories/${img}`).default;
	return (
		<button className="category-card" key={id}>
			<img className="category-img" src={imageSrc} alt="delicious food" />
			<h2 className="category-subtitle">{subtitle}</h2>
			<h1 className="category-name">{categoryTitle}</h1>
			<p className="category-name">{description}</p>
			<Products products={products} />
		</button>
	);
}

import React from "react";
export default function Category({ category }) {
	const { categoryTitle, subtitle, description, img } = category;
	const imageSrc = require(`../assets/img/categories/${img}`).default;

	return (
		<button className="category-card">
			<img className="category-img" src={imageSrc} alt="delicious food" />
			<h2 className="category-subtitle">{subtitle}</h2>
			<h1 className="category-name">{categoryTitle}</h1>
			<p className="category-name">{description}</p>
		</button>
	);
}

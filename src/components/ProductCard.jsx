import React from "react";

export default function ProductCard({ product,onClick }) {
	const { name, shortDescription, img } = product;
	const imageSrc = require(`../assets/img/products/${img}`).default;
	return (
		<li>
			<article>
				<button className="product-card" onClick>
					<img className="product-img" src={imageSrc} alt="delicious food" />
					<h2 className="product-name">{name}</h2>
					<p className="category-name">{shortDescription}</p>
				</button>
			</article>
		</li>
	);
}

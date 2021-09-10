import React from "react";
import { useHistory, useLocation } from "react-router-dom";

export default function ProductCard({ item }) {
	const { id, name, shortDescription, img } = item;
	const imageSrc = require(`../../assets/img/products/${img}`).default;
	const history = useHistory();
	const category = useLocation().pathname.toLowerCase();
	const url = `../../${category}/${id}`;
	return (
		<li>
			<article>
				<button className="product-card" onClick={() => history.push(url)}>
					<img className="product-img" src={imageSrc} alt="delicious food" />
					<div className="text-box">
						<h2 className="product-name">{name}</h2>
						<p className="category-short-description">{shortDescription}</p>
					</div>
				</button>
			</article>
		</li>
	);
}

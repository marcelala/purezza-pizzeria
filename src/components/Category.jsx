import React from "react";
export default function Category({ item }) {
	const { id, categoryTitle, subtitle, description, img } = item;
	const imageSrc = require(`../assets/img/categories/${img}`).default;
	return (
		<li>
			<article className="category-card">
				<button key={id}>
					<img src={imageSrc} alt="delicious food" />
					<div className="text-box">
						<h2 className="category-subtitle">{subtitle}</h2>
						<h1 className="category-name">{categoryTitle}</h1>
						<p className="category-description">{description}</p>
					</div>
				</button>
			</article>
		</li>
	);
}

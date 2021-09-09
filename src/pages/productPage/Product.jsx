import React from "react";
import List from "../../components/List";
import Ingredient from "./Ingredient";

export default function Product({ product }) {
    const { name, fullDescription, img, ingredientList, nutritionalInfo } = product;
	const imageSrc = require(`../../assets/img/products/${img}`).default;
    return (
			<div className="product">
				<img className="product-img" src={imageSrc} alt="delicious food" />
				<div className="text-box">
					<div className="title">
						<h2 className="oleo">The</h2>
						<h1 className="exo">{name}</h1>
					</div>
					<p>{fullDescription}</p>
				</div>
				<List list={ingredientList} Component={Ingredient} />
			</div>
		);
}

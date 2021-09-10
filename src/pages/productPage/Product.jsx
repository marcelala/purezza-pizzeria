import React from "react";
import List from "../../components/List";
import Ingredient from "./Ingredient";
import NutritionFacts from "./NutritionFacts";

export default function Product({ product }) {
	const { name, fullDescription, img, ingredientList, nutritionalInfo } =
		product;
	const imageSrc = require(`../../assets/img/foods/${img}`).default;
	return (
		<section className="product">
			<img className="product-img" src={imageSrc} alt="delicious food" />
			<div className="text-box">
				<div className="title">
					<h2 className="oleo">The</h2>
					<h1 className="exo">{name}</h1>
				</div>
				<p>{fullDescription}</p>
			</div>
			<div className="ingredients">
				<h2 className="oleo">Ingredient list</h2>
				<List list={ingredientList} Component={Ingredient} />
			</div>
			<section className="nutrition-facts">
				<h2 className="oleo">Nutritional Information</h2>
				<NutritionFacts nutritionalInfo={nutritionalInfo} />
			</section>
		</section>
	);
}

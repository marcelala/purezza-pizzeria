import React from "react";
import { useHistory, useParams } from "react-router-dom";
//projectFiles
import { productsData } from "../../data/productData";
import Product from "./Product";
import Button from "../../components/Button";

export default function ProductPage() {
	const history = useHistory();
	const url = useParams();
	const category = url.category;
	const productId = url.id.toLowerCase();

	function getCategory() {
		const products = productsData.filter((item) => {
			return item.categoryTitle.toLowerCase() === category.toLowerCase();
		})[0].products;
		return products;
	}

	function getProduct() {
		const productToDisplay = getCategory().filter((item) => {
			return item.id === productId;
		})[0];
		return productToDisplay;
	}

	const product = getProduct();

	return (
		<section className="product-page">
			<Product key={product.id} product={product} />
			<Button onClick={() => history.goBack()} theme={"primary"}>
				Return to {category}
			</Button>
		</section>
	);
}

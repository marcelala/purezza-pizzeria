import React from "react";
import ProductCard from "./ProductCard";

export default function Products({ products }) {
	const productsList = products.map((product) => (
		<ProductCard key={product.id} product={product} />
	));
	return <ul>{productsList}</ul>;
}

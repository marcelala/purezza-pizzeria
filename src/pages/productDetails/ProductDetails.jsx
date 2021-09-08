import React from "react";
import { useHistory, useLocation } from "react-router-dom";
//projectFiles
import { productsData } from "../../data/productData";
import List from "../../components/List";
import Product from "../../components/Product";
import Button from "../../components/Button";

export default function ProductDetails() {
    const history = useHistory();
    const location = useLocation();
    const id = location.pathname;
	const selectedProduct = productsData.filter((item) => {
        return (item.id === id);
	});

	return (
		<section className="product-details">
			<List list={selectedProduct} Component={Product} />
			<Product product={selectedProduct} />
			<Button onClick={() => history.goBack()}>Go back</Button>
		</section>
	);
}

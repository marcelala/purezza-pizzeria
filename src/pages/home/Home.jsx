import React from "react";
import Hero from "./Hero";
import List from "../../components/List";
import Category from "../../components/Category";
import { productsData } from "../../data/productData";
export default function Home() {
	return (
		<section className="home">
			<Hero />
			<List list={productsData} Component={Category} />
		</section>
	);
}

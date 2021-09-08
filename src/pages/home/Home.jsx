import React from 'react'
import Hero from "./Hero"
import Categories from '../../components/Categories'
import { productsData } from "../../data/productData";
export default function Home() {
    return (
			<div>
				<Hero />
				<Categories data={productsData} />
			</div>
		);
}

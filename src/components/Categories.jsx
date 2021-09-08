import { products } from "../data/productData";
import Category from "./Category";

export default function Categories() {
	return (
		<div className="projects-list">
			{products.map((category) => (
				<Category key={category.index} category={category} />
			))}
		</div>
	);
}

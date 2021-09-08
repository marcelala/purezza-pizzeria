import Category from "./Category";

export default function Categories({data}) {
	return (
		<div className="categories-container">
			{data.map((category) => (
				<Category key={category.id} category={category} />
			))}
		</div>
	);
}

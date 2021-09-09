export default function Link({ item }) {
	const { icon, link } = item;
	const imageSrc = require(`../assets/img/icons/${icon}`).default;
	return (
		<li>
			<a href={link} target="_blank" rel="noopener noreferrer">
				<img src={imageSrc} alt="social icon" />
			</a>
		</li>
	);
}

export default function BulletItem({ item }) {
    return (
        <li key={item.index}>
            <p> {item} </p>
        </li>
	);
}

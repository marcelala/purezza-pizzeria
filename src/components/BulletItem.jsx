export default function BulletItem({ item }) {
    return <li className="bullet-item" key={ item.index}>{item} </li>;
}

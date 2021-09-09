import React from 'react'
import { restaurant } from "../data/restaurantData";
import List from './List';
import Link from './Link';

export default function Footer() {
    	const socials = restaurant.links;

    return (
			<footer>
				<List list={socials} Component={Link} />
				<p>Copyright © 2021 purezza</p>
			</footer>
		);
}

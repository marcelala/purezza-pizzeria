import React from 'react'

export default function Ingredient({ item }) {
	const { ingredient, icon } = item;
      //const imageSrc = require(`../assets/img/icons/${icon}`).default;
    return (
		<li className="ingredient">
				{/*<img src={imageSrc} alt="" />*/}
				<p>{ingredient}</p>
			</li>
		);
}

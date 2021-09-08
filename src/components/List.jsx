import React from 'react'

export default function List({ list, Component }) {
	const Items = list.map((item) => <Component key={item.id} item={item} />);
	return <ul>{Items}</ul>;
}


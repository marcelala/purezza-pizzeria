import React from "react";
import { Link } from "react-router-dom";
import purezza from "../assets/img/purezza.png";

export default function Nav() {
	return (
		<nav className="nav-bar">
			<div className="logo-container">
				<Link to="/">
					<img className="logo-mobile" src={purezza} alt="background" />
				</Link>
			</div>
			<ul>
				<Link to="/">
					<li>
						<img className="logo" src={purezza} alt="background" />
					</li>
				</Link>
				<Link to="/">
					<li>Home</li>
				</Link>
				<Link to="/pizzas">
					<li>Pizzas</li>
				</Link>
				<Link to="/desserts">
					<li>Desserts</li>
				</Link>
				<Link to="/drinks">
					<li>Drinks</li>
				</Link>
				<Link to="/contact">
					<li>Contact</li>
				</Link>
			</ul>
		</nav>
	);
}

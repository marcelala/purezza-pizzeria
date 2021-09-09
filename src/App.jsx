import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//project files
import Nav from "./components/Nav";
import Home from "./pages/home/Home";
import CategoryPage from "./pages/category/CategoryPage";
import ProductPage from "./pages/productDetails/ProductPage";
import Contact from "./pages/contact/Contact";
import Footer from "./components/Footer";

export default function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route exact path="/:category/" component={CategoryPage} />
					<Route path="/:category/:id" exact component={ProductPage} />
					<Route exact path="/contact" component={Contact} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

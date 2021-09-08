import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//project files
import Nav from "./components/Nav";
import Home from "./pages/home/Home";
import CategoryPage from "./pages/category/CategoryPage";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Contact from "./pages/contact/Contact";
import Footer from "./components/Footer";

export default function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/:categoryName" component={CategoryPage} />
					<Route path="/:categoryName/:name" component={ProductDetails} />
  					<Route path="/contact" component={Contact} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

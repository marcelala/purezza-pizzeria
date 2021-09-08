import React from "react";
import { BrowserRouter, Switch, Route } from "react-dom";
//project files
import Nav from "./components/Nav";
import Home from "./pages/home/Home";
import CategoryPage from "./pages/category/CategoryPage";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Contact from "./pages/contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
		<BrowserRouter>
			<div className="App">
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/category-page" exact component={CategoryPage} />
					<Route path="/product-details" exact component={ProductDetails} />
					<Route path="/contact" exact component={Contact} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;

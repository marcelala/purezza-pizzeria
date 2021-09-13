import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//project files
import Navigation from "./components/Navigation";
import Home from "./pages/home/Home";
import CategoryPage from "./pages/category/CategoryPage";
import ProductPage from "./pages/productPage/ProductPage";
import Contact from "./pages/contact/Contact";
import Footer from "./components/Footer";

/**
 * Good organization strucrture on the pages/ folder
 */
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          {/* You only use exact on "/" (home) */}
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/:category/" exact component={CategoryPage} />
          <Route path="/:category/:id" exact component={ProductPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

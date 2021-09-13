import React from "react";
import Hero from "./Hero";
import List from "../../components/List";
import Category from "../../components/Category";
import { productsData } from "../../data/productData";

// add spacebetween imports and exports
// see how anoyting is to read the words glued together...
export default function Home() {
  return (
    <section className="home">
      <Hero />
      <div className="categories">
        <List list={productsData} Component={Category} />
      </div>
    </section>
  );
}

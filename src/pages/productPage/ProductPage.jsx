import React from "react";
import { useHistory, useParams } from "react-router-dom";
//projectFiles
import { productsData as data } from "../../data/productData"; // alias to just use the word "data"
import Product from "./Product";
import Button from "../../components/Button";

export default function ProductPage() {
  const history = useHistory();
  const url = useParams();
  const categoryURL = url.category; // renamed to avoid conflict with the category below
  const productId = url.id.toLowerCase();

  const category = data.filter((item) => item.key === categoryURL);
  const products = category[0].products;
  const product = products.filter((item) => item.id === productId)[0];

  return (
    <section className="product-details">
      <Product key={product.id} product={product} />
      <Button onClick={() => history.goBack()} theme={"primary"}>
        Return to {categoryURL}
      </Button>
    </section>
  );
}

// A lesson about those functions that can be replaced with derived state
// The methods where confusing, you are using 2 functions in order to get the correct product
// this coudd be refactor like it was done above. Coupling  -1

// To further make your code cleaner drop the .toLowerCase. This is nothing that the user can write manually, thus can mess it up
// like in the todo list. So is not neccesary at all.

// Check your json, i aded some keys for your webspage title and for the computer to undestand the current category url.

// Look how i moved from 2 functins with 15+ lines of code to just 3!!! 😎 (bragging emoji) 🧑🏽‍🏫 (teaching emoji)

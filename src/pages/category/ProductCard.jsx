import React from "react";
import { useHistory, useLocation } from "react-router-dom";

export default function ProductCard({ item }) {
  const { id, name, shortDescription, img } = item;
  const imageSrc = require(`../../assets/img/foods/${img}`).default;
  const history = useHistory();
  const category = useLocation().pathname.toLowerCase();
  const url = `../../${category}/${id}`;
  // you dont need to do this weird url, there is a way to automatically go back to whatever was the previous page
  // search about it, to make your code even better.

  return (
    <li>
      <article className="product-card">
        <button onClick={() => history.push(url)}>
          <img className="product-img" src={imageSrc} alt="delicious food" />
          <div className="text-box">
            <h3 className="product-the">The</h3>
            <h2 className="product-name">{name}</h2>
            <p className="category-short-description">{shortDescription}</p>
          </div>
        </button>
      </article>
    </li>
  );
}

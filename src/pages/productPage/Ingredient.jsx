import React from "react";

export default function Ingredient({ item }) {
  const { ingredient } = item;
  return (
    <li className="ingredient">
      <p>{ingredient}</p>
    </li>
  );
}

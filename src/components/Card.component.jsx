import React from "react";

const Card = ({ category, description, image, price, title, rating }) => {
  return (
    <div>
      <h1>titulo: {title}</h1>
      <img src={image} alt="" />
      <p>descripcion: {description}</p>
      <p>categoria: {category}</p>
      <p>precio: {price}</p>
      <p>count: {rating.count}</p>
      <p>rate: {rating.rate}</p>
    </div>
  )
}

export default Card
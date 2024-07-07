import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <small>Rs. </small>
        <strong>{price}</strong>
      </div>
      <div className="product_rating">
        {Array(rating).fill().map((_, i) => (
          <p key={i}>🌟</p>
        ))}
      </div>
      <img src={image} alt={title} />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;

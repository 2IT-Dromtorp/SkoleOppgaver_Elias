import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Spesifikasjoner:</strong> {product.specs}</p>
      <p><strong>Pris:</strong> {product.price}</p>
      <button onClick={() => addToCart(product)}>Legg til i handlekurv</button>
    </div>
  );
};

export default Product;

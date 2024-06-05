import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart">
      <h2>Handlekurv</h2>
      {cart.length === 0 ? (
        <p>Handlekurven er tom</p>
      ) : (
        <>
          <ul>
            {cart.map(product => (
              <li key={product.id}>
                <p>{product.name} - {product.price} x {product.quantity}</p>
                <button onClick={() => removeFromCart(product.id)}>Fjern en</button>
              </li>
            ))}
          </ul>
          <button onClick={handleCheckout}>Fullfør kjøp</button>
        </>
      )}
    </div>
  );
};

export default Cart;

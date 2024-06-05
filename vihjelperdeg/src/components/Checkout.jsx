import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = { name, address, email, cart };

    axios.post('http://localhost:8080/api/checkout', order)
      .then(response => {
        console.log('Order placed:', response.data);
        setCart([]); 
        localStorage.removeItem('cart');
        navigate('/confirmation');
      })
      .catch(error => {
        console.error('There was an error placing the order:', error);
      });
  };

  return (
    <div className="checkout">
      <h2>Fullfør kjøp</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Navn</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Adresse</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send bestilling</button>
      </form>
    </div>
  );
};

export default Checkout;

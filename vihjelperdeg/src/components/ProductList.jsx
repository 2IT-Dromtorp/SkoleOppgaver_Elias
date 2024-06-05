import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Det oppstod en feil under henting av produkter:", error);
      });
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      <div className="cart-link-container">
        <Link to="/cart" className="cart-link">
          Cart
        </Link>
      </div>{" "}
    </div>
  );
};

export default ProductList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "{}")
  );

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get("/api/items");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleOrder = async (itemId) => {
    try {
      await axios.post(`/api/order/${itemId}`);
      fetchItems();
      setCart((old) => {
        const newCart = { ...old };
        if (newCart[itemId]) {
          newCart[itemId] += 1;
        } else {
          newCart[itemId] = 1;
        }
        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      });
    } catch (error) {
      console.error("Error ordering item:", error);
    }
  };

  const handleRemove = (itemId) => {
    setCart((old) => {
      const newCart = { ...old };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  return (
    <>
      <h1>Tilgjengelige Varer i Kantinen</h1>
      <div>
        <div id="cart">
          {items
            ? Object.entries(cart).map(([key, val]) => {
                const item = items.find((it) => it.id === parseInt(key));
                return (
                  <div className="cart_item" key={key}>
                    <div className="cart_item_name">{item.Mat_navn}</div>
                    <div className="cart_item_price">
                      {val} stk, {item.Pris} kr, {item.Pris * val} kr tot
                    </div>
                    <button onClick={() => handleRemove(item.id)}>
                      Fjern 1
                    </button>
                  </div>
                );
              })
            : undefined}
        </div>
        {Object.keys(cart).length > 0 ? (
          <button
            onClick={() => {
              setCart([]);
              localStorage.setItem("cart", "[]");
            }}
          >
            Betal
          </button>
        ) : undefined}
      </div>
      <div id="item_list">
        {items
          ? items.map((item) => (
              <Item key={item.id} item={item} onOrder={handleOrder} />
            ))
          : undefined}
      </div>
    </>
  );
};

export default ItemList;

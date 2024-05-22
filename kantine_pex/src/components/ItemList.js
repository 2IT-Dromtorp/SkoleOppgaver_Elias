import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './Item';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('/api/items');
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const handleOrder = async (itemId) => {
        try {
            await axios.post(`/api/order/${itemId}`);
            fetchItems(); // Refresh items after ordering
        } catch (error) {
            console.error('Error ordering item:', error);
        }
    };


    return (
        <div>
            <h1>Tilgjengelige Varer i Kantinen</h1>
            <div>
                {items.map(item => (
                    <Item key={item.id} item={item} onOrder={handleOrder} />
                ))}
            </div>
        </div>
    );
};

export default ItemList;

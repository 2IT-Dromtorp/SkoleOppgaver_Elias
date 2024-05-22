import React from 'react';

const Item = ({ item, onOrder }) => {
    return (
        <div className="item">
            <h2>{item.Mat_navn}</h2>
            <p>{item.description}</p>
            <p>Pris: {item.price || 69} NOK</p>
            <p>{item.STK} stk</p>
            <button onClick={() => onOrder(item.id)}>Bestill</button>
        </div>
    );
};

export default Item;

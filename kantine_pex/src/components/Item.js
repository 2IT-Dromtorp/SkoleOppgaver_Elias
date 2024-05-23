import React from 'react';

const Item = ({ item, onOrder }) => {
    return (
        <div className="item">
            <h2>{item.Mat_navn}</h2>
            <p>{item.description}</p>
            <img className='item_image' src={item.Bilde} alt={item.Mat_navn} />
            <p>Pris: {item.Pris || '??'} NOK</p>
            <p>{item.STK} stk</p>
            <button onClick={() => onOrder(item.id)} disabled={item.STK === 0}>Bestill</button>
        </div>
    );
};

export default Item;

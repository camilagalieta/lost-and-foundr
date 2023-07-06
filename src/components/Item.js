import React from 'react';

function Item({ item }) {
  return (
    <div>
      <h3>{item.itemName}</h3>
      <p>Descrição: {item.description}</p>
      <p>Local: {item.location}</p>
    </div>
  );
}

export default Item;
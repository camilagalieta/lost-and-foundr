import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './LostItems.css'

function LostItems() {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetchItems();
    }, []);
  
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:3001/items');
        setItems(response.data);
      } catch (error) {
        console.error('Failed to fetch items!', error);
      }
    };
    return (
        <div className='lost-items'>
            <h2>Itens Perdidos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Item Perdido</th>
                        <th>Descrição</th>
                        <th>Local</th>
                        <th>Data de Resgistro</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.item_id}>
                            <td>{item.item_name}</td>
                            <td>{item.item_description}</td>
                            <td>{item.location_found}</td>
                            <td>{item.registration_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LostItems;

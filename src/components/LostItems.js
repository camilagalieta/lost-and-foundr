import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import './LostItems.css'


function LostItems() {
    const [items, setItems] = useState([]);
    const [selectedItem, getSelectedItem] = useState(null);
    const navigate = useNavigate();
  
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

    const handleItemSelect = (item) => {
        // getSelectedItem(item);
        navigate('/item-checkout', { state: { item } });
    };

    const handleItemCheckout = () => {
        navigate('/item-checkout', { state: { selectedItem } });
    }

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
                        <tr 
                            key={item.item_id}
                            onClick={() => handleItemSelect(item)}
                            className={selectedItem === item ? 'selected':''}
                        >
                            <td>{item.item_name}</td>
                            <td>{item.item_description}</td>
                            <td>{item.location_found}</td>
                            <td>{item.registration_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="submit-btn-atualizar" onClick={handleItemCheckout}>Atualizar</button>
        </div>
    );
}

export default LostItems;

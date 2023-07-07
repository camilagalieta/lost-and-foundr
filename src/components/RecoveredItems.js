import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './RecoveredItems.css';

function RecoveredItems() {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetchItems();
    }, []);
  
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:3001/items/recovered/report');
        setItems(response.data);
      } catch (error) {
        console.error('Failed to fetch items!', error);
      }
    };
    return (
        <div className='recovered-items'>
            <h2>Itens Recuperados</h2>
            <table>
                <thead>
                    <tr>
                        <th>Item Perdido</th>
                        <th>Descrição</th>
                        <th>Local</th>
                        <th>Data de Resgistro</th>
                        <th>Nome do Dono</th>
                        <th>Data de Entrega</th>
                    </tr>
                </thead>
                <tbody>
                    {items.filter((item) => item.recovery_date !== null).map((item) => (
                        <tr key={item.item_id}>
                            <td>{item.item_name}</td>
                            <td>{item.item_description}</td>
                            <td>{item.location_found}</td>
                            <td>{item.registration_date}</td>
                            <td>{item.recovered_by}</td>
                            <td>{item.recovery_date }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RecoveredItems;

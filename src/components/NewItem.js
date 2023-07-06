import React, { useState } from 'react';

function NewItem() {
    const [formulario, setFormulario] = useState({
        itemPerdido: '', 
        descricao: '', 
        local: '', 
        dataRegistro: ''
    });

    const {itemPerdido, descricao, local, dataRegistro} = formulario;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormulario((prevState) => ({
            ...prevState, 
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
          <h2>Novo Item</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="itemPerdido">Item Perdido:</label>
              <input type="text" id="itemPerdido" name="itemPerdido" value={itemPerdido} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="descricao">Descrição:</label>
              <input type="text" id="descricao" name="descricao" value={descricao} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="local">Local:</label>
              <input type="text" id="local" name="local" value={local} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="dataRegistro">Data de Registro:</label>
              <input type="text" id="dataRegistro" name="dataRegistro" value={dataRegistro} onChange={handleChange} />
            </div>
            <button type="submit">Salvar</button>
          </form>
        </div>
      );

}

export default NewItem;
export async function PostItem() {
  const newItem = {
    item_name: formulario.itemPerdido,
    item_description: formulario.descricao,
    location_found: formulario.local,
    registration_date: formulario.dataRegistro,
    recovered_by: formulario.nomeDono,
    recovered_date: formulario.dataEntrega,
  };

  axios
    .update("http://localhost:3001/items/update/:id", newItem)
    .then((response) => {
      if (response.status === 200) {
        console.log("Item salvo com sucesso!");
      } else {
        console.log("falhooooooou");
      }
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

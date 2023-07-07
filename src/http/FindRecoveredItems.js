export async function FindRecoveredItems() {
    try {
      const response = await axios.get('http://localhost:3001/items/recovered/report');
      setItems(response.data);
    } catch (error) {
      console.error('Failed to fetch items!', error);
    }
  };
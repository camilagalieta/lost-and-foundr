export async function FindItems() {
  await axios.get("http://localhost:3001/items");
}

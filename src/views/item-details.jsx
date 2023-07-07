import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export function ItemDetailsView(props) {
  const [data, setData] = useState([]);

  async function findItemDetails() {
    await axios
      .get("http://localhost:3001/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {})
      .finally(() => {});
  }

  useEffect(() => {
    findItemDetails();
  }, []);

  return (
    <Container className="items-section">
      <h2>Detalhes</h2>
    </Container>
  );
}

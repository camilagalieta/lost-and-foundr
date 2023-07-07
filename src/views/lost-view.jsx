import { Container, Row } from "react-bootstrap";
import { ItemCard } from "../widgets/item-card";
import axios from "axios";
import { useEffect, useState } from "react";

export function LostView(props) {
  const [data, setData] = useState([]);

  async function findItems() {
    await axios
      .get("http://localhost:3001/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {})
      .finally(() => {});
  }

  useEffect(() => {
    findItems();
  }, []);

  return (
    <Container className="items-section" id="lost">
      <h2>Items Perdidos</h2>
      <Row style={{ gap: "25px" }}>
        {data.map((item) => (
          <ItemCard {...item} />
        ))}
      </Row>
    </Container>
  );
}
